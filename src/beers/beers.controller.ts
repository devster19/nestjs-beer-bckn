import { Controller, Get, Post, Body, Param, Put, Delete, Response, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto';
import { BeersService } from './beers.service';
import { Beer } from './interfaces/beer.interface';

@Controller('beers')
export class BeersController {
    constructor(private readonly beersService: BeersService){}
    @Get()
    async findAll(@Response() res){
        const beers = await this.beersService.findAll()
        return res.status(HttpStatus.OK).json({
            beers
        })
    }

    @Get(':id')
    async findOne(@Response() res, @Param('id') id: string) {
        const beer = await this.beersService.findOne(id)
        return res.status(HttpStatus.OK).json({
            beer
        })
    }

    @Post('/create')
    async create(@Response() res, @Body() createBeerDto: CreateBeerDto)
    {
        const beer = await this.beersService.create(createBeerDto)
        if(!beer) throw new NotFoundException('Beer Not Found!');
        return res.status(HttpStatus.OK).json({
            message: "Beer has been created successfully",
            beer
        })
    }
    
    @Put(':id')
    async update(@Response() res, @Param('id') id: string, @Body() createBeerDto: CreateBeerDto) {
        const beer  = await this.beersService.update(id,createBeerDto);
        if(!beer) throw new NotFoundException('Beer Not Found!');
        return res.status(HttpStatus.OK).json({
            message: "Beer has been updated successfully",
            beer
        })
    }

    @Delete(':id')
    async remove(@Response() res, @Param('id') id: string) {
        const beer = await this.beersService.remove(id);
        if(!beer) throw new NotFoundException('Beer Not Found!');
        return res.status(HttpStatus.OK).json({
            message: "Beer has been deleted successfully",
            beer
        })
    }
    
      
}
