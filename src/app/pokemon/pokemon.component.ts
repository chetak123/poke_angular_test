import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetPokemonService } from '../gql/get-pokemon.service';
import { Species } from '../schema';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon$!: Observable<Species>;

  constructor(
    private route: ActivatedRoute,
    private getPokemon: GetPokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.pokemon$ = this.getPokemon
        .watch({ id: routeParams.id })
        .valueChanges.pipe(map((result) => result.data.species));
    });
  }
}
