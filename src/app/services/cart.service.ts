import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { IGoodsItem } from "../models/Goods";

@Injectable({
  providedIn: "root"
})
export class CartService implements OnInit {
  private _goods = <BehaviorSubject<IGoodsItem[]>>new BehaviorSubject([]);

  constructor() {
    this._goods.next(JSON.parse(localStorage.getItem("cart")));
  }

  get goods() {
    return this._goods.asObservable();
  }

  get count() {
    return this.goods.pipe(map(goods => goods.length));
  }

  get totalSum() {
    return this.goods.pipe(
      map(goods => goods.reduce((acc, item) => acc + item.price, 0))
    );
  }

  ngOnInit() {}

  add(item: IGoodsItem) {
    const data = JSON.parse(localStorage.getItem("cart"));

    const foundItem = data.find(i => i.id === item.id);
    if (!foundItem) {
      this._goods.next(this._goods.value.concat([item]));
      localStorage.setItem("cart", JSON.stringify(this._goods.value));
    }
  }

  remove(id: number) {
    this._goods.next(this._goods.value.filter(g => g.id !== id));
    localStorage.setItem("cart", JSON.stringify(this._goods.value));
  }
}
