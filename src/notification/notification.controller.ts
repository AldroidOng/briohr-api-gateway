import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SendNotificationRequest } from './dtos/send-notification-request.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  sendNotification(@Body() sendNotificationRequest: SendNotificationRequest) {
    return this.notificationService.sendNotification(sendNotificationRequest);
  }

  @Get('test')
  test() {
    return this.notificationService.test();
  }

  @Get('ui-notifications')
  uiNotifications(@Query('username') username?: string) {
    return this.notificationService.uiNotifications(username);
  }

  @Get('seed')
  seed() {
    return this.notificationService.seed();
  }
}
