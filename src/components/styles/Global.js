// Global Styles

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    /* Google Font */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    *{
        box-sizing: border-box;
    }

    body{
        /* change the backgroundcolor upon the theme */
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 0%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    p{
        opacity: 0.6;
        line-height: 1.5;
    }

    img{
        max-width: 100%;
    }
`

export default GlobalStyles;