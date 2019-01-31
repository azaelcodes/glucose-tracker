import { Component, OnInit } from '@angular/core';
import { Glucose } from '../glucose';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-glucose-list',
  templateUrl: './glucose-list.component.html',
  styleUrls: ['./glucose-list.component.css']
})
export class GlucoseListComponent implements OnInit {

  title = 'Glucose List';
  dataSource = ITEMS;
  columnsToDisplay = ['id', 'level'];

  constructor() { }

  ngOnInit() {
  }

}
