import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GlucoseListComponent } from './glucose-list/glucose-list.component';
import { MatToolbarModule, MatListModule, MatExpansionModule, MatFormFieldModule } from '@angular/material';
import { GlucoseItemComponent } from './glucose-item/glucose-item.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GlucoseListComponent,
    GlucoseItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
