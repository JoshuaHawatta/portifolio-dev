import {
    FormWrapper,
    FooterWrapper,
    FormSection,
    SendEmailButton
} from '../../components/Footer/Styles';

const ContactPage = () => {
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

        const { userName, userEmail, userMessage } = inputValues;

        const TEMPLATE_PARAMS = {
            from_name: userName,
            message: userMessage,
            email: userEmail,
        };

        if (!userName) {
            setMessage('Preciso saber seu nome, uai!');
            nameRef.current.focus();

            return
        }
        else if (!emailRegex.test(userEmail) || !userEmail) {
            setMessage('Me fala o seu e-mail!');
            emailRef.current.focus();

            return
        }
        else if (!userMessage) {
            setMessage('Não esquece da mensagem!');
            messageRef.current.focus();

            return
        }

        emailjs.send(
            'service_ivq1che',
            'template_xd283ip',
            TEMPLATE_PARAMS,
            'i7eLUpcHUWqqF7gMs'
        ).then(_ => {
                setMessage('E-mail enviado com sucesso!');

                inputValues.userName = '';
                inputValues.userEmail = '';
                inputValues.userMessage = ''
            }, () => setMessage('Não foi possível enviar o e-mail :('))
            ;
    }

    useEffect(() => {
        setTimeout(() => setMessage(''), 6000)
    }, [message]);

    return (
        <FooterWrapper>
            <FormWrapper onSubmit={ sendEmail }>
                <h4>{ message || 'Me manda um E-mail!' }</h4>

                {/*NAME_INPUT*/}
                <FormSection>
                    <div>
                        <label htmlFor='user-name'>Seu nome</label>
                        <input
                            type='text'
                            ref={nameRef}
                            name='userName'
                            id='user-name'
                            autoComplete='off'
                            value={inputValues.userName || ''}
                            onChange={handleInputChange}
                            placeholder='Usuário 123'
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
                            ref={emailRef}
                            name='userEmail'
                            id='user-email'
                            autoComplete='off'
                            value={inputValues.userEmail || ''}
                            onChange={handleInputChange}
                            placeholder='usuario123@gmail.com'
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
                            ref={messageRef}
                            onKeyUp={e => e.key === 'Enter' && sendEmail(e)}
                            value={inputValues.userMessage || ''}
                            onChange={handleInputChange}
                            placeholder='Olá, tenho um projeto que...'
                        />
                    </div>
                </FormSection>

                <FormSection>
                    <SendEmailButton onClick={sendEmail}>Enviar Email</SendEmailButton>
                </FormSection>
            </FormWrapper>
        </FooterWrapper>
    )
}