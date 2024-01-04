import { Component, OnInit } from '@angular/core';
import { rickMortyData } from 'src/app/models/rickMortyData';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  characters: rickMortyData[] = []
  cardTitles: string = 'Last known location:'
  cardType: string = 'Tipo de espécie: '
  cardStatus: string = 'Status: '

  constructor(private service: RickMortyService) {

  }

  ngOnInit(){
    const characterIds = [1, 2, 3, 4, 5, 26, 27, 28];

    characterIds.forEach((id) => {
      this.service.getCharacter(id.toString()).subscribe(
        {
          next: (res) => {
            const character: rickMortyData = {
              id: res.id,
              name: res.name,
              location: res.location,
              species: res.species,
              status: res.status,
              image: res.image
            };
            this.characters.push(character);
          },
          error: (err) => console.log(err)
        });
    });
  }
}
