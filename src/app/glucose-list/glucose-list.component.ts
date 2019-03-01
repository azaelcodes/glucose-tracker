import { Component, OnInit } from '@angular/core';
import { GlucoseService } from '../glucose.service';
import {Glucose} from '../glucose';

@Component({
  selector: 'app-glucose-list',
  templateUrl: './glucose-list.component.html',
  styleUrls: ['./glucose-list.component.css']
})
export class GlucoseListComponent implements OnInit {

    items: Glucose[];
    newItem: Glucose = new Glucose();

    private glucoseService: GlucoseService;

    constructor(glucoseService: GlucoseService) {
        this.glucoseService = glucoseService;
    }

    ngOnInit() {
        this.getItems();
    }

    removeItem(item) {
        this.glucoseService.deleteItemById(item.id);
    }

    getItems(): void {
        this.glucoseService.getAllItems()
            .subscribe(items => this.items = items);
    }

}
