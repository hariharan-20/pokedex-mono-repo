import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

// Function to fetch list of Pokemon
export const fetchPokemonList = async (url: string) => {
  try {
    const response = await axios.get(url || API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};

// Function to fetch details of a specific Pokemon
export const fetchPokemonDetails = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
    throw error;
  }
};
