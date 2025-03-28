var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
const API_URL = 'https://pokeapi.co/api/v2/pokemon';
// Function to fetch list of Pokemon
export const fetchPokemonList = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (params = '') {
    try {
        const response = yield axios.get(`${API_URL}${params}`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching Pokemon list:', error);
        throw error;
    }
});
// Function to fetch details of a specific Pokemon
export const fetchPokemonDetails = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(`${API_URL}/${id}`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching Pokemon details:', error);
        throw error;
    }
});
