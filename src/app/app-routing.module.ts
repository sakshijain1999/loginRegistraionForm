import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexchartComponent } from './apexchart/apexchart.component';
import { AppComponent } from './app.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { HighchartComponent } from './highchart/highchart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TermandconditionComponent } from './termandcondition/termandcondition.component';
import { AuthGuardService } from './_helpers/auth-guard.service';

const routes: Routes = [

  { path: '', component: HomeComponent 
  ,  canActivate : [AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: AppComponent },
  { path: 'high', component: HighchartComponent },
  { path: 'apex', component: ApexchartComponent },
  { path: 'term', component: TermandconditionComponent },
  { path: 'form', component: DynamicformComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
