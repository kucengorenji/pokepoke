/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const Layout: React.FC = ({ children, ...props }) => {
    const layout = css`
        width: 100%;
        max-width: 414px;
        padding: 0 16px 70px;
        margin: 0px auto;
        background-color: white;
        position: relative;
    `

    return (
    <div css={layout} {...props} >
        {children}
    </div>
    )
}

export default Layout;