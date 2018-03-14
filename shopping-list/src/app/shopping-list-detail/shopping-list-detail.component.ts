import { Component, OnInit, Input } from '@angular/core';

import { Cart } from '../cart';

@Component({
  selector: 'app-shopping-list-detail',
  templateUrl: './shopping-list-detail.component.html',
  styleUrls: ['./shopping-list-detail.component.css']
})
export class ShoppingListDetailComponent implements OnInit {
  // item is given to this component by shopping-list.html
  @Input() item: Cart;

  constructor() { }

  ngOnInit() {
  }

}
