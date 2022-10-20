import styled from "styled-components";

export const FooterWrapper = styled.footer `
    background-color: var(--blue-color);
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const FormWrapper = styled(FooterWrapper) `
    width: 100%;
    padding: 2rem 0;
    margin: 0 auto;

    /*CHILDREN_ELEMENTS*/
    h4 {
        font: 3rem now-light, Helvetica, sans-serif;
        color: #FFFFFF;
        margin-bottom: 2.5rem;
    }

    /*MOBILE*/
    @media (max-width: 779px) {
        h4 { font-size: 2.5rem; }
    }
`;

export const FormSection = styled.section `
    display: flex;
    justify-content: center;
    width: 100%;

    /*CHILDREN_ELEMENTS*/
    div {
        display: flex;
        flex-flow: column wrap;
        margin-bottom: .5rem;

        label {
            font: 1.6rem now-light, Helvetica, sans-serif;
            color: var(--green-color);
            margin: .8rem 0;
        }

        input, textarea {
            font: 1.4rem now-light, Helvetica, sans-serif;
            width: 30rem;
            border-radius: .3rem;
            padding: 1.5rem .5rem;
            outline: none;
        }

        input {
            color: #FFFFFF;
            border: none;
            height: 5vh;
            background: linear-gradient(to bottom, var(--blue-color) 50%, #FFFFFF 50%) top;
            background-size: 100% 300%;
            transition: .3s ease-out;

            /*SIBLINGS*/
            & + div {
                width: 100%;
                height: .1rem;
                background-color: #FFFFFF;
            }

            /*EFFECTS*/
            &:focus {
                color: #000000;
                background-position: bottom;
            }
        }

        textArea {
            resize: none;
            height: 19vh;
        }
    }

    /*MOBILE*/
    @media (max-width: 779px) {
        div > input, div > textarea { padding: 2rem 1rem };
        div > textarea { height: 25vh };
    }
`;

export const SendEmailButton = styled.button.attrs({ type: 'submit' }) `
    font: 2rem now-light, Helvetica, sans-serif;
    color: var(--green-color);
    background: none;
    outline: none;
    border: none;
    text-decoration: underline;
    margin-top: 2rem;
    width: 11vw;
    cursor: pointer;

    /*MOBILE*/
    @media (max-width: 779px) {
        font-size: 1.8rem;
        width: 30%;
        margin-bottom: 1.3rem;
    }

    /*TABLETS*/
    @media (min-width: 780px) and (max-width: 1015px) {
        font-size: 1.6rem;
        width: 100%;
        margin-bottom: 1.3rem;
    }
`;

export const FooterLinksSection = styled.section `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    width: 100%;

    /*MOBILE*/
    @media (max-width: 779px) { padding: 0 2.5rem; }
`;

export const PrivacyPolicyDiv = styled.div `
    a {
        font: 1.5rem now-light, Helvetica, sans-serif;
        text-decoration: none;
        color: var(--green-color);

        /*EFFECTS*/
        &:hover { text-decoration: underline; }
    }

    /*MOBILE*/
    @media (max-width: 779px) {
        a { font-size: 1.2rem; } 
    }
`;

export const SocialMediaDiv = styled(PrivacyPolicyDiv) `
    a {
        font-size: 2.5rem;
        margin: 0 .8rem;
    }

    /*MOBILE*/
    @media (max-width: 779px) {
        a {
            font-size: 1.8rem;
            margin: 0 1.2rem;
        } 
    }
`;