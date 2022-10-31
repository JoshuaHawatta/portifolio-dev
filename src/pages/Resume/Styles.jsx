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

export const Glasmorphisim = styled.div `
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-bottom: 10rem;
    padding: 3rem;
    border-radius: 2rem;
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    background-color: rgba(255, 255, 255, .1);
    animation: ${ pop } .5s ease forwards;
   
    /*CHILDREN_COMPONENTS*/
    h1 { 
        font: 8rem harry-fat, Arial, Helvetica;
        color: var(--green-color);

        /*CHILDREN_COMPONENTS*/
        span { color: #FFFFFF; }
    }

    /*MOBILE*/
    @media (max-width: 779px) { h1{ font-size: 4rem; } }

    /*TABLETS*/
    //@media (min-width: 780px) and (max-width: 1015px) { width: 8%; }
`;

export const HardSkills = styled.section `
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: absolute;
    width: 100%;
    height: 100vh;
    padding: 0 12rem;

    /*CHILDREN_ELEMENTS*/
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row wrap;
        align-items: center;
        margin-top: 3rem;
    }

    button {
        position: absolute;
        bottom: 1.5rem;
    }

    /*MOBILE*/
    @media (max-width: 779px) {
        
        /*CHILDREN_ELEMENTS*/
        button {
            bottom: 5rem;
            font-size: 1.5rem;
            width: 60%;
        }
    }
`;

export const SoftSkills = styled(HardSkills)`
    /*ICON_WITH_PERCENTAGE_ELEMENT*/
    div > div > div { width: 15%; }

    /*MOBILE*/
    @media (max-width: 779px) {
        margin: 0 auto;
        padding: 0;

        /*CHILDREN_ELEMENTS*/
        div {
            border-radius: unset;
            flex-flow: row wrap;
            margin: 0 auto;
            width: 80%;
            margin: 2rem 0;

            /*CHILDREN_ELEMENTS*/
           div > div {
                width: 12rem;
                margin: .5rem;
                align-items: center;
                text-align: center;

                /*CHILDREN_ELEMENTS*/
                svg { font-size: 5rem; }
                h5 { font-size: 1.2rem; }
           }

           div :nth-child(4) { width: 15rem; }
       }
    }
`;

export const MySelf = styled(HardSkills) `
    div > div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 0 4rem;
        width: 95%;

        /*CHILDREN_ELEMENTS*/
        img {
            z-index: unset;
            position: unset;
            width: 30rem;
            height: 30rem;
            border-radius: 50%;
        }
        
        div {
            display: flex;
            flex-flow: column wrap;
            justify-content: space-evenly;
            margin: 0 auto;
            width: 80%;
            height: 41vh;

            /*CHILDREN_ELEMENTS*/
            p {
                font: 1.7rem now-light Arial, Helvetica, sans-serif;
                color: #FFFFFF;
            }
        }
    }

    /*MOBILE*/
    @media (max-width: 779px) { h1{ font-size: 4rem; } }

    
`;