import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../_helpers/alert.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
  export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription
     message: any;
    constructor(private alertService: AlertService,private toastr: ToastrService,
){ }
    ngOnInit(){
      this.subscription = this.alertService.getAlert().subscribe(
        message => {
               switch(message && message.type){
            case 'success':
              // message.cssClass = 'alert alert-success';
              this.toastr.success('Welcome To My App');
              break;
            case 'error':
              // message.cssClass = 'alert alert-danger';
              this.toastr.error('oops...Something Went Wrong');
              break;
          }
          this.message = message;
        }
      );
    }
    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
  }


