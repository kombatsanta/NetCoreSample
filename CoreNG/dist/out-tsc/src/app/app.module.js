"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var http_3 = require("@angular/common/http");
var auth_interceptor_1 = require("./app-common/auth.interceptor");
var forms_1 = require("@angular/forms");
var app_common_module_1 = require("./app-common/app-common.module");
var app_routing_module_1 = require("./app-routing.module");
var account_module_1 = require("./account/account.module");
var account_routing_module_1 = require("./account/account-routing.module");
var home_module_1 = require("./home/home.module");
var home_routing_module_1 = require("./home/home-routing.module");
var values_module_1 = require("./values/values.module");
var values_routing_module_1 = require("./values/values-routing.module");
var app_component_1 = require("./app.component");
var app_toolbar_service_1 = require("./app-toolbar/app-toolbar.service");
var auth_service_1 = require("./app-common/services/auth.service");
var currentuser_service_1 = require("./app-common/services/currentuser.service");
var values_service_1 = require("./values/values.service");
var eventbus_service_1 = require("./app-common/services/eventbus.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                home_module_1.HomeModule,
                home_routing_module_1.HomeRoutingModule,
                values_module_1.ValuesModule,
                values_routing_module_1.ValuesRoutingModule,
                account_module_1.AccountModule,
                account_routing_module_1.AccountRoutingModule,
                app_common_module_1.AppCommonModule.forRoot(),
                router_1.RouterModule.forRoot([{
                        path: '', redirectTo: '/home', pathMatch: 'full'
                    }])
            ],
            providers: [app_toolbar_service_1.AppToolbarService,
                auth_service_1.AuthService,
                currentuser_service_1.CurrentUserService,
                values_service_1.ValuesService,
                eventbus_service_1.EventBusService,
                {
                    provide: http_3.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true,
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map