import { Injectable, Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    async createUser(data: Prisma.UserCreateInput) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        try {
            return await this.prisma.user.create({
            data: {
                ...data,
                password: hashedPassword
            }
        });
        } catch(error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                if(error.code = "P2002") {
                    return {
                        statusCode: 400,
                        message: `Not unique: ${error.meta?.target}`
                    }
                }
            }

            if(error instanceof Prisma.PrismaClientUnknownRequestError) {
                return {
                    message: "Database error"
                }
            }
        }
    }
}
