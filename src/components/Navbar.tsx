/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MdCatchingPokemon } from 'react-icons/md'
import { RiInboxLine } from 'react-icons/ri'


const Navbar = () => {

    const navBar = css`
        position: fixed;
        width: 100%;
        height: 50px;
        bottom: 0;
        z-index: 999;
        padding: 0px;
        margin: 0px;
        left: 0;
        `;

    const navList = css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2px;
        width: 100%;
        max-width: 414px;
        height: 100%;
        margin: 0px auto;
        align-items: center;
        text-align: center;
        justify-content: center;
        
        position: relative;
        
    `

    const navItem = css`    
        background-color: #EE1515;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 3em;
        cursor: pointer;
        border: 5px solid black;
        &:hover {
            transform: scale(1.05);
            box-shadow: 1px 5px 10px grey;
            -webkit-transition:  box-shadow .1s ease-in;
        }   
    `

    return (
        <nav css={navBar}>
            <ul css={navList}>
                <li css={navItem}>
                    <a css={css`display: block`} href="/">
                        <MdCatchingPokemon />
                    </a>
                </li>
                <li css={navItem}>
                    <a css={css`display: block`} href="/pokemon-box">
                        <RiInboxLine />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;