import styled from "styled-components";

export const HeaderWrapper = styled.header `
    display: flex;
    position: fixed;        //SE_LAYOUT_QUEBRAR,_REMOVER_ISSO!!!!!
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 15rem;
    padding: 0 2rem;
    background-color: var(--blue-color);
    box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, .5);

`;

export const LogoDiv = styled.div `
    img {
        padding: none;
        width: 40rem;
        transform: translateY(-1.2rem);
    }

    /*MOBILE*/
    @media (max-width: 779px) {
        img {
            margin-top: 5rem;
        }
    }
`;

export const NavBar = styled.nav `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    transition: all .2s ease;
    
    /*CHILDREN_ELEMENTS*/
    a {
        font: 2rem now-light, Helvetica, sans-serif;
        text-decoration: none;
        margin: 0 .8rem;
        color: #f0e7f1;
        transition: all .3s ease-in-out;

        /*CHILDREN_ELEMENTS*/
        span { color: #FFFFFF; }

        /*EFFECTS*/
        &:hover { color: #FFFFFF; }
    
        &:focus {
            font: 3rem harry-fat, Helvetica, sans-serif;
            color: var(--green-color);
        }
    }

    /*MOBILE*/
    @media (max-width: 779px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        position: fixed;
        width: 35vw;
        top: 0;
        right: 0;
        height: 100vh;
        transform: ${ ({ showNavBar }) => showNavBar ? 'translateX(100%)' : 'translateX(0)' };
        box-shadow: ${ ({ showNavBar }) => !showNavBar && '-2rem 0rem 4rem rgba(0, 0, 0, .5)' };
        background-color: var(--brighter-blue-color);

        a {
            color: #FFFFFF;
            
            /*EFFECTS*/
            &:focus {
                font: 2rem now-light, Helvetica, sans-serif;
                color: #FFFFFF;
            }
        }
    }

    /*TABLETS*/
    @media (min-width: 780px) and (max-width: 1015px) {
        justify-content: center;
        align-items: center;

        a {
            font-size: 1.5rem;

            /*EFFECTS*/
            &:focus { font-size: 2rem; }
        }
    }
`;

export const HamburgerDiv = styled.div `
    display: none;
    position: fixed;
    justify-content: space-around;
    flex-flow: column nowrap;
    width: 5rem;
    height: 3rem;
    top: 1rem;
    margin: 1rem .5rem 0 0;
    right: 0;
    z-index: 1;
    transform: translateY(-.5rem);

    /*CHILDREN_ELEMENTS*/
    div {
        width: 2rem;
        height: .25rem;
        border-radius: 0.5rem;
        transform-origin: 1px;
        transition: .2s ease all;
        background-color: var(--green-color);

        /*PSEUDO_ELEMENTS*/
        &:nth-child(1) {
            transform: ${ ({ opened }) => !opened && 'rotate(45deg)' };
        }

        &:nth-child(2) {
            opacity: ${ ({ opened }) => !opened ? 0 : 1 };
        }

        &:nth-child(3) {
            transform: ${ ({ opened }) => !opened && 'translateY(-.7rem) rotate(-45deg)' };
        }
    }

    /*MOBILE*/
    @media (max-width: 779px) {
        display: flex;
    }
`;