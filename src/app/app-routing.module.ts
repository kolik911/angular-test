import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CartComponent } from "./components/cart/cart.component";
import { GoodsComponent } from "./components/goods/goods.component";
// import { Goods } from "./models/Goods";

const routes: Routes = [
  { path: "", component: GoodsComponent },
  { path: "goods", component: GoodsComponent },
  { path: "cart", component: CartComponent }
];

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
