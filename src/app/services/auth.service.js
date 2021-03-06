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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var app_setting_1 = require("../app-setting");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isBusy = false;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(app_setting_1.AppSetting.serviceBase + 'token', 'grant_type=password&username=' + username + '&password=' + password + '&client_id=' + app_setting_1.AppSetting.clientId, headers)
            .map(function (res) {
            var response = res.json();
            _this.isBusy = true;
            localStorage.setItem('authorizationData', JSON.stringify({
                token: response.access_token,
                userName: username,
                refreshToken: response.refresh_token
            }));
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 15);
            var data = { token: response.access_token,
                userName: username,
                refreshToken: response.refresh_token,
                signalToken: '&perId=' + response.perId + '&compId=' + response.compId
            };
            document.cookie = 'authData' + "=" + data + "; " + 'expires' + expireDate;
        });
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('authorizationData');
    };
    AuthService.prototype.register = function (registration) {
        this.logout();
        this.isBusy = true;
        return this.http.post(app_setting_1.AppSetting.serviceBase + 'api/account/register', registration)
            .map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.forget = function (email) {
        return this.http.post(app_setting_1.AppSetting.serviceBase + 'api/account/forgotpassword/', email)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getConfirmation = function (id, code) {
        return this.http.get(app_setting_1.AppSetting.serviceBase + 'api/account/confirmemail/' + id + '?code=' + code)
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map