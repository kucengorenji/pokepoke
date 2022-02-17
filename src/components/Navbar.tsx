/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Navbar = () => {
    const navigationBar = css`
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        background-color: #F7F7F7;
        padding: 0;
        margin: 0;
        display: flex;
    `

    const navItem = css`
        padding: 10px;
    `

    return (
        <div css={navigationBar}>
            <div css={navItem}>
                <a href="localhost:3000">
                    <img src="" alt="a" />sddfs
                </a>
            </div>
            <div css={navItem}>
                <a href="localhost:3000">
                    <img src="" alt="a" />safs
                </a>
            </div>
            <div css={navItem}>
                <a href="localhost:3000">
                    <img src="" alt="a" />sfsf
                </a>
            </div>
        </div>
    )
}

export default Navbar;