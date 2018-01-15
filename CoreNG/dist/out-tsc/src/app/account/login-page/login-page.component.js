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
var auth_service_1 = require("./../../app-common/services/auth.service");
var currentuser_service_1 = require("./../../app-common/services/currentuser.service");
var eventbus_service_1 = require("./../../app-common/services/eventbus.service");
var router_1 = require("@angular/router");
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authService, currentUserService, eventBusService, router, route) {
        this.authService = authService;
        this.currentUserService = currentUserService;
        this.eventBusService = eventBusService;
        this.router = router;
        this.route = route;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.onLogin = function () {
        var _this = this;
        this.authService.login(this.userName, this.pwd).subscribe(function (data) {
            if (data == true) {
                _this.currentUserService.loadCurrentUser().subscribe(function (data) {
                    _this.eventBusService.broadcastCurrentUser(_this.currentUserService.currentUser);
                    _this.router.navigate(['/home']);
                });
            }
            else {
                _this.currentUserService.reset();
                _this.eventBusService.broadcastCurrentUser(_this.currentUserService.currentUser);
            }
        });
    };
    LoginPageComponent.prototype.onLogout = function () {
        this.currentUserService.reset();
        this.authService.logout();
        this.eventBusService.broadcastCurrentUser(this.currentUserService.currentUser);
    };
    LoginPageComponent.prototype.onSubmit = function () {
    };
    LoginPageComponent = __decorate([
        core_1.Component({
            selector: 'login-page',
            templateUrl: './login-page.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            currentuser_service_1.CurrentUserService,
            eventbus_service_1.EventBusService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], LoginPageComponent);
    return LoginPageComponent;
}());
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=login-page.component.js.map