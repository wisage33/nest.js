import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { ItemRepository } from './repository/item.repository';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { ItemValidator } from './validator/item-validator.service';

@Module({
  imports: [PrismaModule],
  providers: [ItemService, ItemRepository, ItemValidator],
  controllers: [ItemController],
})
export class ItemModule {}
