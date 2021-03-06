import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CartService } from './cart.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListDetailComponent } from './shopping-list-detail/shopping-list-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
