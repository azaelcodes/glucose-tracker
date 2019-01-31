import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GlucoseListComponent } from './glucose-list/glucose-list.component';
import {  MatTableModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    GlucoseListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
