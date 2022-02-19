/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const Layout: React.FC = ({ children, ...props }) => {
    const layout = css`
        height: 100vh;
        width: 100%;
        max-width: 414px;
        min-height: 800px;
        padding: 0;
        margin: 0px auto;
        background-color: #F7F7F7;
    `

    return (
    <div css={layout} {...props} >
        {children}
    </div>
    )
}

export default Layout;