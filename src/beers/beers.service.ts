import { Injectable } from '@nestjs/common';
import { Beer } from './interfaces/beer.interface'
import { CreateBeerDto } from './dto/create-beer.dto'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BeersService {
    constructor(@InjectModel('Beer') private beerModel: Model<Beer>) {}
    
    async findAll(): Promise<Beer[]> {
        const beers = await this.beerModel.find().exec();
        return beers;
    }

    async findOne(id: string): Promise<Beer> {
        const beer = await this.beerModel.findById(id).exec();
        return beer;
    }

    async create(createBeerDto: CreateBeerDto): Promise<Beer>{
        const newBeer = await this.beerModel(createBeerDto);
        return newBeer.save();
    }

    async update(id: string, updateBeerDto: CreateBeerDto) : Promise<Beer> {
        const updateBeer = await this.beerModel.findByIdAndUpdate(id, updateBeerDto, { new: true });
        return updateBeer;
    }

    async remove(id: string) : Promise<Beer>{
        const deletedBeer = await this.beerModel.findByIdAndRemove(id);
        return deletedBeer;
    }
}
