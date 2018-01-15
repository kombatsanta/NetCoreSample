"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var currentuser_service_1 = require("./currentuser.service");
describe('CurrentUserService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [currentuser_service_1.CurrentUserService]
        });
    });
    it('should be created', testing_1.inject([currentuser_service_1.CurrentUserService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=currentuser.service.spec.js.map