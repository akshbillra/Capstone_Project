import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order_list: any;

  constructor(private service: OrdersService, private toastr: ToastrService) { }



  // toaster service call
  showSuccess(data: any) {
    this.toastr.success(data);
  }
  showError(data: any) {
    this.toastr.error(data);
  }
  // toaster service call




  // delete user
  delUser(id: any) {
    console.log(id)
    this.service.delOrder(id
  ).subscribe((res) => {
      if (res.status === 200) {
      this.showSuccess(res.message);
      this.service.getOrders().subscribe((resp) => {
      this.order_list = resp.data;
  });
      } else {this.showError(res.message);}
      });
  }
  // delete user



  ngOnInit(): void {
     //get all users
     this.service.getOrders().subscribe((res) => {
      this.order_list = res.data;
      console.log(this.order_list);
    });
  }

}
