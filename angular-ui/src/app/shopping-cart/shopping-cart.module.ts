
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { NgxsModule } from '@ngxs/store';
// import { ShoppingCartState } from './store/shopping-cart-state.state';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { InventoryAllGridComponent } from './inventory-all-grid/inventory-all-grid.component';
import { CartSidebarComponent } from './cart-sidebar/cart-sidebar.component';



@NgModule({
  declarations: [
    HomePageComponent,
    InventoryAllGridComponent,
    CartSidebarComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
    // NgxsModule.forFeature([State])
  ]
})


export class ShoppingCartModule { }
