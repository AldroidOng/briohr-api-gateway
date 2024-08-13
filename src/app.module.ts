import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';
import { ProfileModule } from './profile/profile.module';
import { ConfigModule } from './shared/config/config.module';

@Module({
  imports: [NotificationModule, ProfileModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
