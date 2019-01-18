import { ElevesService } from './../eleves.service';
import { Eleve } from './../store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MineurPipe } from '../mineur.pipe';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.css']
})
export class EleveComponent implements OnInit {
  eleveToDisplay: Eleve;

  constructor(
    private eleveService: ElevesService,
    private route: ActivatedRoute,
    private mineurPipe: MineurPipe,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('eleveId');
      this.eleveService.get(parseInt(id, 10))
      .subscribe(eleve => this.eleveToDisplay = eleve);
    });
  }

  mineur(age: number): String {
    console.log(this.mineurPipe.transform(age));
    return this.mineurPipe.transform(age);
  }

  delete(eleve: Eleve) {
    this.eleveService.delete(eleve).subscribe();
    this.router.navigate(['/eleves']);
  }
}
