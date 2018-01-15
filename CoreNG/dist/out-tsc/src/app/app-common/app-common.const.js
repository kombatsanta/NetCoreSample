"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//declare var BASE_ADDRESS: string;
var AppCommonConst = /** @class */ (function () {
    function AppCommonConst() {
        this.BASE_ADDRESS = "http://localhost:41588/api";
    }
    Object.defineProperty(AppCommonConst.prototype, "TOKEN_URL", {
        // General properties
        // Token management
        get: function () { return this.BASE_ADDRESS + '/token'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppCommonConst.prototype, "VALUES_URL", {
        get: function () { return this.BASE_ADDRESS + '/values'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppCommonConst.prototype, "USER", {
        //User controller
        get: function () { return this.BASE_ADDRESS + '/user'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppCommonConst.prototype, "PROFILE", {
        //Profile controller
        get: function () { return this.BASE_ADDRESS + '/profile'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppCommonConst.prototype, "LANGUAGE", {
        // Language controller
        get: function () { return this.BASE_ADDRESS + '/language'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppCommonConst.prototype, "BASE", {
        get: function () {
            return this.BASE_ADDRESS;
        },
        enumerable: true,
        configurable: true
    });
    AppCommonConst = __decorate([
        core_1.Injectable()
    ], AppCommonConst);
    return AppCommonConst;
}());
exports.AppCommonConst = AppCommonConst;
//# sourceMappingURL=app-common.const.js.map