import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NotificationModule } from './notification/notification.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [NotificationModule, ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

// {
//   name: 'PROFILE',
//   transport: Transport.TCP,
//   options: {
//     host: 'localhost',
//     port: 3002, // Match the port used by user-service
//   },
// },
