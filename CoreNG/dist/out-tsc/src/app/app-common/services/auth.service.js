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
var app_common_const_1 = require("./../app-common.const");
var AuthService = /** @class */ (function () {
    function AuthService(http, api) {
        this.http = http;
        this.api = api;
    }
    AuthService.prototype.login = function (userName, pwd) {
        localStorage.removeItem("token");
        var params = new http_1.HttpParams().append("username", userName).append("password", pwd);
        var options = {
            params: params
        };
        return this.http.post(this.api.TOKEN_URL, null, options)
            .map(function (token) {
            localStorage.setItem("token", token.token);
            return true;
        }, function (err) {
            return false;
        });
    };
    AuthService.prototype.getAuthorizationToken = function () {
        return localStorage.getItem("token");
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("token");
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, app_common_const_1.AppCommonConst])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map