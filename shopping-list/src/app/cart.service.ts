import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Cart } from './cart';
import { CART } from './mock-cart';

@Injectable()
export class CartService {

  constructor() { }

  // getCart() takes the mock data from mock-cart and returns it
  getCart(): Observable<Cart[]> {
    return of(CART);
  }

  // getGroup() takes a string and filters the data from mock-cart by group
  getGroup(group: string): Observable<Cart[]> {
    let groupArray: Cart[] = [];
    for (let item of CART) {
      if (item.group === group) {
        groupArray.push(item)
      }
    }
    return of(groupArray)
  }

}
