import styled from "styled-components";

export const RootContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: var(--main_bg);
display: grid;
grid-template-areas: "menu main main main";

font-family: 'Poppins', sans-serif;

@media (max-width: 768px) {
    grid-template-areas: "menu" "main";
    height: calc(100vh * 2);
}
`