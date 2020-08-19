import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from './cart.component'
import {OrderComponent} from './order/order.component'

const routes: Routes = [{
  path: '',
  component: CartComponent
},
{
  path: 'order',
  component: OrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
