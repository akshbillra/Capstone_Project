import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
},
{
  path: '',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{
  path: 'cart',
  loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
},
{
  path: 'about',
  loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
