import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',

  // Component-level provider creates a NEW instance of NotificationService.
  // This instance is scoped only to this component and its child components.
  providers: [NotificationService]
})
export class Notification {

  constructor(private notificationService: NotificationService) {
    this.notificationService.show('Notification Component Loaded');
  }

}