import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeService {
    Time() {
        return new Date();
    }
}
