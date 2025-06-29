"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryService = void 0;
const common_1 = require("@nestjs/common");
const delivery_repository_1 = require("./repository/delivery.repository");
const delivery_validator_service_1 = require("./validator/delivery-validator.service");
let DeliveryService = class DeliveryService {
    deliveryRepository;
    deliveryValidator;
    constructor(deliveryRepository, deliveryValidator) {
        this.deliveryRepository = deliveryRepository;
        this.deliveryValidator = deliveryValidator;
    }
    async getStatus(getStatusDto) {
        return this.deliveryRepository.getDelivery(getStatusDto);
    }
    async updateStatus(updateStatusDto) {
        const { id, status } = updateStatusDto;
        return this.deliveryRepository.changeStatus({ id }, { status });
    }
};
exports.DeliveryService = DeliveryService;
exports.DeliveryService = DeliveryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [delivery_repository_1.DeliveryRepository,
        delivery_validator_service_1.DeliveryValidator])
], DeliveryService);
//# sourceMappingURL=delivery.service.js.map