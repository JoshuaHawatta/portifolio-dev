import { StackWrapper } from './Styles';

const STACKS = ({ stackIcon, title, percentage }) => (
    <StackWrapper>
        { stackIcon }
        <h5>{ title } - { percentage }%</h5>
    </StackWrapper>
)

export default STACKS