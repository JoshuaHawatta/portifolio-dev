import styled from "styled-components";

export const HeaderWrapper = styled.header `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    left: 0;
    width: 6%;
    height: 100vh;
    padding: 2rem;
    z-index: 2;
    box-shadow: .4rem 0 2rem rgba(0, 0, 0, .2);
    background-color: var(--blue-color);

    /*MOBILE*/
    @media (max-width: 779px) {
        background: none;
        box-shadow: none;
        width: 17%;
    }

    /*TABLETS*/
    @media (min-width: 780px) and (max-width: 1015px) { width: 8%; }

    /*MOBILE_LAND_SCAPE_WITH_BUTTONS*/
    @media (max-height: 520px) and (orientation: landscape) { display: none; }
`;

export const LogoDiv = styled.div `
    z-index: 4;
    
    /*CHILDREN_ELEMENTS*/
    a {
        font: 4.5rem harry-fat, Arial, Helvetica, sans-serif;
        text-decoration: none;
        color: var(--green-color);

        span { color: #FFFFFF; }
    }
`;

export const NavBar = styled.nav `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    transition: all .2s ease;

    /*CHILDREN_ELEMENTS*/
    div {
        display: flex;
        align-items: center;
        flex-direction: column;

        /*CHILDREN_ELEMENTS*/
        a {
            font: 2.5rem now-light, Helvetica, sans-serif;
            text-decoration: none;
            margin: 0 .8rem;
            color: var(--green-color);
            transition: all .3s ease-in-out;

            /*EFFECTS*/
            &:focus {
                font-size: 3.2rem;
                color: #FFFFFF;
            }
        }

        p {
            color: #FFFFFF;
            font: 1.1rem now-light, Arial, Helvetica; 
        }
    }

    /*MOBILE*/
    @media (max-width: 779px) {
        position: fixed;
        width: 17%;
        top: 0;
        left: 0;
        padding: 8rem 0;
        transform: ${({ showNavBar }) => showNavBar ? 'translateX(-100%)' : 'translateX(0)' };
        background-color: var(--blue-color);

        box-shadow: ${({ showNavBar }) => !showNavBar
            ? '.4rem 0 2rem rgba(0, 0, 0, .2)'
            : 'none' 
        };

        /*CHILDREN_ELEMENTS*/
        div { transform: translateY(4rem); }
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
    top: 2rem;
    margin: 1rem 2rem 0 0;
    right: 0;
    transform: translateY(-.5rem);

    /*CHILDREN_ELEMENTS*/
    div {
        width: 3rem;
        height: .20rem;
        border-radius: 0.5rem;
        transform-origin: 1px;
        transition: .2s ease all;
        background-color: var(--green-color);

        /*PSEUDO_ELEMENTS*/
        &:nth-child(1) { transform: ${ ({ opened }) => !opened && 'rotate(45deg)' }; }

        &:nth-child(2) {
            transform: ${ ({ opened }) => !opened && 'translateY(-.8rem) rotate(-180deg)' };
        }
    }

    /*MOBILE*/
    @media (max-width: 779px) { display: flex; }

    /*MOBILE_LAND_SCAPE_WITH_BUTTONS*/
    @media
    (max-height: 520px)
    and (min-width: 750px)
    and (max-width: 800px)
    and (orientation: landscape) { display: none; }
`;