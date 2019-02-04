import { NotificationService } from './../notification.service';
import { Salle } from './../salle.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-row-salle',
  templateUrl: './row-salle.component.html',
  styleUrls: ['./row-salle.component.css']
})
export class RowSalleComponent implements OnInit {

  @Input() salle: Salle;
  @Output() salleSelected = new EventEmitter<Salle>();
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  selectSalle() {
    this.notificationService.add('The salle selected is ... ' + this.salle.nom);
    this.salleSelected.emit(this.salle);
  }

}
