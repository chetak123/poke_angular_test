import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetPokemonListService } from '../gql/get-pokemon-list.service';
import { Species } from '../schema';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemon$!: Observable<Species[]>;

  constructor(private getPokemonList: GetPokemonListService) {}

  ngOnInit(): void {
    this.pokemon$ = this.getPokemonList
      .watch({ limit: 50, offset: 0 })
      .valueChanges.pipe(map((result) => result.data.species));
  }
}
