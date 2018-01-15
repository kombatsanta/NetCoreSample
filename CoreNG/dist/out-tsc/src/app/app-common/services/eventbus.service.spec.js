"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var eventbus_service_1 = require("./eventbus.service");
describe('EventbusService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [eventbus_service_1.EventBusService]
        });
    });
    it('should be created', testing_1.inject([eventbus_service_1.EventBusService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=eventbus.service.spec.js.map