import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { BeersService } from './beers.service';
import { Beer } from './interfaces/beer.interface';

@Controller('beers')
export class BeersController {
    constructor(private readonly beersService: BeersService){}
    @Get()
    async findAll(){
        const beers = await this.beersService.findAll()
        return beers;
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const beer = await this.beersService.findOne(id);
        return beer;
    }

    @Post('/create')
    async create(@Body() createBeerDto: CreateBeerDto)
    {
        const beer = await this.beersService.create(createBeerDto)
        return beer;
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() createBeerDto: CreateBeerDto) {
        const beer  = await this.beersService.update(id,createBeerDto);
        return beer;
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const beer = await this.beersService.remove(id);
        return beer;
    }
    
      
}
