import styled from "styled-components";

export const MainWrapper = styled.main `
    width: 100%;
    height: 100vh;
`;

export const Presentation = styled.section `
    display: flex;    
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 0 12rem;
    background-color: var(--blue-color);

    /*MOBILE*/
    @media (max-width: 779px) {
        flex-flow: column-reverse;
        justify-content: center;
        padding: 0 6rem;
    }

    /*TABLETS*/
    @media (min-width: 780px) and (max-width: 1015px) { padding: 0 8rem; }
`;

export const WhoIAm = styled.div `
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    /*CHILDREN_ELEMENTS*/
    div {
        
        /*CHILDREN_ELEMENTS*/
        h1 {
            width: 100%;
            font: 9rem harry-fat, Helvetica, sans-serif;
            width: 80%;
            color: var(--green-color);

            span { color: #FFFFFF; }
        }

        p {
            font: 1.6rem now-light, Helvetica, sans-serif;
            color: #FFFFFF;
        }
    }

    /*MOBILE*/
    @media (max-width: 779px) {
        width: 100vw;

        /*CHILDREN_ELEMENTS*/
        div {
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            text-align: center;
            justify-content: center;

            /*CHILDREN_ELEMENTS*/
            h1 { font-size: 5rem; }
            br { display: none; }

            p {
                font-size: 1.3rem;
                max-width: 90%;
            }
        }
    }

    /*JUST_TO_KEEP_THE_TEXT_ON_A_REGULAR_SIZE*/
    @media (min-width: 500px) and (max-width: 779px) {

        /*CHILDREN_ELEMENTS*/
        div > h1 { font-size: 4rem; }
        div > p { max-width: 100%; }
    }

    /*JUST_TO_KEEP_THE_H1_ON_A_REGULAR_SIZE*/
    @media (min-width: 434px) and (max-width: 779px) { div > h1 { width: 50%; } }

    /*TABLETS*/
    @media (min-width: 780px) and (max-width: 1015px) {

        /*CHILDREN_ELEMENTS*/
        div {

            /*CHILDREN_ELEMENTS*/
            h1 { font-size: 7rem; }
            br { display: none; }
            p { font-size: 1.2rem; }
            p + p + p { max-width: 90%; }
        }
    }
`;

export const PresentationImage = styled.div `
    display: flex;
    justify-content: flex-end;

    /*CHILDREN_ELEMENTS*/
    img {
        width: 75%;
        border-radius: 50%;
        box-shadow: -4rem 1rem 3rem rgba(0, 0, 0, .3);
    }

    /*MOBILE*/
    @media (max-width: 427px) {
        justify-content: center;

        /*CHILDREN_ELEMENTS*/
        img {
            margin: 2rem 0;
            box-shadow: none;
        }
    }

    /*SMALL_SCREENS*/
    @media (min-width: 428px) and (max-width: 779px) {
        justify-content: center;

        /*CHILDREN_ELEMENTS*/
        img {
            margin-bottom: 2rem;
            max-width: 60%;
            box-shadow: none;
        }
    }

    /*TABLETS*/
    @media (min-width: 780px) and (max-width: 1015px) { img { max-width: 70%; } }
`;