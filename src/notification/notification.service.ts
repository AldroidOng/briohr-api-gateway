import { Inject, Injectable } from '@nestjs/common';
import { SendNotificationRequest } from './dtos/send-notification-request.dto';
import { ClientProxy } from '@nestjs/microservices';
import { SendNotificationEvent } from './events/send-notification-event';
import { firstValueFrom } from 'rxjs';
import { NotificationType } from 'shared/types/notification.types';
import { GetUiNotificationsRequest } from './dtos/ui-notifications-request.dto';

@Injectable()
export class NotificationService {
  constructor(
    @Inject('NOTIFICATION') private readonly notificationClient: ClientProxy,
  ) {}

  async sendNotification(sendNotificationRequest: SendNotificationRequest) {
    try {
      const result = await firstValueFrom(
        this.notificationClient.send(
          { cmd: 'send_notification' },
          sendNotificationRequest,
        ),
      );
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async uiNotifications(username: string) {
    try {
      const result = await firstValueFrom(
        this.notificationClient.send(
          { cmd: 'get_ui_notifications' },
          { username },
        ),
      );
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async seed() {
    try {
      const result = await firstValueFrom(
        this.notificationClient.send({ cmd: 'seed' }, {}),
      );

      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async test() {
    return await firstValueFrom(
      this.notificationClient.send('test_notification_service', {}),
    );
  }
}
