"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import * as gestures from "tns-core-modules/ui/gestures";
var SplitComponent = (function () {
    function SplitComponent() {
    }
    //
    SplitComponent.prototype.ngOnInit = function () {
        console.log("hello");
    };
    SplitComponent.prototype.swipeIt = function () {
        console.log("it swipeIt");
    };
    SplitComponent.prototype.tapIt = function () {
        console.log("tap that shiw");
    };
    return SplitComponent;
}());
SplitComponent = __decorate([
    core_1.Component({
        selector: "split",
        styleUrls: ["./pages/split/split.component.css"],
        templateUrl: "./pages/split/split.component.html"
    }),
    __metadata("design:paramtypes", [])
], SplitComponent);
exports.SplitComponent = SplitComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BsaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDREQUE0RDtBQU81RCxJQUFhLGNBQWM7SUFDeEI7SUFDQSxDQUFDO0lBQ0QsRUFBRTtJQUNGLGlDQUFRLEdBQVI7UUFDRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDQSxnQ0FBTyxHQUFQO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0EsOEJBQUssR0FBTDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNKLHFCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsT0FBTztRQUNqQixTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztRQUNoRCxXQUFXLEVBQUUsb0NBQW9DO0tBQ2xELENBQUM7O0dBRVcsY0FBYyxDQWExQjtBQWJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy8gaW1wb3J0ICogYXMgZ2VzdHVyZXMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJzcGxpdFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvc3BsaXQvc3BsaXQuY29tcG9uZW50LmNzc1wiXSxcbiAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9zcGxpdC9zcGxpdC5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgU3BsaXRDb21wb25lbnQge1xuICAgY29uc3RydWN0b3IoKSB7XG4gICB9XG4gICAvL1xuICAgbmdPbkluaXQoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICAgfVxuICAgIHN3aXBlSXQoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIml0IHN3aXBlSXRcIik7XG4gICB9XG4gICAgdGFwSXQoKXtcbiAgICAgIGNvbnNvbGUubG9nKFwidGFwIHRoYXQgc2hpd1wiKTtcbiAgIH1cbn1cbiJdfQ==