import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './order/order.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent, HeaderComponent, FooterComponent, OrderComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
