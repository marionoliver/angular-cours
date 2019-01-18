import { EleveNewComponent } from './eleve-new/eleve-new.component';
import { ListElevesComponent } from './list-eleves/list-eleves.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EleveComponent } from './eleve/eleve.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Accueil'} },
  { path: 'eleves', component: ListElevesComponent, data: {title: 'Liste élèves'} },
  { path: 'eleve/new', component: EleveNewComponent, data: {title: 'Ajout élève'} },
  { path: 'eleve/:eleveId', component: EleveComponent, data: {title: 'Détail élève'} }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
