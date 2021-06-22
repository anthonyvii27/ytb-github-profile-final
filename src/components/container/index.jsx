import { Container } from './styles';

const MainContainer = props => (
    <Container>
        {props.children}
    </Container>
);

export default MainContainer;