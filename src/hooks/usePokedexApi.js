import {useDispatch, useSelector} from 'react-redux'
import { 
    savePokemons, 
    saveSelectedPokemon, 
    setIsLoadingPokemonList, 
    setIsLoadingSelectedPokemon 
} from '../features/pokedex/pokedexSlice';
import pokeDex from '../../apis/pokedexApi';

export const usePokedexApi = () => {
    const {pokemons, isLoadingSelectedPokemon, isLoadingPokemonList, selectedPokemon} = useSelector((state) => state.pokedexApi)

    const dispatch = useDispatch();

    // Get all Pokemons 
    const getPokemons = async () => {
        try {
            dispatch(setIsLoadingPokemonList(true))
            const response = await pokeDex.get('pokemon');
            dispatch(savePokemons(response.data))
        } catch (error) {
            console.log(error)
        }
        //
    }

    // Get selected Pokemon info
    const getSelectedPokemon = async (name) => {
        try {
            dispatch(setIsLoadingSelectedPokemon(true))
            const response = await pokeDex.get(`pokemon/${name}`)
            dispatch(saveSelectedPokemon(response.data))
        } catch (error) {
            console.log(error)
        }
    }


    return {
        // Properties
        pokemons,
        isLoadingSelectedPokemon,
        isLoadingPokemonList,
        selectedPokemon,

        // Functions
        getPokemons,
        getSelectedPokemon
    }
}


