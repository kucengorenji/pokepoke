/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SelectionCard from './SelectionCard'

const PokemonList = () => {
    const grid = css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: blue;
    `

    return (
        <div css={grid}>
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
        </div>
    )
}

export default PokemonList;