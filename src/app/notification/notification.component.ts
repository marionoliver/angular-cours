import { NotificationService } from './../notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: Array<string>;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

}
