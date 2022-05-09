import { IBg_Color } from "../ts";
import styled from "styled-components";
import arrowImage from "./../utils/assets/arrow.png"
import seachImage from "./../utils/assets/search.png"

export const StyleButtom = styled.button<IBg_Color>`
background-color: ${({ background }) => background};
color: ${({ color }) => color};
`


export const StyleRowSpace = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
gap: 12px;
`


export const StyleList = styled.ul`
width: 100%;
& > li {
    cursor: pointer;
    list-style: none;
    padding: .8rem .6rem;
    align-items: center;
    color: var(--white);
    font-size: clamp(18px, 1.8vw, 20px);
    transition: border .2s ease-in-out;
    :hover{
        display: flex;
        justify-content: space-between;
        border: solid 1px var(--gray);
        :after {
            content: url(${arrowImage});
            rotate: 270deg;
            display: block;
        }
    }
}
`

export const StyleInputSearch = styled.input`
background:transparent url(${seachImage}) left no-repeat;
background-position-x: .6rem;
padding: .4rem .8rem .4rem 2.8rem;
width: 68%;
color: var(--white);
font-size: clamp(18px, 1.8vw, 20px);
border: solid 1px var(--white);
`