import { Injectable, Module, NotFoundException, UnauthorizedException } from '@nestjs/common';import { Prisma } from '@prisma/client';
import { DTOLogin } from 'src/dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async signIn(userData: DTOLogin) {

        const { login, password } = userData
        console.log(login)
        const dbUser = await this.prisma.user.findUnique({ where: { login } })

        if(!dbUser) {
            throw new NotFoundException("User not found")
        }

        const validPassword = await bcrypt.compare(password, dbUser.password)

        if(!validPassword) {
            throw new UnauthorizedException("Password isn't valid")
        }

        return {
            user: dbUser
        }
    }
}
