import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { MatDialogConfig } from '@angular/material';
import {AddItemDialogComponent} from '../add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  addItemDialog: MatDialogRef<AddItemDialogComponent>;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.addItemDialog = this.dialog.open(AddItemDialogComponent);

  }

  ngOnInit() {
  }

}
