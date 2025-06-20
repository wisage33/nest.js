import { TimeService } from './time.service';
export declare class TimeController {
    private readonly timeService;
    constructor(timeService: TimeService);
    getTime(): Date;
}
