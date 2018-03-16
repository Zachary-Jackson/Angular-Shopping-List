import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Cart } from './cart';
import { CART } from './mock-cart';

@Injectable()
export class CartService {

  constructor() { }

  getCart(): Observable<Cart[]> {
    return of(CART);
  }

  getFruit(): Observable<Cart[]> {
    let fruitArray: Cart[] = [];
    for (let item of CART) {
      if (item.group === 'fruit') {
        fruitArray.push(item)
      }
    }
    return of(fruitArray)
  }

  getOther(): Observable<Cart[]> {
    let otherArray: Cart[] = [];
    for (let item of CART) {
      if (item.group === 'other') {
        otherArray.push(item)
      }
    }
    return of(otherArray)
  }

}
