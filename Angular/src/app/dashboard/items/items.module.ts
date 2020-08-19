import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { AdditemComponent } from './additem/additem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateitemComponent } from './updateitem/updateitem.component';

@NgModule({
  declarations: [ItemsComponent, AdditemComponent, UpdateitemComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ItemsModule { }

