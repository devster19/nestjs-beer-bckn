import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { BeersService } from './beers.service';
import { Beer } from './interfaces/beer.interface';

@Controller('beers')
export class BeersController {
    constructor(private readonly beersService: BeersService){}
    @Get()
    findAll(): Beer[]{
        return this.beersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.beersService.findOne(id);
    }

    @Post('/create')
    create(@Body() createBeerDto: CreateBeerDto)
    {
        return this.beersService.create(createBeerDto);
    }
    
    @Put(':id')
    update(@Param('id') id: string, @Body() createBeerDto: CreateBeerDto) {
        return this.beersService.update(id,createBeerDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.beersService.remove(id);
    }
    
      
}
