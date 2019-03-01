import {Component} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CATEGORIES } from '../mock-categories';
import {Glucose} from '../glucose';
import {GlucoseService} from '../glucose.service';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent {

  categories = CATEGORIES;
  newItem: Glucose = new Glucose();

  constructor(public dialogRef: MatDialogRef<AddItemDialogComponent>,
              private glucoseService: GlucoseService) { }

  addItem() {

    this.newItem.added = '2019-01-01';
    this.glucoseService.addItem(this.newItem);

  }

}
