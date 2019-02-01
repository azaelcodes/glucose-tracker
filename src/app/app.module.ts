import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GlucoseListComponent } from './glucose-list/glucose-list.component';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    GlucoseListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
