import styled from "styled-components"

export const CallToActionButton = styled.button `
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

    /*MOBILE*/
    @media (max-width: 779px) {
        margin-top: 2rem;
        width: 18rem;
        padding: 2rem;
        font-size: 2rem;
    }

    /*TABLETS*/
    @media (min-width: 780px) and (max-width: 1015px) {
        margin-top: 2rem;
        width: 18rem;
        padding: 2rem;
        font-size: 2rem;
    }
`;