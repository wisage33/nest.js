import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserValidator {
  async checkUnique(user) {
    console.log(false)
    if (user instanceof Prisma.PrismaClientKnownRequestError) {
      return false;
    }
    return user;
  }
}
