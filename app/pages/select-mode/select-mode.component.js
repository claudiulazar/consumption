"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// import * as gestures from "tns-core-modules/ui/gestures";
var SelectModeComponent = (function () {
    function SelectModeComponent(router) {
        this.router = router;
    }
    //
    SelectModeComponent.prototype.swipeIt = function (option) {
        switch (option) {
            case 0:
                this.router.navigate(['/split'], { clearHistory: true });
                break;
            case 1:
                console.log("Will go to 1");
                break;
            case 2:
                console.log("Will go to 2");
                break;
            default:
                console.log("error");
                break;
        }
    };
    SelectModeComponent.prototype.tapIt = function () {
        console.log("tap that shiw");
    };
    return SelectModeComponent;
}());
SelectModeComponent = __decorate([
    core_1.Component({
        selector: "select-mode",
        styleUrls: ["./pages/select-mode/select-mode.component.css"],
        templateUrl: "./pages/select-mode/select-mode.component.html"
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], SelectModeComponent);
exports.SelectModeComponent = SelectModeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW1vZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0LW1vZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLHNEQUErRDtBQUMvRCw0REFBNEQ7QUFPNUQsSUFBYSxtQkFBbUI7SUFDN0IsNkJBQXFCLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO0lBQzVDLENBQUM7SUFDRCxFQUFFO0lBQ0QscUNBQU8sR0FBUCxVQUFRLE1BQWE7UUFDbkIsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzdELEtBQUssQ0FBQztZQUNULEtBQUssQ0FBQztnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNqQyxLQUFLLENBQUM7WUFDVCxLQUFLLENBQUM7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDakMsS0FBSyxDQUFDO1lBQ1Q7Z0JBQVMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0IsS0FBSyxDQUFDO1FBQ1osQ0FBQztJQUNKLENBQUM7SUFDQSxtQ0FBSyxHQUFMO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0osMEJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsU0FBUyxFQUFFLENBQUMsK0NBQStDLENBQUM7UUFDNUQsV0FBVyxFQUFFLGdEQUFnRDtLQUM5RCxDQUFDO3FDQUc2Qix5QkFBZ0I7R0FEbEMsbUJBQW1CLENBbUIvQjtBQW5CWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbi8vIGltcG9ydCAqIGFzIGdlc3R1cmVzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwic2VsZWN0LW1vZGVcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL3NlbGVjdC1tb2RlL3NlbGVjdC1tb2RlLmNvbXBvbmVudC5jc3NcIl0sXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvc2VsZWN0LW1vZGUvc2VsZWN0LW1vZGUuY29tcG9uZW50Lmh0bWxcIlxufSlcblxuZXhwb3J0IGNsYXNzIFNlbGVjdE1vZGVDb21wb25lbnQge1xuICAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOlJvdXRlckV4dGVuc2lvbnMpIHtcbiAgIH1cbiAgIC8vXG4gICAgc3dpcGVJdChvcHRpb246bnVtYmVyKSB7XG4gICAgICBzd2l0Y2ggKG9wdGlvbikge1xuICAgICAgICAgY2FzZSAwOiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zcGxpdCddLHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIDE6IGNvbnNvbGUubG9nKFwiV2lsbCBnbyB0byAxXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIDI6IGNvbnNvbGUubG9nKFwiV2lsbCBnbyB0byAyXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICB9XG4gICAgdGFwSXQoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwidGFwIHRoYXQgc2hpd1wiKTtcbiAgIH1cbn1cbiJdfQ==