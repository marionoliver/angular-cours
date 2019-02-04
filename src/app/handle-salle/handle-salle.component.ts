import { Salle } from './../salle.model';
import { SallesService } from './../salles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handle-salle',
  templateUrl: './handle-salle.component.html',
  styleUrls: ['./handle-salle.component.css']
})
export class HandleSalleComponent implements OnInit {

  salles: Array<Salle>;
  constructor(private sallesService: SallesService) { }

  ngOnInit() {
    this.sallesService.list().subscribe(
      salles => {
        this.salles = salles;
      }
    );
  }
}
