import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
item_list:any;
response:any;
total:any;
  constructor(private service:CartService,private toastr: ToastrService) { }

// toaster service call
showSuccess(data: any) {
  this.toastr.success(data);
}
showError(data: any) {
  this.toastr.error(data);
}
// toaster service call


delItem(id:any){
  this.response = this.service.delete_item(id)
  this.item_list = this.service.get_list()
  this.total = this.service.gettotal()
  this.showSuccess(this.response.message);
}

delAll(){
  this.response = this.service.clean()
  this.item_list = this.service.get_list()
  this.total = this.service.gettotal()
  this.showSuccess(this.response.message);
}

  ngOnInit(): void {
    this.item_list = this.service.get_list()
    this.total = this.service.gettotal()
  }

}
