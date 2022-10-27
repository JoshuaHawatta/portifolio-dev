import { CallToActionButton } from "./Styles"

const CTA_BUTTON = ({ icon, text, action }) => (
    <CallToActionButton onClick={ action }>{ icon } { text }</CallToActionButton>
)

export default CTA_BUTTON