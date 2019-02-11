import { Component, OnInit } from '@angular/core';
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
  items: Array<Glucose> = [];
  item: Glucose;

  constructor(public dialogRef: MatDialogRef<AddItemDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addItem() {

    const obj = new Glucose();
    obj.userId = 1;
    obj.level = 7.1;
    obj.categoryId = 1;
    obj.added = '2019-03-01';
    this.items.push(obj);

  }

}
