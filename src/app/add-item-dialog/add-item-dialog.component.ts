import {Component} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CATEGORIES } from '../mock-categories';
import {Glucose} from '../glucose';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent {

  categories = CATEGORIES;

  constructor(public dialogRef: MatDialogRef<AddItemDialogComponent>) { }

  addItem(form: NgForm) {

    const obj = new Glucose();
    obj.userId = 1;
    obj.level = 1;
    obj.categoryId = 1;
    obj.added = '2019-03-01';

  }

}
