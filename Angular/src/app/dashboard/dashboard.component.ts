import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  param: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private service: UsersService, private toastr: ToastrService) { }


   // registration form-group with validations
   SigninForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
 // registration form-group with validations


// tslint:disable-next-line: max-line-length



  // get functions of form
get email() {return this.SigninForm.get('email'); }
get password() {return this.SigninForm.get('password'); }


// toaster service call
showSuccess(data: any) {
  this.toastr.success(data);
}
showError(data: any) {
  this.toastr.error(data);
}
// toaster service call
 // get functions of form


// signin button function
onSubmit() {
  if (this.SigninForm.invalid ) {


    this.SigninForm.get('email').markAsTouched();
    this.SigninForm.get('password').markAsTouched();

  } else {

    // register user service hit
    this.service.getAdmin({

      u_email: this.SigninForm.value.email,
      u_password: this.SigninForm.value.password,

  })
.subscribe((res) => {
  if (res.status === 400) {
    this.showError(res.message);
  } else {
  this.showSuccess(res.message);
  this.router.navigate([`${'dashboard/users'}`]); }
});

// register user service hit


  }
}

// signup button function

  ngOnInit(): void {
  }


}
