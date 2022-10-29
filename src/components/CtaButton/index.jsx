import { CallToActionButton } from "./Styles"

const CTA_BUTTON_JSX = ({ icon, text, action, btnWidth, outLined }) => (
    <CallToActionButton
        btnWidth={ btnWidth }
        onClick={ action }
        outLined={ outLined }
    >
        { icon } { text }
    </CallToActionButton>
)

export default CTA_BUTTON_JSX