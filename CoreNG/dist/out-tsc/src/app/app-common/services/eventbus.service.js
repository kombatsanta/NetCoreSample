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
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/observable/from");
var EventBusService = /** @class */ (function () {
    function EventBusService() {
        this.currentUser = new Subject_1.Subject();
        this.getCurrentUserObservable = Observable_1.Observable.from(this.currentUser);
    }
    EventBusService.prototype.broadcastCurrentUser = function (currentUser) {
        this.currentUser.next(currentUser);
    };
    EventBusService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], EventBusService);
    return EventBusService;
}());
exports.EventBusService = EventBusService;
//# sourceMappingURL=eventbus.service.js.map