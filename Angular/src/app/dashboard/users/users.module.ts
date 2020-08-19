import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdduserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
