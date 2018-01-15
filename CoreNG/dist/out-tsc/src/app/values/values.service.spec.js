"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var values_service_1 = require("./values.service");
describe('ValuesService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [values_service_1.ValuesService]
        });
    });
    it('should be created', testing_1.inject([values_service_1.ValuesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=values.service.spec.js.map