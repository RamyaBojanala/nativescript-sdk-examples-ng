// >> binding-tab-view-code
import { Component } from "@angular/core";
import { StackLayout } from "ui/layouts/stack-layout";

import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";

export class DataItem {
    constructor(public itemDesc: string) {}
}

@Component({
    moduleId: module.id,
    templateUrl: "./binding-tab-view-items.component.html",
})
export class BindingTabViewItemsComponent {
    public items: Array<DataItem>;
    public tabSelectedIndex: number;

    constructor() {
        this.tabSelectedIndex = 1;
        this.items = new Array<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i));
        }
    }
}
// << binding-tab-view-code
