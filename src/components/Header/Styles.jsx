import styled from "styled-components";

export const HeaderWrapper = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    width: 100%;
    top: 0; 
    height: 15rem;
    padding: 0 2rem;
    background-color: var(--blue-color);
    box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, .5);
`;

export const LogoDiv = styled.div `
    a {
        font: 6.5rem harry-fat, Helvetica, sans-serif;
        color: var(--green-color);
        text-decoration: none;

        span { color: #FFFFFF; }
    }

    /*MOBILE*/
    @media (max-width: 779px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        a {
            font-size: 6rem;
            margin-top: 5rem;
            transform: translateY(-2rem);
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
        span { color: #f0e7f1; }

        /*EFFECTS*/
        &:hover {
            color: #FFFFFF;

            span { color: #FFFFFF; }
        }
    
        &:focus {
            font: 3rem harry-fat, Helvetica, sans-serif;
            color: var(--green-color);
        }
    }

    svg { display: none; }

    /*MOBILE*/
    @media (max-width: 779px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        position: fixed;
        width: 45vw;
        top: 0;
        right: 0;
        height: 100vh;
        transform: ${ ({ showNavBar }) => showNavBar ? 'translateX(100%)' : 'translateX(0)' };
        box-shadow: ${ ({ showNavBar }) => !showNavBar && '-2rem 0rem 4rem rgba(0, 0, 0, .5)' };
        background-color: var(--brighter-blue-color);
    
        a {
            color: var(--green-color);
            display: flex;
            align-items: center;

            span { color: var(--green-color); }

            svg {
                display: inline-block;
                color: var(--green-color);
                font-size: 2rem;
                margin-left: .2rem;
                margin-right: .7rem;
            }
            
            /*EFFECTS*/
            &:hover {
                color: #FFFFFF;
                
                svg { color: #FFFFFF; }
            }
            
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
    align-items: flex-end;
    flex-flow: column nowrap;
    width: 5rem;
    height: 3rem;
    top: 1rem;
    margin: 1rem .8rem 0 0;
    right: 0;
    z-index: 1;
    transform: translateY(-.5rem);

    /*CHILDREN_ELEMENTS*/
    div {
        width: 2rem;
        height: .20rem;
        border-radius: 0.5rem;
        transform-origin: 1px;
        transition: .2s ease all;
        background-color: var(--green-color);

        /*PSEUDO_ELEMENTS*/
        &:nth-child(1) {
            transform: ${ ({ opened }) => !opened && 'rotate(45deg)' };
        }

        &:nth-child(2) {
            transform: ${ ({ opened }) => !opened && 'translateY(-.2rem) rotate(-45deg)' };
        }
    }

    /*MOBILE*/
    @media (max-width: 779px) {
        display: flex;
    }
`;