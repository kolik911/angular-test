import { Component, OnInit, Input } from "@angular/core";
import { IGoodsItem } from "src/app/models/Goods";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-goods-item",
  templateUrl: "./goods-item.component.html",
  styleUrls: ["./goods-item.component.scss"]
})
export class GoodsItemComponent implements OnInit {
  @Input() item: IGoodsItem;

  constructor(public cart: CartService) {}

  ngOnInit() {}

  addToCart(item) {
    this.cart.add(item);
  }
}
