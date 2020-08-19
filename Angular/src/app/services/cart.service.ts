import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  item_list = []


  add_item(data:any){
    this.item_list.push(data)
    return {'message':"item added successfully"}
  }

  delete_item(id:any){
    var i;
  for (i = 0; i < this.item_list.length; i++) {
    if(this.item_list[i]._id === id){
      this.item_list.splice(i,1)
      break;
    }
  }
    return {'message':"item deleted successfully"}
  }

  get_list(){
    return this.item_list
  }

  clean(){
   this.item_list = []
   return {'message':"cart empty"}
  }

  gettotal(){
    var total = 0;
    var i;
  for (i = 0; i < this.item_list.length; i++) {
    total+=parseInt(this.item_list[i].i_price)
  }
  return total
  }

}
