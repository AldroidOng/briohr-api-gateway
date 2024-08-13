import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { ClientOptions, ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '../shared/config/config.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.registerAsync([
      {
        name: 'NOTIFICATION',
        useFactory: (configService: ConfigService): ClientOptions => ({
          transport: Transport.TCP,
          options: {
            host:
              configService.get<string>('NOTIFICATION_MICROSERVICE_HOST') ||
              'localhost',
            port:
              parseInt(
                configService.get<string>('NOTIFICATION_MICROSERVICE_PORT'),
                10,
              ) || 3001,
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
