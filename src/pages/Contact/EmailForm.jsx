import { useState, useRef, useEffect } from 'react'

//COMPONENTS
import CARD_JSX from '../../components/Card'
import CTA_BUTTON_JSX from '../../components/CtaButton'

//STYLING
import { FormWrapper, FormSection } from './Styles'

const EMAIL_FORM_JSX = () => {
	const [inputValues, setInputValues] = useState({})
	const [message, setMessage] = useState(null)
	const [emailRef, messageRef, nameRef] = [useRef(null), useRef(null), useRef(null)]

	const emailRegex = /\w{2,}\@\w{2,}.com/

	const handleInputChange = e => {
		const { name, value } = e.target
		setInputValues(state => ({ ...state, [name]: value }))
	}

	const sendEmail = e => {
		e.preventDefault()
		e.stopPropagation()

		const { userName, userEmail, userMessage } = inputValues

		const TEMPLATE_PARAMS = {
			from_name: userName,
			message: userMessage,
			email: userEmail,
		}

		if (!userName) {
			setMessage('Nome, por favor!')
			nameRef.current.focus()

			return
		} else if (!emailRegex.test(userEmail) || !userEmail) {
			setMessage('E-mail, por favor!')
			emailRef.current.focus()

			return
		} else if (!userMessage) {
			setMessage('Texto, por favor!')
			messageRef.current.focus()

			return
		}

		emailjs.send('service_ivq1che', 'template_xd283ip', TEMPLATE_PARAMS, 'i7eLUpcHUWqqF7gMs').then(
			() => {
				setMessage('E-mail enviado com sucesso!')

				inputValues.userName = ''
				inputValues.userEmail = ''
				inputValues.userMessage = ''
			},
			//ERROR_MESSAGE
			() => setMessage('Não foi possível enviar o e-mail :(')
		)
	}

	useEffect(() => {
		setTimeout(() => setMessage(null), 6000)
	}, [message])

	return (
		<CARD_JSX title={message ?? 'Fale comigo!'}>
			<FormWrapper onSubmit={sendEmail}>
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
							onKeyUp={e => e.key === 'Enter' && emailRef.current.focus()}
							placeholder='Usuário 123'
						/>
						<div />
					</div>
				</FormSection>

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
							onKeyUp={e => e.key === 'Enter' && messageRef.current.focus()}
							placeholder='usuario123@gmail.com'
						/>
						<div />
					</div>
				</FormSection>

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
					<CTA_BUTTON_JSX action={sendEmail} btnWidth='100%' text='Enviar' color='4d4bcb' />
				</FormSection>
			</FormWrapper>
		</CARD_JSX>
	)
}

export default EMAIL_FORM_JSX
