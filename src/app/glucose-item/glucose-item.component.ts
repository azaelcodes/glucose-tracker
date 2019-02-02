import { Component, OnInit, Input } from '@angular/core';
import { Glucose } from '../glucose';
import { Category } from  '../category';

@Component({
  selector: 'app-glucose-item',
  templateUrl: './glucose-item.component.html',
  styleUrls: ['./glucose-item.component.css']
})

export class GlucoseItemComponent implements OnInit {
  
  @Input() glucose: Glucose;
  @Input() category: Category;

  constructor() { }

  ngOnInit() {
  }

}
