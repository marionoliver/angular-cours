
import { ElevesService } from './../eleves.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Eleve } from '../store';
import { MineurPipe } from '../mineur.pipe';


@Component({
  selector: 'app-list-eleves',
  templateUrl: './list-eleves.component.html',
  styleUrls: ['./list-eleves.component.css']
})
export class ListElevesComponent implements OnInit {
  eleves: Array<Eleve> = null;
  nomCtl: FormControl;
  prenomCtl: FormControl;
  nomDeClasseCtl: FormControl;
  filiereCtl: FormControl;
  ageCtl: FormControl;
  descriptionCtl: FormControl;
  emailCtl: FormControl;
  eleveForm: FormGroup;


  constructor(private elevesService: ElevesService, private mineurPipe: MineurPipe, private fb: FormBuilder) {
    this.nomCtl = this.fb.control('', [Validators.required, Validators.maxLength(25)]);
    this.prenomCtl = this.fb.control('', [Validators.required, Validators.maxLength(25)]);
    this.nomDeClasseCtl = this.fb.control('');
    this.filiereCtl = this.fb.control('');
    this.ageCtl = this.fb.control('', [Validators.required, Validators.pattern('^[0-9]+$')]);
    this.descriptionCtl = this.fb.control('');
    this.emailCtl = this.fb.control('', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'));

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

  ngOnInit() {
    this.eleves = this.elevesService.list();
  }

  mineur(age: number): String {
    console.log(this.mineurPipe.transform(age));
    return this.mineurPipe.transform(age);
  }

  addEleve() {
    // tslint:disable-next-line:max-line-length
    const eleve = new Eleve(this.eleveForm.value.nomDeClasse, this.eleveForm.value.nom, this.eleveForm.value.prenom, this.eleveForm.value.age, this.eleveForm.value.filiere, this.eleveForm.value.description, this.eleveForm.value.email);
    this.elevesService.add(eleve);
    this.reset();
  }

  reset() {
    this.nomCtl.setValue('');
    this.prenomCtl.setValue('');
    this.nomDeClasseCtl.setValue('');
    this.filiereCtl.setValue('');
    this.ageCtl.setValue('');
    this.descriptionCtl.setValue('');
    this.emailCtl.setValue('');
  }
}
