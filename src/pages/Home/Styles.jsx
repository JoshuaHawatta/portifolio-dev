import styled from "styled-components";

export const MainWrapper = styled.main `
    width: 100%;
    height: 73vh;
    padding: 0;
    background-color: var(--blue-color);
`;

export const Presentation = styled.section `
    display: flex;    
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 65vh;
    padding: 0 12rem;
    background-color: var(--blue-color);
`;

export const WhoIAm = styled.div `
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
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

        button {
            display: flex;
            align-items: center;
            font: 2.3rem now-light, Helvetica, sans-serif;
            background: linear-gradient(to left, var(--blue-color) 50%, #FFFFFF 50%) right;
            border: .1rem solid #FFFFFF;
            outline: none;
            width: 22rem;
            height: 3rem;
            padding: 2.5rem;
            margin-top: 5rem;
            padding-top: 2.8rem;
            border-radius: .4rem;
            background-size: 200% 100%;
            transition: .3s ease-out;
            color: #FFFFFF;

            /*CHILDREN_ELEMENTS*/
            svg { margin-right: 1rem; }

            /*EFFECTS*/
            &:hover {
                background-position: left;
                color: var(--blue-color);
                cursor: pointer;
            }

        }
    }
`;

export const PresentationImage = styled.div `
    display: flex;
    justify-content: flex-end;

    /*CHILDREN_ELEMENTS*/
    img {
        width: 75%;
        border-radius: .5rem;
        box-shadow: -4rem 1rem 3rem rgba(0, 0, 0, .3);
    }
`;