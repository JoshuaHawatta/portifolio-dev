import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import {
    FooterWrapper,
    FormWrapper,
    FormSection,
    SendEmailButton,
    FooterLinksSection,
    PrivacyPolicyDiv,
    SocialMediaDiv
} from './Styles';

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailRegex from './regex';

const Footer = () => {
    const [inputValues, setInputValues] = useState({});
    const [message, setMessage] = useState('');
    const [emailRef, messageRef, nameRef] = [useRef(null), useRef(null), useRef(null)];

    const handleInputChange = e => {
        const { name, value } = e.target;
        setInputValues(state => ({ ...state, [name]: value }))
    }

    const sendEmail = e => {
        e.preventDefault();
        e.stopPropagation();

         if (!inputValues.userName) {
            setMessage('Preciso saber seu nome, uai!');
            nameRef.current.focus();

            return
        }
        else if (!emailRegex.test(inputValues.userEmail) || !inputValues.userEmail) {
            setMessage('Me fala o seu e-mail!');
            emailRef.current.focus();

            return
        }
        else if (!inputValues.userMessage) {
            setMessage('Não esquece da mensagem!');
            messageRef.current.focus();

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
                <h4>{ message || <>Me manda um E-mail!</> }</h4>

                {/*NAME_INPUT*/}
                <FormSection>
                    <div>
                        <label htmlFor='user-name'>Seu nome</label>
                        <input
                            type='text'
                            ref={ nameRef }
                            name='userName'
                            id='user-name'
                            autoComplete='off'
                            value={inputValues.userName || ''}
                            onChange={handleInputChange}
                            placeholder='ex: Marcos Andrade'
                        />
                        <div />
                    </div>
                </FormSection>

                {/*E-MAIL_INPUT*/}
                <FormSection>
                    <div>
                        <label htmlFor='user-email'>Seu e-mail</label>
                        <input
                            type='email'
                            ref={ emailRef }
                            autoComplete='off'
                            name='userEmail'
                            id='user-email'
                            value={inputValues.userEmail || ''}
                            onChange={handleInputChange}
                            placeholder='ex: marcosandrade@gmail.com'
                        />
                        <div />
                    </div>
                </FormSection>
                
                {/*MESSAGE_AREA*/}
                <FormSection>
                    <div>
                        <label htmlFor='user-message'>Mensagem</label>
                        <textarea
                            name='userMessage'
                            id='user-message'
                            autoComplete='off'
                            ref={ messageRef }
                            onKeyUp={ e => e.key === 'Enter' && sendEmail(e) }
                            value={ inputValues.userMessage || '' }
                            onChange={ handleInputChange }
                            placeholder='Olá, tenho um projeto que...'
                        />
                    </div>
                </FormSection>

                <FormSection>
                    <SendEmailButton onClick={ sendEmail }>Enviar Email</SendEmailButton>
                </FormSection>
            </FormWrapper>

            {/*LINKS_SECTION*/}
            <FooterLinksSection>
                <PrivacyPolicyDiv>
                    <Link to='privacy-policy'>Política de Privacidade</Link>
                </PrivacyPolicyDiv>

                <SocialMediaDiv>
                    <a href="https://www.instagram.com/joshuahawatta/" target='_blank'>
                        <FaInstagram />
                    </a>

                    <a href="https://github.com/JoshuaHawatta" target='_blank'>
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/joshua-hawatta/" target='_blank'>
                        <FaLinkedin />
                    </a>
                </SocialMediaDiv>
            </FooterLinksSection>
        </FooterWrapper>
    )
}

export default Footer