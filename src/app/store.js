import { configureStore } from '@reduxjs/toolkit'
import { pokedexSlice } from '../features/pokedex/pokedexSlice';

const store = configureStore({
    reducer: {
        pokedexApi: pokedexSlice.reducer,
    }
})

export default store;