import {Component, ElementRef, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CATEGORIES } from '../mock-categories';
import {Glucose} from '../glucose';
import {NgForm} from '@angular/forms';
import { AddItemService } from '../add-item.service';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent {

  categories = CATEGORIES;

  constructor(public dialogRef: MatDialogRef<AddItemDialogComponent>,
              public addItemService: AddItemService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addItem(form: NgForm) {

    const obj = new Glucose();
    obj.userId = 1;
    obj.level = 1;
    obj.categoryId = 1;
    obj.added = '2019-03-01';
    this.addItemService.add(obj);

  }

}
