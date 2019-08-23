import { Component } from "@angular/core";
import { CartService } from "../../services/cart.service";
// import { EventEmmitterService } from "../../services/event-emmiter.service";

@Component({
  selector: "app-top-panel",
  templateUrl: "./top-panel.component.html",
  styleUrls: ["./top-panel.component.scss"]
})
export class TopPanelComponent {
  constructor(public cart: CartService) {}
}
