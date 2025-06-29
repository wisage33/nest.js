"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusDto = exports.enumStatus = void 0;
const openapi = require("@nestjs/swagger");
var enumStatus;
(function (enumStatus) {
    enumStatus["onWay"] = "onWay";
    enumStatus["delivered"] = "delivered";
})(enumStatus || (exports.enumStatus = enumStatus = {}));
class UpdateStatusDto {
    status;
    id;
    constructor(status, id) {
        this.status = status;
        this.id = id;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateStatusDto = UpdateStatusDto;
//# sourceMappingURL=update-status.dto.js.map