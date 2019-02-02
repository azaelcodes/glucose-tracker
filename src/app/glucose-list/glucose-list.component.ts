import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-items';
import { CATEGORIES } from '../mock-categories';

@Component({
  selector: 'app-glucose-list',
  templateUrl: './glucose-list.component.html',
  styleUrls: ['./glucose-list.component.css']
})
export class GlucoseListComponent implements OnInit {

  title = 'Glucose Levels';
  items = ITEMS;
  categories = CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

}
