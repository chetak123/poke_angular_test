import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { Species } from '../schema';

interface SpeciesResponse {
  species: Species;
}

@Injectable({
  providedIn: 'root',
})
export class GetPokemonService extends Query<SpeciesResponse> {
  document = gql`
    query pokemon($id: Int!) {
      species: pokemon_v2_pokemonspecies_by_pk(id: $id) {
        id
        name
        is_legendary
        capture_rate
        gender_rate
        generation_id
        evolves_from_species_id
        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies {
            id
            name
            generation_id
          }
        }
        pokemon_v2_pokemonspeciesflavortexts(
          where: { language_id: { _eq: 9 } }
          order_by: { version_id: desc }
          limit: 1
        ) {
          flavor_text
        }
      }
    }
  `;
}
