import { Component, OnInit } from '@angular/core';
import { Shoppinglist } from '../shoppinglist';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  shoppinglist: Shoppinglist = {
    fruit: ['Banana', 'Papaya'],
    nuts: ['Cashew', 'Coconut', 'Pecan'],
    produce: ['Cabbage', 'Kale', 'Onion'],
  };

  // This is to allow the user to change which list they want to see
  activeList: string[];
  activeCatagory: string;
  changeList () {
    let foodCatagories: string[] = Object.keys(this.shoppinglist);
    this.activeCatagory = foodCatagories[Math.floor(Math.random() * foodCatagories.length)];
    this.activeList = this.shoppinglist[this.activeCatagory]
  }

  constructor() { }

  ngOnInit() {
  }

}
