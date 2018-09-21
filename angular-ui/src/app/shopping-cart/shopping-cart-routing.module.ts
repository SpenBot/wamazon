
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { InventoryAllGridComponent } from './inventory-all-grid/inventory-all-grid.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'inventory', component: InventoryAllGridComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})

export class ShoppingCartRoutingModule { }
