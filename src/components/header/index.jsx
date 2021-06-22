import { FiSearch } from 'react-icons/fi';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

const Header = () => (
    <HeaderSection>
        <HeaderTitle>Github Profile</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput />
            
            <HeaderSearchButton>
                <FiSearch size={15} />
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>
);

export default Header;