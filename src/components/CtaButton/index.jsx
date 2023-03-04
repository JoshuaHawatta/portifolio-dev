import { CallToActionButton } from './Styles'

const CTA_BUTTON_JSX = ({ icon, text, action, btnWidth, outlined, color }) => (
	<CallToActionButton btnWidth={btnWidth} onClick={action} outlined={outlined} color={color}>
		{icon} {text}
	</CallToActionButton>
)

export default CTA_BUTTON_JSX
