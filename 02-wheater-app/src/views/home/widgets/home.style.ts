import styled from "styled-components";
import { IMenu_options } from "../../../ts";
import menuImageBg from '../../../utils/assets/Cloud-background.png'
import closeImageBg from '../../../utils/assets/close.svg'
import ubicationImageBg from '../../../utils/assets/ubication.png'

export const StyleMenu = styled.div<IMenu_options>`
grid-area: menu;
background-color: var(--menu_bg);
position: relative;
width: 100%;
height: 100%;
min-width: 18rem;
max-width: 30rem;

${({ searchOption }) => !searchOption && `
    &:after{
        content: "";
        opacity: .1;
        position: absolute;
        display: flex;
        width: 100%;
        height: 40%;
        background: transparent url(${menuImageBg}) top no-repeat;
        top: 8%;
    }
`}

@media (max-width: 768px) {   
    max-width: none;     
    &:after{
        height: 100%;   
    }
}
`

export const StyleMenuSearchContent = styled.div`
width: 80%;
height: 100%;
padding: 15% 5%;
gap: 2rem;
display: flex;
flex-direction: column;
margin: auto;
`

export const StyleMainWhaterInfo = styled.main`
grid-area: main;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

export const StyleMenuLayout = styled.div`
display: flex;
position: relative;
z-index: 1;
flex-direction: column;
`

export const StyleCloseBtnMenu = styled.button`
background: transparent url(${closeImageBg}) ;
color: var(--white);
position: absolute;
width: 24px;
height: 24px;
left: 85%;
top: 3%;
`

/*------------- info wheater -------------*/

export const StyleMenuInfoWheaterContent = styled(StyleMenuSearchContent)`
padding: 5%;
`

export const StyleUbicationBtn = styled.button`
background: var(--dark_gray) url(${ubicationImageBg}) center/60% no-repeat;
width: 32px;
height: 32px;
border-radius: 50%;
`