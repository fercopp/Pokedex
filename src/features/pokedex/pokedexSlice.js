import { createSlice } from '@reduxjs/toolkit'


export const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState: {
        isLoadingPokemonList: false,
        isLoadingSelectedPokemon: false,
        pokemons: [],
        selectedPokemon: {},
        isCardModalOpen: false 
    },
    reducers: {
        setIsLoadingPokemonList: (state, {payload}) => {
            state.isLoadingPokemonList = payload;
        },
        setIsLoadingSelectedPokemon: (state, {payload}) => {
            state.isLoadingSelectedPokemon = payload;
        },
        savePokemons: (state, {payload}) => {
            state.pokemons = payload;
            state.isLoadingPokemonList = false;
        },
        saveSelectedPokemon: (state, {payload}) => {
            state.selectedPokemon = payload;
            state.isLoadingSelectedPokemon = false;
        },
        handleCardModal: (state, {payload}) => {
            state.isCardModalOpen = payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { savePokemons, setIsLoadingPokemonList, setIsLoadingSelectedPokemon, saveSelectedPokemon, handleCardModal } = pokedexSlice.actions
