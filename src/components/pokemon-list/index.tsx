/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SelectionCard from './SelectionCard'
import { useQuery } from "@apollo/client";
import { GET_POKEMONS, gqlVariables } from "../../graphql/queries/pokemon-list";

const PokemonList = () => {
    const grid = css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: blue;
    `
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
      });
    
     if (loading) console.log('Loading...');
     if (error) console.log(`Error! ${error.message}`);
    
    console.log('Response from server', data);

    return (
        <div css={grid}>
            {data.pokemons.results.map((pokemon: any) => (
                <SelectionCard  name={pokemon.name} element={pokemon.element} image={pokemon.image} />
            ))}
        </div>
    )
}

export default PokemonList;