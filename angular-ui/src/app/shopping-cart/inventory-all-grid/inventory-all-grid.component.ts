import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from "rxjs";


import { GetAllInventory } from '../store/shopping-cart.actions'
import { ShoppingCartStateModel, ShoppingCartState } from "../store/shopping-cart.state";
import { InventoryModel } from "../models/inventory-model";


@Component({
  selector: 'app-inventory-all-grid',
  templateUrl: './inventory-all-grid.component.html',
  styleUrls: ['./inventory-all-grid.component.css']
})





export class InventoryAllGridComponent implements OnInit {


  // @Select(state => state.shoppingCart.inventory)inventory$: Observable<ShoppingCartStateModel>;
  @Select(state => state.shoppingCart.inventory)inventory$: Observable<InventoryModel[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetAllInventory());
  }

}
