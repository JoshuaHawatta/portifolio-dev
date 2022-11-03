import styled from "styled-components";

export const ArticleWrapper = styled.article `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 0 12rem;
    background: var(--gray-color);
`;

export const Line = styled.div `
    height: 75vh;
    width: .1rem;
    margin: 0 auto;
    background-color: var(--blue-color);
`;

export const Concats = styled.section `
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    width: 30vw;
    height: 75vh;
    background: #FFFFFF;
    padding: 4rem;
    border-radius: .4rem;


    /*CHILDREN_ELEMENTS*/
    h4 {
        font: 2.8rem now-light, Helvetica, sans-serif;
        color: var(--blue-color);
    }

    div {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;

        /*CHILDREN_ELEMENTS*/
        a{
            width: 100%;
            text-decoration: none;
            
            /*CHILDREN_ELEMENTS*/
            button { margin: 1rem 0; }
        }

       
    }

    h1 { color: red; }
`;