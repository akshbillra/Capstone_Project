import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service: UsersService, private toastr: ToastrService) { }



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
    this.service.delUser(id
  ).subscribe((res) => {
      if (res.status === 200) {
      this.showSuccess(res.message);
      this.service.getUsers().subscribe((resp) => {
      this.user_list = resp.data;
  });
      } else {this.showError(res.message);}
      });
  }
  // delete user

  user_list : any;




  ngOnInit(): void {


    //get all users
    this.service.getUsers().subscribe((res) => {
      this.user_list = res.data;
      console.log(this.user_list);
    });



  }

}
