import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../services/items.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  data: any;
  param: any;
  picture:any;

   // registration form-group with validations
   registerForm = this.fb.group({
    profile:[''],
    Name: ['', [Validators.required, Validators.minLength(3)]],
    Description: ['', [Validators.required, Validators.minLength(3)]],
    Category: ['', [Validators.required, Validators.minLength(3)]],
    Price: ['', [Validators.required, Validators.minLength(3)]],

  });
 // registration form-group with validations

 onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.registerForm.get('profile').setValue(file);
  }
}


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private service: ItemsService, private toastr: ToastrService) { }



  // get functions of form

  get Name() {return this.registerForm.get('Name'); }
  get Description() {return this.registerForm.get('Description'); }
  get Category() {return this.registerForm.get('Category'); }
  get Price() {return this.registerForm.get('Price'); }
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


      this.registerForm.get('Name').markAsTouched();
      this.registerForm.get('Description').markAsTouched();
      this.registerForm.get('Category').markAsTouched();
      this.registerForm.get('Price').markAsTouched();

    } else {

      const formData = new FormData();
      formData.append('file', this.registerForm.get('profile').value);

      this.service.uploadpic(formData).subscribe((res) => {
        if (res.status === 400) {
          this.showError(res.message);
        } else {
        this.picture = res.fileUrl;




      // register user service hit

        this.service.registerItem({
          i_pic: this.picture.toString(),
          i_name: this.registerForm.value.Name,
          i_description: this.registerForm.value.Description,
          i_category: this.registerForm.value.Category,
          i_price: this.registerForm.value.Price,

      })
    .subscribe((res) => {
      if (res.status === 400) {
        this.showError(res.message);
      } else {
      this.showSuccess(res.message);
      this.router.navigate([`${'/dashboard/items'}`]); }
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

