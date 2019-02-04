import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { ListElevesComponent } from './list-eleves/list-eleves.component';
import { MineurPipe } from './mineur.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EleveComponent } from './eleve/eleve.component';
import { EleveNewComponent } from './eleve-new/eleve-new.component';
import { NotificationComponent } from './notification/notification.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule} from '@angular/common/http';
import { EditEleveComponent } from './edit-eleve/edit-eleve.component';
import { httpInterceptorProviders } from './http-interceptors';
import { Page404Component } from './page404/page404.component';
import { HandleSalleComponent } from './handle-salle/handle-salle.component';
import { LoopSalleComponent } from './loop-salle/loop-salle.component';
import { RowSalleComponent } from './row-salle/row-salle.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    ListElevesComponent,
    MineurPipe,
    HomeComponent,
    NavbarComponent,
    EleveComponent,
    EleveNewComponent,
    NotificationComponent,
    EditEleveComponent,
    Page404Component,
    HandleSalleComponent,
    LoopSalleComponent,
    RowSalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [
    // MineurPipe,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
