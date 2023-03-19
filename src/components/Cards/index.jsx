import CardWrapper from './Styles'

const CARD_JSX = ({ children, title }) => (
	<CardWrapper>
		<h4>{title}</h4>
		{children}
	</CardWrapper>
)

export default CARD_JSX
