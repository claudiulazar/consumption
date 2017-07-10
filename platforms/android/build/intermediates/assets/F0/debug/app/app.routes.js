"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var select_mode_component_1 = require("./pages/select-mode/select-mode.component");
var split_component_1 = require("./pages/split/split.component");
exports.routes = [
    { path: "split", component: split_component_1.SplitComponent },
    { path: "select", component: select_mode_component_1.SelectModeComponent },
    { path: "**", redirectTo: "select" },
    { path: "", redirectTo: "select", pathMatch: "full" }
];
exports.NavigableComponents = [
    split_component_1.SplitComponent,
    select_mode_component_1.SelectModeComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBZ0Y7QUFDaEYsaUVBQStEO0FBRWxELFFBQUEsTUFBTSxHQUFHO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO0lBQ3BDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFHLFNBQVMsRUFBRSxNQUFNLEVBQUM7Q0FDeEQsQ0FBQztBQUVXLFFBQUEsbUJBQW1CLEdBQUc7SUFDaEMsZ0NBQWM7SUFDZCwyQ0FBbUI7Q0FDckIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbGVjdE1vZGVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9zZWxlY3QtbW9kZS9zZWxlY3QtbW9kZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNwbGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvc3BsaXQvc3BsaXQuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcInNwbGl0XCIsIGNvbXBvbmVudDogU3BsaXRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwic2VsZWN0XCIsIGNvbXBvbmVudDogU2VsZWN0TW9kZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCIqKlwiLCByZWRpcmVjdFRvOiBcInNlbGVjdFwiIH0sXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcInNlbGVjdFwiICwgcGF0aE1hdGNoOiBcImZ1bGxcIn1cbl07XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2FibGVDb21wb25lbnRzID0gW1xuICAgU3BsaXRDb21wb25lbnQsXG4gICBTZWxlY3RNb2RlQ29tcG9uZW50XG5dXG4iXX0=