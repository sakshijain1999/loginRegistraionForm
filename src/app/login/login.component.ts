import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../_helpers/alert.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any= FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private toastr: ToastrService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      terms:['',Validators.required]
    });

    //get return url from router
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
   console.log(this.loginForm.value)
    this.submitted = true;

    // reset alerts on submitted
    this.alertService.clear();

    //stop if form invalid
    if(this.loginForm.invalid) {
      return;
      
    }

    this.loading = true;
    this.authenticationService.login(this.f['username'].value, this.f['password'].value)
    .pipe(first())
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate([this.returnUrl]);
        this.toastr.success('Welcome To My Portal');
        // this.alertService.success('Login successfully', true);
      },
      error => {
        this.toastr.error('oops...Something Went Wrong',error);
       // this.alertService.error(error);
        this.loading = false;
      }
    );
  }


}
