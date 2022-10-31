import { StackWrapper } from './Styles';

const ICON_WITH_TEXT_JSX = ({ stackIcon, title, percentage }) => (
    <StackWrapper>
        { stackIcon }
        <h5>{ title } { percentage }%</h5>
    </StackWrapper>
)

export default ICON_WITH_TEXT_JSX