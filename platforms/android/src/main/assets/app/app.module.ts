import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";
import { SelectModeComponent } from "./pages/select-mode/select-mode.component";
import { routes, NavigableComponents } from "./app.routes";

@NgModule({
  declarations: [
     AppComponent,
     NavigableComponents,
],
  bootstrap: [AppComponent],
  imports: [
     NativeScriptModule,
     NativeScriptRouterModule,
     NativeScriptRouterModule.forRoot(routes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}


// platformNativeScriptDynamic().bootstrapModule(SelectModeComponent);
