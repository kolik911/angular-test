import { Component, OnInit } from "@angular/core";
import { IGoodsItem } from "../../models/Goods";
import { GoodsService } from "../../services/goods.service";

@Component({
  selector: "app-goods",
  templateUrl: "./goods.component.html",
  styleUrls: ["./goods.component.scss"]
})
export class GoodsComponent implements OnInit {
  goods: IGoodsItem[];

  constructor(private _goodsService: GoodsService) {}

  ngOnInit() {
    this.goods = this._goodsService.getGoods();
  }
}
