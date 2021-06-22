import { useState, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

import client from '../../services/client';

import { context } from '../../context';

const Header = () => {
    const ctx = useContext(context);
    const [searchValue, setSearchValue] = useState('');

    async function getUserData() {
        try {
            const response = await client.get(`/${searchValue}`);
            const repos = await client.get(`/${searchValue}/repos`);
            
            ctx.setUserData(response.data);
            ctx.setUserRepos(repos.data);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
        
                <HeaderSearchButton onClick={getUserData}>
                    <FiSearch size={15} />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    );
}

export default Header;