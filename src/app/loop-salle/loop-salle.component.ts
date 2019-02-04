import { Title } from '@angular/platform-browser';
import { Salle } from './../salle.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loop-salle',
  templateUrl: './loop-salle.component.html',
  styleUrls: ['./loop-salle.component.css']
})
export class LoopSalleComponent implements OnInit {

  @Input() salles: Array<Salle>;
  rowSalleCurrent: Salle = null;

  constructor(private titleService: Title) { }

  ngOnInit() {
  }

  changeTitle(salle) {
    this.titleService.setTitle(salle.nom);
    this.rowSalleCurrent = salle;
  }

}
