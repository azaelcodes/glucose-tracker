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
    constructor(private glucoseService: GlucoseService) { }

    ngOnInit() {
        this.getItems();
    }

    getItems(): void {
        this.glucoseService.getItems()
            .subscribe(items => this.items = items)
    }

}
