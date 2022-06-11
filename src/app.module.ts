import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { ItemsController } from './items/items.controller';

@Module({
  imports: [],
  controllers: [AppController, TestController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
