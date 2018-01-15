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
var core_1 = require("@angular/core");
var values_service_1 = require("./../values.service");
var ValuesPageComponent = /** @class */ (function () {
    function ValuesPageComponent(valuesService) {
        this.valuesService = valuesService;
    }
    ValuesPageComponent.prototype.ngOnInit = function () {
    };
    ValuesPageComponent.prototype.onGetValues = function () {
        var _this = this;
        this.valuesString = "";
        this.valuesService.getValues().subscribe(function (result) {
            _this.valuesString = result.data;
        });
    };
    ValuesPageComponent.prototype.onGetValuesSecure = function () {
        var _this = this;
        this.valuesString = "";
        this.valuesService.getValuesSecure().subscribe(function (result) {
            _this.valuesString = result.data;
        });
    };
    ValuesPageComponent = __decorate([
        core_1.Component({
            selector: 'app-values-page',
            templateUrl: './values-page.component.html'
        }),
        __metadata("design:paramtypes", [values_service_1.ValuesService])
    ], ValuesPageComponent);
    return ValuesPageComponent;
}());
exports.ValuesPageComponent = ValuesPageComponent;
//# sourceMappingURL=values-page.component.js.map