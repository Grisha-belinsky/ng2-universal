"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var ng2_meta_1 = require("ng2-meta");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var content_component_1 = require("./content/content.component");
var app_routing_module_1 = require("./app-routing.module");
var confirm_component_1 = require("./auth/confirm/confirm.component");
var confirmpassword_component_1 = require("./auth/confirmpassword/confirmpassword.component");
var forgetpassword_component_1 = require("./auth/forgetpassword/forgetpassword.component");
var login_component_1 = require("./auth/login/login.component");
var resetpassword_component_1 = require("./auth/resetpassword/resetpassword.component");
var signup_component_1 = require("./auth/signup/signup.component");
var calendar_component_1 = require("./crm/calendar/calendar.component");
var contacts_component_1 = require("./crm/contacts/contacts.component");
var integrations_component_1 = require("./crm/integrations/integrations.component");
var invoices_component_1 = require("./crm/invoices/invoices.component");
var pricing_component_1 = require("./crm/pricing/pricing.component");
var reports_component_1 = require("./crm/reports/reports.component");
var sales_component_1 = require("./crm/sales/sales.component");
var team_component_1 = require("./crm/team/team.component");
var auth_service_1 = require("./services/auth.service");
var modal_dlg_service_1 = require("./services/modal-dlg.service");
var google_analytics_service_1 = require("./services/google-analytics.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            content_component_1.ContentComponent,
            confirm_component_1.ConfirmComponent,
            confirmpassword_component_1.ConfirmpasswordComponent,
            forgetpassword_component_1.ForgetpasswordComponent,
            login_component_1.LoginComponent,
            resetpassword_component_1.ResetpasswordComponent,
            signup_component_1.SignupComponent,
            calendar_component_1.CalendarComponent,
            contacts_component_1.ContactsComponent,
            integrations_component_1.IntegrationsComponent,
            invoices_component_1.InvoicesComponent,
            pricing_component_1.PricingComponent,
            reports_component_1.ReportsComponent,
            sales_component_1.SalesComponent,
            team_component_1.TeamComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            angular2_modal_1.ModalModule.forRoot(),
            bootstrap_1.BootstrapModalModule,
            ng2_meta_1.MetaModule.forRoot()
        ],
        providers: [
            auth_service_1.AuthService,
            modal_dlg_service_1.ModalDlgService,
            google_analytics_service_1.GoogleAnalyticsService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map