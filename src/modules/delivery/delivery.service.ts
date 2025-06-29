import { Injectable, UseGuards } from '@nestjs/common';
import { DeliveryRepository } from './repository/delivery.repository';
import { GetStatusDto } from './dto/get-status.dto';
import { DeliveryValidator } from './validator/delivery-validator.service';
import { DeliveryOwnerGuard } from './guard/delivery-owner.guard';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class DeliveryService {
  constructor(
    private readonly deliveryRepository: DeliveryRepository,
    private readonly deliveryValidator: DeliveryValidator,
  ) {}

  async getStatus(getStatusDto: GetStatusDto) {
    return this.deliveryRepository.getDelivery(getStatusDto);
  }

  async updateStatus(updateStatusDto: UpdateStatusDto) {
    const { id, status } = updateStatusDto;
    return this.deliveryRepository.changeStatus({ id }, { status });
  }
}
