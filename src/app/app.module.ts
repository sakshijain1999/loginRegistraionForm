import { NgModule } from '@angular/core';
// import ApexCharts from 'apexcharts'
import { BrowserModule } from '@angular/platform-browser';
import { Sharedmodule } from 'src/shared.ts/shared.ts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { ToastrModule } from 'ngx-toastr';

import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartComponent } from './highchart/highchart.component';
import { ApexchartComponent } from './apexchart/apexchart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//fake backend
import { FakeBackendProviderInterceptor } from './_helpers/fake-backend-provider.interceptor';
import { ErrorInterceptorInterceptor } from './_helpers/error-interceptor.interceptor';
import { JwtInterceptorInterceptor } from './_helpers/jwt-interceptor.interceptor';
import { AlertComponent } from './alert/alert.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { TermandconditionComponent } from './termandcondition/termandcondition.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
@NgModule({
  declarations: [
    AppComponent,
    HighchartComponent,
    ApexchartComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    TermandconditionComponent,
    DynamicformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Sharedmodule,
    HighchartsChartModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    ToastrModule.forRoot(), 
    DragDropModule,
    BrowserAnimationsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot(),
  ],
  
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:JwtInterceptorInterceptor, multi:true },
    { provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptorInterceptor, multi:true },
    FakeBackendProviderInterceptor
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
