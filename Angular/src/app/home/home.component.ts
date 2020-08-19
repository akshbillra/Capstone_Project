import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ItemsService, private cartservice: CartService,private toastr: ToastrService,  private router: Router) { }

  item_list : any;
  response: any;

// toaster service call
showSuccess(data: any) {
  this.toastr.success(data);
}
showError(data: any) {
  this.toastr.error(data);
}
// toaster service call

  addtocart(data:any){
    this.response = this.cartservice.add_item(data);
    this.showSuccess(this.response.message);
    this.router.navigate([`${'/cart'}`]);
  }


  ngOnInit(): void {

    //get all items
    this.service.getItems().subscribe((res) => {
      this.item_list = res.data;
    });


  }

}
