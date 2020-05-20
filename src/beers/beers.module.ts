import { Module } from '@nestjs/common';
import { BeersController } from './beers.controller';
import { BeersService } from './beers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BeerSchema } from './schemas/beer.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Beer', schema: BeerSchema }])],
  controllers: [BeersController],
  providers: [BeersService]
})
export class BeersModule {}
