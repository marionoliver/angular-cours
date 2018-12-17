import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { ListElevesComponent } from './list-eleves/list-eleves.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    ListElevesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
