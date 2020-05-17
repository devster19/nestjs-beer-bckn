import { Injectable } from '@nestjs/common';
import { Beer } from './interfaces/beer.interface'
import { CreateBeerDto } from './dto/create-beer.dto'

@Injectable()
export class BeersService {
    private beers: Beer[] = [
        {
            id: "123452",
            name: "Chang",
            country: "Thailand",
            abv: 6.4
        },
        {
            id: "236728",
            name: "Heineken",
            country: "Netherland",
            abv: 5
        },
        {
            id: "123662",
            name: "Paulaner",
            country: "Germany",
            abv: 6.8
        },
        {
            id: "462012",
            name: "Krombacher",
            country: "Germany",
            abv: 4.8
        },
        {
            id: "563792",
            name: "Budweiser",
            country: "USA",
            abv: 5
        },
        {
            id: "872098",
            name: "Beerlao",
            country: "Laos",
            abv: 5
        }
    ]
    findAll(): Beer[] {
        return this.beers;
    }

    findOne(id: string): Beer {
        return this.beers.find(beer => beer.id === id);
    }

    create(createBeerDto: CreateBeerDto) : Beer{
        let id = Math.floor(Math.random() * 900000) + 100000 + "";
        let newBeer = {id,...createBeerDto};
        this.beers.push(newBeer);
        return newBeer;
    }

    update(id: string, createBeerDto: CreateBeerDto) : Beer[] {
        let newState = this.beers.map(beer => beer.id === id ? {id,...createBeerDto}: beer)
        this.beers = [...newState];
        return this.beers;
    }

    remove(id: string) : Beer [] {
        let index = this.beers.findIndex(beer => beer.id === id)
        this.beers = this.beers.filter(beer => beer.id != id);
        return this.beers;
    }
}
