import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  data: any;
  param: any;
  picture:any;

   // registration form-group with validations
   registerForm = this.fb.group({
    profile:[''],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$')]],
    confirmPassword: ['', [Validators.required]]
  }, {validator: this.checkPasswords });
 // registration form-group with validations

 onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.registerForm.get('profile').setValue(file);
  }
}

 // confirm password custom validation
  checkPasswords(group: FormGroup) {
  const pass = group.get('password').value;
  const confirmPass = group.get('confirmPassword').value;
  return pass === confirmPass ? null : { notSame: true };
}
// confirm password custom validation
// tslint:disable-next-line: max-line-length



  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private service: UsersService, private toastr: ToastrService) { }


  // get functions of form
get email() {return this.registerForm.get('email'); }
get firstName() {return this.registerForm.get('firstName'); }
get lastName() {return this.registerForm.get('lastName'); }
get password() {return this.registerForm.get('password'); }
get confirmPassword() {return this.registerForm.get('confirmPassword'); }
// toaster service call
showSuccess(data: any) {
  this.toastr.success(data);
}
showError(data: any) {
  this.toastr.error(data);
}
// toaster service call
 // get functions of form


// signup button function
onSubmit() {
  if (this.registerForm.invalid ) {


    this.registerForm.get('firstName').markAsTouched();
    this.registerForm.get('lastName').markAsTouched();
    this.registerForm.get('email').markAsTouched();
    this.registerForm.get('password').markAsTouched();

  } else {

    const formData = new FormData();
    formData.append('file', this.registerForm.get('profile').value);

    this.service.uploadpic(formData).subscribe((res) => {
      if (res.status === 400) {
        this.showError(res.message);
      } else {
      this.picture = res.fileUrl;




    // register user service hit

      this.service.registerUser({
        pic: this.picture.toString(),
        name: this.registerForm.value.firstName+this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        number: "0000000000",
        address: 'nil',
        password: this.registerForm.value.password,
        type: "admin"

    })
  .subscribe((res) => {
    if (res.status === 400) {
      this.showError(res.message);
    } else {
    this.showSuccess(res.message);
    this.router.navigate([`${'/dashboard/users'}`]); }
  });


// register user service hit

    }
    });
  }
}

// signup button function



  ngOnInit(): void {

  }
}
