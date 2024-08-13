import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { NotificationType } from 'shared/types/notification.types';

export class SendNotificationRequest {
  @IsNotEmpty()
  @IsIn(Object.values(NotificationType))
  notificationType: NotificationType;

  // Ideally should be user ID
  @IsNotEmpty()
  @IsString()
  username: String;
}
