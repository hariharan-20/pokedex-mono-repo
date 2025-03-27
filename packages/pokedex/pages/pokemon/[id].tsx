import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { fetchPokemonDetails } from '@packages/utils/';
import { capitalize } from '@mui/material';

const PokemonDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    console.log(id, 'id')
    if (id) {
      const fetchData = async () => {
        const data = await fetchPokemonDetails(id as string);
        setPokemon(data);
      };
      fetchData();
    }
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div style={{display:'flex', flexDirection: 'column', justifySelf: 'center', marginTop: 100}}>
      <h1>{capitalize(pokemon.name)}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {Object.keys(pokemon?.cries || {}).length ? (
      <>
        <h3>Cries:</h3>
        {Object.entries(pokemon.cries).map(([key, value]) => (
            <div style={{display: 'flex' ,justifyContent: 'space-between'}}>
            <p style={{ margin: 10}}>{key}</p>
            <audio controls style={{ height: 30, width: 230}}>
                <source src={String(value)} type="audio/ogg" />
            </audio>
            </div>
          )
        )}
      </>
      ) : null}
    </div>
  );
};

export default PokemonDetail;
