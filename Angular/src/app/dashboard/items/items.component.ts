import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  item_list : any;
  constructor(private service: ItemsService,private toastr: ToastrService, private router: Router) { }

 // toaster service call
 showSuccess(data: any) {
  this.toastr.success(data);
}
showError(data: any) {
  this.toastr.error(data);
}
// toaster service call




 // delete user
 delItem(id: any) {
  console.log(id)
  this.service.delItem(id
).subscribe((res) => {
    if (res.status === 200) {
    this.showSuccess(res.message);
    this.service.getItems().subscribe((resp) => {
    this.item_list = resp.data;
});
    } else {this.showError(res.message);}
    });
}
// delete user


//update user

UpdateItem(id:any){
  console.log(id)
  this.router.navigate([`dashboard/items/update/${id}`]);
}



  ngOnInit(): void {
    //get all users
    this.service.getItems().subscribe((res) => {
      this.item_list = res.data;
      console.log(this.item_list);
    });

  }

}

