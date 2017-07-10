import { Component, OnInit } from "@angular/core";
// import * as gestures from "tns-core-modules/ui/gestures";
@Component({
  selector: "split",
  styleUrls: ["./pages/split/split.component.css"],
  templateUrl: "./pages/split/split.component.html"
})

export class SplitComponent {
   constructor() {
   }
   //
   ngOnInit() {
      console.log("hello");
   }
    swipeIt() {
      console.log("it swipeIt");
   }
    tapIt(){
      console.log("tap that shiw");
   }
}
