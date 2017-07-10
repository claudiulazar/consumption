"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var select_mode_component_1 = require("./select-mode/select-mode.component");
var split_component_1 = require("./split/split.component");
var PageModule = (function () {
    function PageModule() {
    }
    return PageModule;
}());
PageModule = __decorate([
    core_1.NgModule({
        declarations: [
            select_mode_component_1.SelectModeComponent,
            split_component_1.SplitComponent
        ],
        bootstrap: [
            select_mode_component_1.SelectModeComponent,
            split_component_1.SplitComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule
        ],
        exports: [
            split_component_1.SplitComponent,
            select_mode_component_1.SelectModeComponent
        ]
    })
], PageModule);
exports.PageModule = PageModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFHOUUsNkVBQXlFO0FBQ3pFLDJEQUF5RDtBQW1CekQsSUFBYSxVQUFVO0lBQXZCO0lBQXlCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixVQUFVO0lBakJ0QixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWCwyQ0FBbUI7WUFDbkIsZ0NBQWM7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDUiwyQ0FBbUI7WUFDbkIsZ0NBQWM7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDTix3Q0FBa0I7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDTixnQ0FBYztZQUNkLDJDQUFtQjtTQUN0QjtLQUNELENBQUM7R0FDVyxVQUFVLENBQUc7QUFBYixnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cblxuaW1wb3J0IHsgU2VsZWN0TW9kZUNvbXBvbmVudH0gZnJvbSBcIi4vc2VsZWN0LW1vZGUvc2VsZWN0LW1vZGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTcGxpdENvbXBvbmVudCB9IGZyb20gXCIuL3NwbGl0L3NwbGl0LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgU2VsZWN0TW9kZUNvbXBvbmVudCxcbiAgICAgU3BsaXRDb21wb25lbnRcbiAgXSxcbiAgYm9vdHN0cmFwOiBbXG4gICAgIFNlbGVjdE1vZGVDb21wb25lbnQsXG4gICAgIFNwbGl0Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICAgTmF0aXZlU2NyaXB0TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAgU3BsaXRDb21wb25lbnQsXG4gICAgIFNlbGVjdE1vZGVDb21wb25lbnRcbiBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUge31cbiJdfQ==