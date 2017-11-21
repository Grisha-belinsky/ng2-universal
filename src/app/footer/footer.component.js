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
var modal_dlg_service_1 = require("../services/modal-dlg.service");
var FooterComponent = (function () {
    function FooterComponent(modalService) {
        this.modalService = modalService;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.openTermsModalDlg = function (e) {
        e.preventDefault();
        this.modalService.termsModalDlg();
    };
    FooterComponent.prototype.openPrivacyModalDlg = function (e) {
        e.preventDefault();
        this.modalService.privacyModalDlg();
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.css']
    }),
    __metadata("design:paramtypes", [modal_dlg_service_1.ModalDlgService])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map