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


  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCart();
  }

  // onSelect takes the value "item" that is given to it from shopping-list.component.html
  // and sets it as the selectedItem
  onSelect(item: Cart): void {
    this.selectedItem = item;
  }

  getCart(): void {
    this.cartService.getCart()
      .subscribe(cart => this.shoppingList = cart)
  }

}
