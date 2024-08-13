import { NotificationType } from 'src/shared/types/notification.types';

export class SendNotificationEvent {
  constructor(
    public readonly notificationType: NotificationType,
    public readonly userName: String,
  ) {}
}
