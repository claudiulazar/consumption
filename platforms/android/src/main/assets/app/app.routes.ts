import { SelectModeComponent } from "./pages/select-mode/select-mode.component";
import { SplitComponent } from "./pages/split/split.component";

export const routes = [
    { path: "split", component: SplitComponent },
    { path: "select", component: SelectModeComponent },
    { path: "**", redirectTo: "select" },
    { path: "", redirectTo: "select" , pathMatch: "full"}
];

export const NavigableComponents = [
   SplitComponent,
   SelectModeComponent
]
