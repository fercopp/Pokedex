import React, { useEffect, useMemo, useState } from 'react'
import { usePokedexApi } from '../../hooks/usePokedexApi'
import './PokemonList.css'
import {Pagination, PokemonOption} from '../../components'

const PokemonList = () => {
    
    const {getPokemons, pokemons, isLoadingPokemonList} = usePokedexApi()
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        getPokemons()
    },[])

    const handleSelection = (pokemonName) => {
        setSelectedPokemon(pokemonName); // Update the selected pokemon
    };

    // 20 Pokemons per page
    let PageSize = 20;

    const currentTableData = useMemo(() => {
        if (!pokemons || !pokemons.results) {
        return []; // Return an empty array if pokemons or results is undefined
        }
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return pokemons.results.slice(firstPageIndex, lastPageIndex);
    }, [pokemons, currentPage]); 

    return (
    <>
      {isLoadingPokemonList ? (
        'Loading...'
      ) : (
        <div className='pokemonGrid'>
          {currentTableData.map((pokemon, index) => (
            <PokemonOption
              pokemon={pokemon}
              key={index}
              isSelected={selectedPokemon === pokemon.name}
              onSelect={handleSelection}
            />
          ))}
          <div className='pagination-container'>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={pokemons?.results?.length || 0}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonList