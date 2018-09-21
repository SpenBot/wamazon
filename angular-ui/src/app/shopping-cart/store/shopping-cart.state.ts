import { State, Action, StateContext } from '@ngxs/store'
import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

import { GetAllInventory } from './shopping-cart.actions'

import { InventoryModel } from '../models/inventory-model';

// @Injectable()


export interface ShoppingCartStateModel {
  inventory: InventoryModel[];
}

@State<ShoppingCartStateModel>({
  name: 'shoppingCart',
  defaults: {
    inventory: []
  }
})




/////////// HANDLING ACTIONS /////////////////////////////////////

export class ShoppingCartState {

  constructor(private httpClient: HttpClient) {}



  @Action(GetAllInventory)
  getAllInventory(ctx: StateContext<ShoppingCartStateModel>) {

    this.httpClient.get<InventoryModel[]>('http://localhost:3000/api/inventory')
    .pipe(
      tap( (inventory) => {
        ctx.setState({
          ...ctx.getState(),
          inventory: inventory
        });
      })
    )
    .subscribe();

  }




}
