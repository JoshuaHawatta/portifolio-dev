import styled from 'styled-components';

export const ArticleWrapper = styled.article `
    width: 100%;
    height: 100vh;
`;

export const Stacks = styled.section `
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .5);

    img {
        position: absolute;
        z-index: -1;
    }
`;

export const StacksDiv = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    padding: 3rem;
    border-radius: 2rem;
    background-color: rgba(255, 255, 255, .1);
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1.9rem);
    
    h1 { 
        font: 7rem harry-fat, Arial, Helvetica;
        color: var(--green-color);

        span { color: #FFFFFF; }
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row wrap;
        align-items: center;
        margin-top: 3rem;
    }
`;

export const GoToNextDiv = styled.div `
    display: flex;
    flex-flow: column wrap;
    position: absolute;
    align-items: center;
    bottom: 0;
    width: 30%;
    padding-bottom: 2rem;
`;