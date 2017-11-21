/**
 * Created by Grisha on 8/3/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SalesComponent } from './crm/sales/sales.component';
import { ContactsComponent} from './crm/contacts/contacts.component';
import { InvoicesComponent} from './crm/invoices/invoices.component';
import { IntegrationsComponent } from './crm/integrations/integrations.component';
import { ReportsComponent } from './crm/reports/reports.component';
import { TeamComponent } from './crm/team/team.component';
import { PricingComponent } from './crm/pricing/pricing.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ConfirmComponent } from './auth/confirm/confirm.component';
import { ConfirmpasswordComponent } from './auth/confirmpassword/confirmpassword.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';

const routes: Routes = [
    { path: '', redirectTo: '/crm', pathMatch: 'full' },
    { path: 'crm',  component: ContentComponent },
    { path: 'crm/sales-automation', component: SalesComponent },
    { path: 'crm/contact-management', component: ContactsComponent },
    { path: 'crm/quotes-invoices', component: InvoicesComponent },
    { path: 'crm/app-integrations', component: IntegrationsComponent },
    { path: 'crm/business-reports', component: ReportsComponent },
    { path: 'crm/team-calendar', component: TeamComponent },
    { path: 'crm/pricing-plans', component: PricingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'confirm', component: ConfirmComponent },
    { path: 'confirmEmail/:id/:code', component: ConfirmpasswordComponent },
    { path: 'resetPassword/:id', component: ResetpasswordComponent },
    { path: 'forgotpassword', component: ForgetpasswordComponent },
    { path: '**', redirectTo: '/crm' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}