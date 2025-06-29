import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/user/repository/user.repository';

@Injectable()
export class DeliveryValidator {
  constructor(private readonly userRepository: UserRepository) {}

  async isOwner(userId: number) {
    const user = await this.userRepository.findUnique({ id: userId });
    return user;
  }
}
