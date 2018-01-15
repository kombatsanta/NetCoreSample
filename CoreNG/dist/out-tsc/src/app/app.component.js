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
var app_toolbar_service_1 = require("./app-toolbar/app-toolbar.service");
var currentuser_service_1 = require("./app-common/services/currentuser.service");
var eventbus_service_1 = require("./app-common/services/eventbus.service");
var auth_service_1 = require("./app-common/services/auth.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(toolbarService, eventBusService, currentUserService, authService) {
        var _this = this;
        this.toolbarService = toolbarService;
        this.eventBusService = eventBusService;
        this.currentUserService = currentUserService;
        this.authService = authService;
        this.title = 'app';
        this.currentUser = null;
        this.mainMenuItems = this.toolbarService.getMenuItems();
        this.activeMenuItem$ = this.toolbarService.activeMenuItem$;
        eventBusService.getCurrentUserObservable.subscribe(function (data) {
            _this.currentUser = data;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onLogout = function () {
        this.currentUserService.reset();
        this.authService.logout();
        this.eventBusService.broadcastCurrentUser(this.currentUserService.currentUser);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html'
        }),
        __metadata("design:paramtypes", [app_toolbar_service_1.AppToolbarService,
            eventbus_service_1.EventBusService,
            currentuser_service_1.CurrentUserService,
            auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map