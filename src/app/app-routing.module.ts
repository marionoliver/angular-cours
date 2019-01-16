import { EleveNewComponent } from './eleve-new/eleve-new.component';
import { ListElevesComponent } from './list-eleves/list-eleves.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EleveComponent } from './eleve/eleve.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eleves', component: ListElevesComponent },
  { path: 'eleve/new', component: EleveNewComponent },
  { path: 'eleve/:eleveId', component: EleveComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
