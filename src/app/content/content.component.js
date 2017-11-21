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
var ng2_meta_1 = require("ng2-meta");
var ContentComponent = (function () {
    function ContentComponent(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
    }
    ContentComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('CRM for Small Business and Contractors | Bizns Tool');
        this.metaService.setTitle('CRM for Small Business and Contractors | Bizns Tool');
        this.metaService.setTag('og:description', 'Bizns Tool is Online CRM Software for Small Business, ' +
            'Micro Business, Freelancers and Contractors. Create Projects, Estimates, Quotes and Invoices in one Software.');
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    core_1.Component({
        selector: 'app-content',
        templateUrl: './content.component.html',
        styleUrls: ['./content.component.css']
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title, ng2_meta_1.MetaService])
], ContentComponent);
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map