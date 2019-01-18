import { NotificationService } from './../notification.service';
import { Eleve } from './../store';
import { ElevesService } from './../eleves.service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eleve-new',
  templateUrl: './eleve-new.component.html',
  styleUrls: ['./eleve-new.component.css']
})
export class EleveNewComponent implements OnInit {
  nomCtl: FormControl;
  prenomCtl: FormControl;
  nomDeClasseCtl: FormControl;
  filiereCtl: FormControl;
  ageCtl: FormControl;
  descriptionCtl: FormControl;
  emailCtl: FormControl;
  eleveForm: FormGroup;

  constructor(
    private elevesService: ElevesService,
    private notificationService: NotificationService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.nomCtl = this.fb.control('', [
      Validators.required,
      Validators.maxLength(25)
    ]);
    this.prenomCtl = this.fb.control('', [
      Validators.required,
      Validators.maxLength(25)
    ]);
    this.nomDeClasseCtl = this.fb.control('');
    this.filiereCtl = this.fb.control('');
    this.ageCtl = this.fb.control('', [
      Validators.required,
      Validators.pattern('^[0-9]+$')
    ]);
    this.descriptionCtl = this.fb.control('');
    this.emailCtl = this.fb.control(
      '',
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$')
    );

    this.eleveForm = this.fb.group({
      nom: this.nomCtl,
      prenom: this.prenomCtl,
      nomDeClasse: this.nomDeClasseCtl,
      filiere: this.filiereCtl,
      age: this.ageCtl,
      description: this.descriptionCtl,
      email: this.emailCtl
    });
  }

  ngOnInit() {}

  addEleve() {
    // tslint:disable-next-line:max-line-length
    const eleve = new Eleve(
      this.eleveForm.value.nomDeClasse,
      this.eleveForm.value.nom,
      this.eleveForm.value.prenom,
      this.eleveForm.value.age,
      this.eleveForm.value.filiere,
      this.eleveForm.value.description,
      this.eleveForm.value.email
    );
    this.elevesService.add(eleve);
    this.notificationService.add('L\'élève ' +
        eleve.nom +
        ' ' +
        eleve.prenom +
        ' a été ajouté à la liste des élèves.'
    );
    this.router.navigate(['/eleves']);
  }
}
