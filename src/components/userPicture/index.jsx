import {
    Container,
    ProfilePicture
} from './styles';

const UserPicture = props => (
    <Container>
        <ProfilePicture src={props.url} alt="anthonyvii27" />
    </Container>
);

export default UserPicture;