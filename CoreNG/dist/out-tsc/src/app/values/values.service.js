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
var http_1 = require("@angular/common/http");
var app_common_const_1 = require("./../app-common/app-common.const");
var ValuesService = /** @class */ (function () {
    function ValuesService(http, api) {
        this.http = http;
        this.api = api;
    }
    ValuesService.prototype.getValues = function () {
        return this.http.get(this.api.VALUES_URL);
    };
    ValuesService.prototype.getValuesSecure = function () {
        return this.http.get(this.api.VALUES_URL + "/secure");
    };
    ValuesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, app_common_const_1.AppCommonConst])
    ], ValuesService);
    return ValuesService;
}());
exports.ValuesService = ValuesService;
//# sourceMappingURL=values.service.js.map