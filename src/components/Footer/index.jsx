import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import {
    FooterWrapper,
    FormWrapper,
    FormSection,
    SendEmailButton,
    FooterLinksSection,
    SocialMediaDiv,
    PrivacyPolicyDiv
} from './Styles';

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailRegex from './regex';

const Footer = () => {
    const [inputValues, setInputValues] = useState({});
    const [message, setMessage] = useState('');
    const [emailInputRef, messageInputRef] = [useRef(null), useRef(null)];

    const handleInputChange = e => {
        const { name, value } = e.target;
        setInputValues(state => ({ ...state, [name]: value }))
    }

    const sendEmail = e => {
        e.preventDefault();
        e.stopPropagation();

        if (!inputValues.userMessage) {
            setMessage('Digite a mensagem do e-mail!');
            messageInputRef.current.focus();

            return
        }
        else if (!emailRegex.test(inputValues.userEmail) || !inputValues.userEmail) {
            setMessage('Digite um e-mail válido! Ex: usuario@gmail.com ');
            emailInputRef.current.focus();

            return
        }
        
        setMessage('Email enviado com sucesso!')
    }

    useEffect(() => {
        setTimeout(() => setMessage(''), 6000)
    }, [message]);

    return (
        <FooterWrapper>
            <FormWrapper onSubmit={ sendEmail }>
                <span>{ message }</span>
                <FormSection>
                    <label htmlFor='user-email'>Digite seu email:</label>
                    <input
                        type='text'
                        ref={ emailInputRef }
                        name='userEmail'
                        id='user-email'
                        value={ inputValues.userEmail || '' }
                        onChange={handleInputChange }
                        placeholder='ex: usuario@gmail.com'
                    />
                </FormSection>

                <FormSection>
                    <label htmlFor='user-message'>Mensagem:</label>
                    <textarea
                        name='userMessage'
                        id='user-message'
                        ref={ messageInputRef }
                        onKeyUp={ e => e.key === 'Enter' && sendEmail(e) }
                        value={ inputValues.userMessage || '' }
                        onChange={ handleInputChange }
                        placeholder='Olá, tenho um projeto que...'
                    />
                </FormSection>

                <FormSection>
                    <SendEmailButton>Enviar Email</SendEmailButton>
                </FormSection>
            </FormWrapper>

            <FooterLinksSection>
                <PrivacyPolicyDiv>
                    <Link>Política de Privacidade</Link>
                </PrivacyPolicyDiv>
                
                <SocialMediaDiv> 
                    <a href="" ><FaInstagram /> </a>
                    <a href="" ><FaGithub /> </a>
                    <a href="" ><FaLinkedin /> </a>
                </SocialMediaDiv>
            </FooterLinksSection>
        </FooterWrapper>
    )
}

export default Footer