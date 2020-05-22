import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Beer } from './interfaces/beer.interface'
import { CreateBeerDto } from './dto/create-beer.dto'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BeersService {
    constructor(@InjectModel('Beer') private beerModel: Model<Beer>) {}
    
    async findAll(): Promise<Beer[]> {
        try{
            const beers = await this.beerModel.find().exec();
            return beers;
        }catch(e){
            throw new HttpException(`Not found`, HttpStatus.NOT_FOUND)
        }
    }

    async findOne(id: string): Promise<Beer> {
        try{
            const beer = await this.beerModel.findById(id).exec();
            return beer;
        }catch(e){
            console.log(e)
            throw new HttpException(`Not found this Beer ID: ${id}`, HttpStatus.NOT_FOUND)
        }
    }

    async create(createBeerDto: CreateBeerDto): Promise<Beer>{
        try{
            const newBeer = await this.beerModel(createBeerDto);
            return newBeer.save();
        }catch(e){
            throw new HttpException('Error while saving', HttpStatus.INTERNAL_SERVER_ERROR)
        }
        
    }

    async update(id: string, updateBeerDto: CreateBeerDto) : Promise<Beer> {
        try{
            const updateBeer = await this.beerModel.findByIdAndUpdate(id, updateBeerDto, { new: true });
            return updateBeer;
        }catch(e){
            throw new HttpException(`Not found this Beer ID: ${id}`, HttpStatus.NOT_FOUND)
        }
    }

    async remove(id: string) : Promise<Beer>{
        try{
            const deletedBeer = await this.beerModel.findByIdAndRemove(id);
            return deletedBeer;
        }catch(e){
            throw new HttpException(`Not found this Beer ID: ${id}`, HttpStatus.NOT_FOUND)
        }
    }
}
