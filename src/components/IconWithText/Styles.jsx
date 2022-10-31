import styled from "styled-components";

export const StackWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem;
    width: 10%;

    /*CHILDREN_ELEMENTS*/
    svg {
        font-size: 7rem;
        margin-bottom: 3rem;
    }

    h5 {
        font: 1.2rem now-light, Arial, Helvetica;
        color: #FFFFFF;
    }
`;