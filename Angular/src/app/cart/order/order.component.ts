import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { UsersService } from '../../services/users.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  data: any;
  param: any;
  total:any;
  item_list:any;
   // registration form-group with validations
   registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required]
  });
 // registration form-group with validations

  // get functions of form
  get email() {return this.registerForm.get('email'); }
  get firstName() {return this.registerForm.get('firstName'); }
  get lastName() {return this.registerForm.get('lastName'); }
  get address() {return this.registerForm.get('address'); }
  // toaster service call
  showSuccess(data: any) {
    this.toastr.success(data);
  }
  showError(data: any) {
    this.toastr.error(data);
  }
  // toaster service call




  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private toastr: ToastrService, private service: OrdersService, private service2: CartService, private service3: UsersService) { }


// signup button function
onSubmit(total) {
  if (this.registerForm.invalid ) {


    this.registerForm.get('firstName').markAsTouched();
    this.registerForm.get('lastName').markAsTouched();
    this.registerForm.get('email').markAsTouched();
    this.registerForm.get('address').markAsTouched();

  } else {

    // register user service hit
    this.item_list = this.service2.get_list()
    var ids = " "
    for(var i = 0; i < this.item_list.length ;i++){
        ids = ids + "," + this.item_list[i].i_name
    }
    this.service3.registerUser({
      pic: "nil",
      name: this.registerForm.value.firstName+this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      number: "0000000000",
      password: "sdasdsadassadadd",
      address:  this.registerForm.value.address,
      type: "user"

  }).subscribe((res) => {
    console.log(res)
    if (res.status === 400) {
      // this.showError(res.message);
    } else {
    // this.showSuccess(res.message);
    }
  });





      this.service.registerOrder({
        name: this.registerForm.value.firstName+this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        address: this.registerForm.value.address,
        payment:"cash on delivery",
        total: total,
        products: String(ids)

    })
  .subscribe((res) => {
    if (res.status === 400) {
      this.showError(res.message);
    } else {
    this.showSuccess(res.message);
    this.service2.clean();
    this.router.navigate([`${'/'}`]); }
  });




  }

}

// signup button function



  ngOnInit(): void {
    this.total = this.service2.gettotal()
    if(this.total == 0){
      this.showError("Cart is Empty");
      this.router.navigate([`${'/cart'}`]);
    }
  }

}
