import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Highcharts ';
  currentUser:any= User;
  constructor(private router: Router, private authenticationService: AuthenticationService,private toastr: ToastrService){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  logout(){
    this.toastr.success('Logout Successfully');
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  btnClick() {
    this.router.navigateByUrl('/high');
};
Click() {
  this.router.navigateByUrl('/apex');
};

}