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
var auth_service_1 = require("../../services/auth.service");
var router_1 = require("@angular/router");
var app_setting_1 = require("../../app-setting");
var platform_browser_1 = require("@angular/platform-browser");
var LoginComponent = (function () {
    function LoginComponent(authService, router, route, titleService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.model = {};
        this.isBusy = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authService.logout();
        this.titleService.setTitle('Log In | Bizns Tool');
        // get return url from route parameters or default to '/'
        this.returnUrl = app_setting_1.AppSetting.appBase;
    };
    LoginComponent.prototype.onSubmit = function (form) {
        if (form.valid) {
            this.login();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isBusy = true;
        this.authService.login(this.model.email, this.model.password)
            .subscribe(function (data) {
            _this.isBusy = false;
            console.log(_this.returnUrl);
            /*window.location.href = this.returnUrl;*/
        }, function (error) {
            _this.isBusy = false;
            if (error != null) {
                _this.message = JSON.parse(error._body).error_description;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router,
        router_1.ActivatedRoute,
        platform_browser_1.Title])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map