import styled from "styled-components";

export const FormWrapper = styled.section `
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border-radius: .4rem;
    width: 30vw;
    padding: 4rem 0;

    /*CHILDREN_ELEMENTS*/
    h4 {
        font: 2.8rem now-light, Helvetica, sans-serif;
        color: var(--blue-color);
    }
`;

export const FormSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;

    /*CHILDREN_ELEMENTS*/
    div {
        display: flex;
        flex-flow: column wrap;
        margin-bottom: .5rem;

        /*CHILDREN_ELEMENTS*/
        label {
            font: 1.6rem now-light, Helvetica, sans-serif;
            color: var(--blue-color);
            text-align: center;
            margin: .8rem 0;
            padding: .5rem 0;
            transform: translateY(1.8rem);
            background: #FFFFFF;
            width: 35%;
        }

        input, textarea {
            outline: none;
            font: 1.4rem now-light, Helvetica, sans-serif;
            width: 30rem;
            border-radius: .4rem;
            padding: 2rem 1rem;
            border: .1rem solid var(--blue-color);
        }

        input {
            color: #000000;
            height: 5vh;
            transition: .3s ease-out;

            /*SIBLINGS*/
            & + div {
                width: 100%;
                height: .1rem;
                background-color: #FFFFFF;
            }
        }

        textArea {
            resize: none;
            height: 19vh;
        }
    }
`;

export const SendEmailButton = styled.button.attrs({ type: 'submit' }) `
    font: 2rem now-light, Helvetica, sans-serif;
    color: var(--blue-color);
    background: none;
    outline: none;
    border: none;
    text-decoration: underline;
    margin-top: 2rem;
    width: 11vw;
    cursor: pointer;
`;

export const FooterLinksSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    padding: 1rem 4rem;
    width: 100%;
    bottom: 0;

    /*CHILDREN_ELEMENTS*/
    a {
        font-size: 2rem;
        margin: 0 .8rem;
        color: var(--green-color);
    }
`;