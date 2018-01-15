"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_toolbar_service_1 = require("./app-toolbar.service");
describe('AppToolbarService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [app_toolbar_service_1.AppToolbarService]
        });
    });
    it('should be created', testing_1.inject([app_toolbar_service_1.AppToolbarService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=app-toolbar.service.spec.js.map