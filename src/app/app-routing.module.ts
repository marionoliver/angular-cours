import { HandleSalleComponent } from './handle-salle/handle-salle.component';
import { Page404Component } from './page404/page404.component';
import { EditEleveComponent } from './edit-eleve/edit-eleve.component';
import { EleveNewComponent } from './eleve-new/eleve-new.component';
import { ListElevesComponent } from './list-eleves/list-eleves.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EleveComponent } from './eleve/eleve.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Accueil'} },
  { path: 'eleves', component: ListElevesComponent, data: {title: 'Liste élèves'} },
  { path: 'eleve/new', component: EleveNewComponent, data: {title: 'Ajouter élève'} },
  { path: 'eleve/:eleveId', component: EleveComponent, data: {title: 'Détail élève'} },
  { path: 'eleve/edit/:eleveId', component: EditEleveComponent, data: {title: 'Modifier élève'} },
  { path: 'page404', component: Page404Component, data: {title: 'Erreur'} },
  { path: 'salles', component: HandleSalleComponent, data: {title: 'Liste salles'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
