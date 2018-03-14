import { Component, OnInit } from '@angular/core';

import { Cart } from '../cart';
import { CART } from '../mock-cart';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingList = CART;

  constructor() { }

  ngOnInit() {
  }

}
