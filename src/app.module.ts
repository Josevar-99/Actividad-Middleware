import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ReservationsModule } from './reservations/reservations.module.js';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './common/middlewares/logger.middleware.js';
@Module({
  imports: [ReservationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
