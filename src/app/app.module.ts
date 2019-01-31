import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GlucoseListComponent } from './glucose-list/glucose-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GlucoseListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
