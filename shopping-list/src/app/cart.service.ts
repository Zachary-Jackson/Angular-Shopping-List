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
}
