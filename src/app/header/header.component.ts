import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      height: '300px',
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');
      console.log(result);
    });
  }

  ngOnInit() {
  }

}
