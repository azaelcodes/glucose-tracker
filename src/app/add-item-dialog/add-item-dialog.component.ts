import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css']
})
export class AddItemDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddItemDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
