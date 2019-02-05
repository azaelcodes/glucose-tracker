import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GlucoseListComponent } from './glucose-list/glucose-list.component';
import { MatToolbarModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule } from '@angular/material';
import { GlucoseItemComponent } from './glucose-item/glucose-item.component';
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    GlucoseListComponent,
    GlucoseItemComponent,
    HeaderComponent,
    AddItemDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
