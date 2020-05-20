import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeersModule } from './beers/beers.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://dbBeer:dbBeer123@cluster0-nrcfy.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true }),BeersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
