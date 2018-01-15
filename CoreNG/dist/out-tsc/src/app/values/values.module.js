"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var app_common_module_1 = require("../app-common/app-common.module");
var values_routing_module_1 = require("./values-routing.module");
var values_page_component_1 = require("./values-page/values-page.component");
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { AuthInterceptor } from './../app-common/auth.interceptor';
var ValuesModule = /** @class */ (function () {
    function ValuesModule() {
    }
    ValuesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                app_common_module_1.AppCommonModule.forRoot(),
                values_routing_module_1.ValuesRoutingModule
            ],
            //providers: [{
            //  provide: HTTP_INTERCEPTORS,
            //  useClass: AuthInterceptor,
            //  multi: true,
            //}],
            declarations: [values_page_component_1.ValuesPageComponent]
        })
    ], ValuesModule);
    return ValuesModule;
}());
exports.ValuesModule = ValuesModule;
//# sourceMappingURL=values.module.js.map