import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { Eleve } from './../store';
import { ElevesService } from './../eleves.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-eleve',
  templateUrl: './edit-eleve.component.html',
  styleUrls: ['./edit-eleve.component.css']
})
export class EditEleveComponent implements OnInit {
  eleve: Eleve;
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
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
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

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
    const id = params.get('eleveId');
    this.elevesService.get(parseInt(id, 10))
    .subscribe(eleve => {
      this.eleve = eleve;
      console.log(this.eleveForm);
      this.eleveForm.get('nom').setValue(eleve.nom);
      this.eleveForm.get('prenom').setValue(eleve.prenom);
      this.eleveForm.get('nomDeClasse').setValue(eleve.nomDeClasse);
      this.eleveForm.get('filiere').setValue(eleve.filiere);
      this.eleveForm.get('age').setValue(eleve.age);
      this.eleveForm.get('description').setValue(eleve.description);
      this.eleveForm.get('email').setValue(eleve.email);
    });
  });
}

  updateEleve() {
    const eleve = new Eleve(
      this.eleve.id,
      this.eleveForm.value.nomDeClasse,
      this.eleveForm.value.nom,
      this.eleveForm.value.prenom,
      this.eleveForm.value.age,
      this.eleveForm.value.filiere,
      this.eleveForm.value.description,
      this.eleveForm.value.email
    );
    console.log(eleve);
    this.elevesService.update(eleve)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(() => this.router.navigate(['/eleves']))
    ;
  }
}

