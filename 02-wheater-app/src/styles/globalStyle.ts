import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}

:root{
    --main_bg: #100E1D;
    --menu_bg: #1E213A;
    --search_btn_bg: #3C47E9;
    --white: #E7E7EB;
    --gray: #616475;
    --dark_gray: #6E707A;
    --shadow: rgba(0, 0, 0, 0.25);
;
}

@font-face {
    font-family: Raleway;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
}

button{
    padding: .5rem .8rem;
    border: none;
    cursor: pointer;
    transition: scale .2s linear;
    box-shadow: 0px 4px 4px var(--shadow);
    &:hover {
        scale: 1.1;
    }
}

`