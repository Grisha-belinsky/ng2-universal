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
var platform_browser_1 = require("@angular/platform-browser");
var auth_service_1 = require("../../services/auth.service");
var router_1 = require("@angular/router");
var ConfirmpasswordComponent = (function () {
    function ConfirmpasswordComponent(authService, router, route, titleService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
    }
    ConfirmpasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('Reset Account | Bizns Tool');
        var param_id = this.route.snapshot.params['id'];
        var param_code = this.route.snapshot.params['code'];
        this.authService.getConfirmation(param_id, param_code)
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.router.navigate(['/confirm']);
        });
    };
    return ConfirmpasswordComponent;
}());
ConfirmpasswordComponent = __decorate([
    core_1.Component({
        selector: 'app-confirmpassword',
        templateUrl: './confirmpassword.component.html',
        styleUrls: ['./confirmpassword.component.css']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router,
        router_1.ActivatedRoute,
        platform_browser_1.Title])
], ConfirmpasswordComponent);
exports.ConfirmpasswordComponent = ConfirmpasswordComponent;
//# sourceMappingURL=confirmpassword.component.js.map