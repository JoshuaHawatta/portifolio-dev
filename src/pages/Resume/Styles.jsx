import styled, { keyframes } from 'styled-components';

const pop = keyframes `
    0% {
        div { display: none; }
        transform: scale(0);
    }
    50% {
        div { display: flex; }
        transform: scale(1.2);
    }
    100% { transform: scale(1); }
`;

export const ArticleWrapper = styled.article `
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    /*CHILDREN_COMPONENTS*/
    img {
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: -1;
    }
`;

export const LayoutContent = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 3rem;
    border-radius: 2rem;
    background-color: rgba(255, 255, 255, .1);
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    animation: ${ pop } .5s ease forwards;
    
    /*CHILDREN_COMPONENTS*/
    h1 { 
        font: 8rem harry-fat, Arial, Helvetica;
        color: var(--green-color);

        /*CHILDREN_COMPONENTS*/
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

export const HardSkills = styled.section `
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    padding: 0 12rem;
`;

export const SoftSkills = styled(HardSkills) `

`;