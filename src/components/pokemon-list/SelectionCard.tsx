/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type selectionCardTypes = {
    image: string,
    name: string,
    element: string,
}

const SelectionCard = ({image, name, element}: selectionCardTypes) => {

    const card = css`
        margin: 3px;
        padding: 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        border: 1px solid #E5E5E5;
        &:hover {
            cursor: pointer;
            box-shadow: 1px 5px 10px grey;
            -webkit-transition:  box-shadow .2s ease-out;
        }   
    `

    return (
        <div css={card}>
                <img src={image} alt="" />
                <p>{name}</p>
                <p>{element}</p>
        </div>
    )
}

export default SelectionCard;