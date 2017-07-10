import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
// import * as gestures from "tns-core-modules/ui/gestures";
@Component({
  selector: "select-mode",
  styleUrls: ["./pages/select-mode/select-mode.component.css"],
  templateUrl: "./pages/select-mode/select-mode.component.html"
})

export class SelectModeComponent {
   constructor( private router:RouterExtensions) {
   }
   //
    swipeIt(option:number) {
      switch (option) {
         case 0: this.router.navigate(['/split'],{ clearHistory: true });
            break;
         case 1: console.log("Will go to 1");
            break;
         case 2: console.log("Will go to 2");
            break;
         default: console.log("error");
            break;
      }
   }
    tapIt(){
      console.log("tap that shiw");
   }
}
