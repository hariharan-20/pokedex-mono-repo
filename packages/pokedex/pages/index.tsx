import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fetchPokemonList } from '@packages/utils';
import Button  from '@packages/components';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store';
import { fetchPokemonFailure, fetchPokemonStart, fetchPokemonSuccess } from '../slices/pokemonSlice';
import { capitalize } from '@mui/material';

const HomePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    const fetchData = async () => {
        dispatch(fetchPokemonStart());
        try {
            const response = await fetchPokemonList();
            dispatch(fetchPokemonSuccess(response.results));
        } catch (err: any) {
            dispatch(fetchPokemonFailure(err.message));
        }
    };
    if (!data.length)
    fetchData();
  }, []);

  const columns = [
    { field: 'name', headerName: 'Pokemon Name', width: 200, renderCell: (params: any) => capitalize(params.row.name)},
    { field: 'url', headerName: 'Details', width: 200, renderCell: (params: any) => (
      <Button onClick={() => router.push(`/pokemon/${params.row.id}`)} label='View Details' style={{height: 25 ,width: 100}}/>
    )}
  ];

  return (
    <div style={{ height: 600, width: 450, display:'flex', justifySelf: 'center', marginTop: 100}}>
        {loading ? <div>Loading...</div> : 
        <>
        {error ? <div>{error}</div> : (
            <DataGrid
                rows={data.map((pokemon, index) => ({ id: index + 1, name: pokemon.name, url: pokemon.url }))}
                columns={columns}
                hideFooter={true}
            />
        )
        }
        </>}
    </div>
  );
};

export default HomePage;
