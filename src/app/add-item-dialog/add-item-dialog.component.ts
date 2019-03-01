import {Component} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CATEGORIES } from '../mock-categories';
import {Glucose} from '../glucose';
import {NgForm} from '@angular/forms';
import {GlucoseService} from '../glucose.service';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent {

  categories = CATEGORIES;
  newItem: Glucose = new Glucose();


  constructor(public dialogRef: MatDialogRef<AddItemDialogComponent>, private glucoseService: GlucoseService) { }

  addItem() {

    this.glucoseService.addItem(this.newItem);
    this.newItem = new Glucose();
  }

}
