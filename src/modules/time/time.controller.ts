import { Controller, Get } from '@nestjs/common';
import { TimeService } from './time.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('time')
export class TimeController {
  constructor(private readonly timeService: TimeService) {}

  @ApiOperation({ summary: 'Get current time by user' })
  @Get()
  getTime() {
    return this.timeService.time();
  }
}
