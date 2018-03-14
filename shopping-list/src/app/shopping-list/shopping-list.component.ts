import { Component, OnInit } from '@angular/core';

import { Cart } from '../cart';
import { CART } from '../mock-cart';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // This is currently a mocked data set without using a service
  shoppingList = CART;

  selectedItem: Cart;


  constructor() { }

  ngOnInit() {
  }

  // onSelect takes the value "item" that is given to it from shopping-list.component.html
  // and sets it as the selectedItem
  onSelect(item: Cart): void {
    this.selectedItem = item;
  }

}
