import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications: Array<string>;

  constructor() {
    this.notifications = new Array();
  }

  public add(message: string) {
    this.notifications.push(message);
  }

  public clear() {
    this.notifications = [];
  }
}
