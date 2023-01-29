import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import{AlertService} from '../_helpers/alert.service';
import{UserService} from '../_helpers/user.service';
import {AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:any= FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private toastr: ToastrService
  ) {
    // redirect to home if logged in
    if(this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //convenience getter 
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value)

    // reset alertService
    this.alertService.clear();

    //stop if form invalid
    if(this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
    .pipe(first()).subscribe(
      data => {
        console.log(data,"sakshi")
        this.toastr.success('Registration successful');
       // this.alertService.success('Registration success', true);
        this.router.navigate(['/login']);
      },
      error => {
        this.toastr.error('oops...Something Went Wrong',error);
      //  this.alertService.error(error);
        this.loading = false;
      });
  }

}
