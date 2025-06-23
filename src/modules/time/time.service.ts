import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeService {
    time() {
        return new Date();
    }
}
