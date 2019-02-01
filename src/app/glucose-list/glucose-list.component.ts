import { Component, OnInit } from '@angular/core';
import { Glucose } from '../glucose';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-glucose-list',
  templateUrl: './glucose-list.component.html',
  styleUrls: ['./glucose-list.component.css']
})
export class GlucoseListComponent implements OnInit {

  title = 'Glucose Levels';
  items = ITEMS;
  selectedItem: Glucose;

  constructor() { }

  ngOnInit() {
  }

  onSelectItem(item: Glucose) {
    this.selectedItem = item;
  }

}
