import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { NotificationType } from 'shared/types/notification.types';

export class GetUiNotificationsRequest {
  @IsNotEmpty()
  @IsString()
  username: String;
}
