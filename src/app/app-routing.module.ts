import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'', pathMatch:"full", redirectTo: "home"},
  { path: 'home', component: HomeComponent },
  { path: 'About Us', component: OurServicesComponent},
  { path: 'our-services', component: OurServicesComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'faq', component:FaqComponent},
  { path: 'workflow', component: WorkflowComponent},
  { path: 'register/:type', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
