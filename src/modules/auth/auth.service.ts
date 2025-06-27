import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/modules/auth/dto/login.dto';
import * as bcrypt from 'bcrypt';
import { TokenResponseDTO } from './dto/token-response.dto';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import { AuthJwtService } from './service/jwt/jwt.service';
import { Payload } from './dto/payload.dto';
import { AuthValidator } from './service/validator/auth-validator.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authJwtService: AuthJwtService,
    private readonly authValidator: AuthValidator,
  ) {}

  async signIn(loginDto: LoginDto): Promise<TokenResponseDTO> {
    const user = await this.authValidator.validateCredentials(loginDto);

    const payload = { sub: user.id };
    const tokens = this.generateTokens(payload);

    const hashedRefreshToken = await bcrypt.hash(
      (await tokens).refresh_token,
      10,
    );
    await this.userRepository.update(
      { id: payload.sub },
      { refreshToken: hashedRefreshToken },
    );

    return tokens;
  }

  async generateTokens(payload: Payload) {
    const [access_token, refresh_token] = await Promise.all([
      this.authJwtService.signAsync(payload, '15m'),
      this.authJwtService.signAsync(payload, '7d'),
    ]);

    return {
      access_token,
      refresh_token,
    };
  }

  async refreshTokens(refreshToken: string) {
    const sub = await this.authValidator.validateRefreshTokens(refreshToken);
    const { access_token, refresh_token } = await this.generateTokens({ sub });

    const hashedRefreshToken = await bcrypt.hash(refresh_token, 10);
    await this.userRepository.update(
      { id: sub },
      { refreshToken: hashedRefreshToken },
    );
    return {
      access_token,
      refresh_token,
    };
  }
}
