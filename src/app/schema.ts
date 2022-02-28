export interface Species {
  name: string;
  id: number;
  is_legendary?: boolean;
  capture_rate?: number;
  gender_rate?: number;
  generation_id: number;
  evolves_from_species_id?: number;
  pokemon_v2_evolutionchain?: {
    pokemon_v2_pokemonspecies: Species[];
  };
  pokemon_v2_pokemonspeciesflavortexts: {
    flavor_text: string;
  }[];
}
