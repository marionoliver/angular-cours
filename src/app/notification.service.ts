import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications: Array<string>;

  constructor() {
    this.notifications = new Array();
  }

  public list(): Array<string> {
    return this.notifications;
  }

  public add(message: string) {
    this.notifications.push(message);
  }

  public clear() {
    this.notifications = [];
  }

  public remove(id: number) {
    this.notifications.splice(id, 1);
  }
}
