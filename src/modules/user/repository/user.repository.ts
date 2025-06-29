import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({
      data,
    });
  }

  async findUnique(where: Prisma.UserWhereUniqueInput) {
    console.log(where);
    return this.prismaService.user.findUnique({
      where,
      include: {
        shops: true,
      },
    });
  }

  async update(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ) {
    return this.prismaService.user.update({
      where,
      data,
    });
  }
}
