"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Grisha on 8/3/2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var content_component_1 = require("./content/content.component");
var sales_component_1 = require("./crm/sales/sales.component");
var contacts_component_1 = require("./crm/contacts/contacts.component");
var invoices_component_1 = require("./crm/invoices/invoices.component");
var integrations_component_1 = require("./crm/integrations/integrations.component");
var reports_component_1 = require("./crm/reports/reports.component");
var team_component_1 = require("./crm/team/team.component");
var pricing_component_1 = require("./crm/pricing/pricing.component");
var login_component_1 = require("./auth/login/login.component");
var signup_component_1 = require("./auth/signup/signup.component");
var confirm_component_1 = require("./auth/confirm/confirm.component");
var confirmpassword_component_1 = require("./auth/confirmpassword/confirmpassword.component");
var resetpassword_component_1 = require("./auth/resetpassword/resetpassword.component");
var forgetpassword_component_1 = require("./auth/forgetpassword/forgetpassword.component");
var routes = [
    { path: '', redirectTo: '/crm', pathMatch: 'full' },
    { path: 'crm', component: content_component_1.ContentComponent },
    { path: 'crm/sales-automation', component: sales_component_1.SalesComponent },
    { path: 'crm/contact-management', component: contacts_component_1.ContactsComponent },
    { path: 'crm/quotes-invoices', component: invoices_component_1.InvoicesComponent },
    { path: 'crm/app-integrations', component: integrations_component_1.IntegrationsComponent },
    { path: 'crm/business-reports', component: reports_component_1.ReportsComponent },
    { path: 'crm/team-calendar', component: team_component_1.TeamComponent },
    { path: 'crm/pricing-plans', component: pricing_component_1.PricingComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'confirm', component: confirm_component_1.ConfirmComponent },
    { path: 'confirmEmail/:id/:code', component: confirmpassword_component_1.ConfirmpasswordComponent },
    { path: 'resetPassword/:id', component: resetpassword_component_1.ResetpasswordComponent },
    { path: 'forgotpassword', component: forgetpassword_component_1.ForgetpasswordComponent },
    { path: '**', redirectTo: '/crm' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map