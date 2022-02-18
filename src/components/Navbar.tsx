/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Navbar = () => {
    const navigationBar = css`
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        background-color: grey;
        padding: 0;
        margin: 0;
        display: flex;
        z-index: 1;
    `

    const navItem = css`
        padding: 10px;
    `

    return (
        <div css={navigationBar}>
            <div css={navItem}>
                <a href="/">
                    <img src="" alt="a" />sddfs
                </a>
            </div>
            <div css={navItem}>
                <a href="/pokemon/a">
                    <img src="" alt="a" />safs
                </a>
            </div>
            <div css={navItem}>
                <a href="/pokemon-box">
                    <img src="" alt="a" />sfsf
                </a>
            </div>
        </div>
    )
}

export default Navbar;