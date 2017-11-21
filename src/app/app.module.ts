import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { MetaModule } from 'ng2-meta';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmComponent } from './auth/confirm/confirm.component';
import { ConfirmpasswordComponent } from './auth/confirmpassword/confirmpassword.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CalendarComponent } from './crm/calendar/calendar.component';
import { ContactsComponent } from './crm/contacts/contacts.component';
import { IntegrationsComponent } from './crm/integrations/integrations.component';
import { InvoicesComponent } from './crm/invoices/invoices.component';
import { PricingComponent } from './crm/pricing/pricing.component';
import { ReportsComponent } from './crm/reports/reports.component';
import { SalesComponent } from './crm/sales/sales.component';
import { TeamComponent } from './crm/team/team.component';

import { AuthService } from './services/auth.service';
import { ModalDlgService } from './services/modal-dlg.service';
import { GoogleAnalyticsService } from './services/google-analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ConfirmComponent,
    ConfirmpasswordComponent,
    ForgetpasswordComponent,
    LoginComponent,
    ResetpasswordComponent,
    SignupComponent,
    CalendarComponent,
    ContactsComponent,
    IntegrationsComponent,
    InvoicesComponent,
    PricingComponent,
    ReportsComponent,
    SalesComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    MetaModule.forRoot()
  ],
  providers: [
    AuthService,
    ModalDlgService,
    GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
