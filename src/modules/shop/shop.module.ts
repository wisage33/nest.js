import { Module } from "@nestjs/common";
import { ShopService } from "./shop.service";
import { ShopController } from "./shop.controller";
import { ShopRepository } from "./repository/shop.repostory";
import { AuthModule } from "../auth/auth.module";
import { CoreModule } from "src/core/core.module";
import { PrismaModule } from "src/core/prisma/prisma.module";

@Module({
    imports: [AuthModule, PrismaModule],
    providers: [ShopService, ShopRepository],
    controllers: [ShopController],
})
export class ShopModule {}