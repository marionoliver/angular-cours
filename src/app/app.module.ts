import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { ListElevesComponent } from './list-eleves/list-eleves.component';
import { MineurPipe } from './mineur.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    ListElevesComponent,
    MineurPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MineurPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
