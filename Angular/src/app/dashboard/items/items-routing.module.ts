import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent} from './items.component';
import { AdditemComponent} from './additem/additem.component';
import { UpdateitemComponent } from './updateitem/updateitem.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent
  },
  {
    path: 'add',
    component: AdditemComponent
  },
  {
    path: 'update/:id',
    component: UpdateitemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
