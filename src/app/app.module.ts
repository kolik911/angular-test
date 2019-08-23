import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GoodsComponent } from "./components/goods/goods.component";
import { TopPanelComponent } from "./components/top-panel/top-panel.component";
import { GoodsItemComponent } from "./components/goods-item/goods-item.component";
import { CartComponent } from "./components/cart/cart.component";

@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    TopPanelComponent,
    GoodsItemComponent,
    CartComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
