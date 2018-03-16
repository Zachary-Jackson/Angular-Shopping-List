import { Component, OnInit } from '@angular/core';

import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // shoppingList's data is gotten from CartService
  shoppingList: Cart[];
  selectedItem: Cart;

  // The following food types are gotten by getGroups() OnInit
  fruit: Cart[];
  other: Cart[];


  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCart();
    this.getGroups();
  }

  // onSelect takes the value "item" that is given to it from shopping-list.component.html
  // and sets it as the selectedItem
  onSelect(item: Cart): void {
    this.selectedItem = item;
  }


  // getGroups sorts shoppingList by food category and fills out the food groups
  getGroups(): void {
    this.fruit = []
    this.other = []
    for (let item of this.shoppingList) {
      if (item.group ==='fruit') {
        this.fruit.push(item)
      }
      if (item.group ==='other') {
        this.other.push(item)
      }
    }
  }

  getCart(): void {
    this.cartService.getCart()
      .subscribe(cart => this.shoppingList = cart)
      this.cartService.getCart()
      .subscribe(cart => this.fruit = cart)
  }

}
