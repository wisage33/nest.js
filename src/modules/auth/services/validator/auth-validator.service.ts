import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { UserRepository } from "src/modules/user/repository/user.repository";
import { CredentialsDto } from "../../dto/credential.dto";
import * as bcrypt from 'bcrypt';
import { AuthJwtService } from "../jwt/jwt.service";
import { UniqueDto } from "../../dto/unique.dto";

@Injectable()
export class AuthValidator {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly authJwtService: AuthJwtService
    ) {}

    async validateUserByLogin(login: string) {
        const user = await this.userRepository.findUnique({ login })
        if(!user) {
            throw new NotFoundException("User not found");
        };
        return user;
    }

    async validateUserById(id: number) {
        const user = await this.userRepository.findUnique({ id });
        if(!user) {
            throw new NotFoundException("User not found")
        }
        return user;
    }

    async validateCredentials(credentialsDto: CredentialsDto) {
        const { login, password } = credentialsDto;
        const user = await this.validateUserByLogin(login);
        this.validationPassword(password, user.password);
        return user;
    }

    async validateRefreshTokens(refreshToken: string) {
        if(!refreshToken || typeof refreshToken !== 'string') {
            throw new UnauthorizedException("Invalid refresh token")
        }
        const { sub, iat, exp } = await this.authJwtService.verifyAsync(refreshToken);
        const user = await this.userRepository.findUnique({ id: sub })

        if(!user || !user.refreshToken) {
            throw new NotFoundException("Invalid credentials");
        };

        const isValidToken = await bcrypt.compare(refreshToken, user.refreshToken)
        if(!isValidToken) {
            throw new UnauthorizedException("Refresh token is invalid");
        }
        return sub;
    }

    async validationPassword(password: string, hashedPassword: string) {
        const isValidPassword = await bcrypt.compare(password, hashedPassword);
        if(!isValidPassword) {
            throw new UnauthorizedException("Invalid password");
        };
        return true;
    }
}