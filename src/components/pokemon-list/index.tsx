/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SelectionCard from './SelectionCard'
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../graphql/queries/pokemon-list";

const PokemonList = () => {
    const grid = css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0px auto;
    `
    const { data } = useQuery(GET_POKEMONS, {
        variables: {
            limit: 14,
            offset: 0,
        },
      });
    
    

    return (
        <div css={grid}>
            {data?.pokemons.results.map((pokemon: any) => (
                <SelectionCard  name={pokemon.name} element={pokemon.element} image={pokemon.image} />
            ))}
        </div>
    )
}

export default PokemonList;