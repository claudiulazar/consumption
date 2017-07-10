import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";


import { SelectModeComponent} from "./select-mode/select-mode.component";
import { SplitComponent } from "./split/split.component";

@NgModule({
  declarations: [
     SelectModeComponent,
     SplitComponent
  ],
  bootstrap: [
     SelectModeComponent,
     SplitComponent
  ],
  imports: [
     NativeScriptModule
  ],
  exports: [
     SplitComponent,
     SelectModeComponent
 ]
})
export class PageModule {}
