import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//Set route
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'login', component: LoginComponent },
  { path: '/api/register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
