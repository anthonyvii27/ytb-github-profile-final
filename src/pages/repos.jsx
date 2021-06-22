import React, { useContext } from 'react';

import Container from "../components/container";
import ReposContainer from "../components/reposContainer";

import { context } from '../context';

const Repos = () => {
    const ctx = useContext(context);

    return (
        <Container>
            <ReposContainer name="Anthony Vinicius" repos={ctx.userRepos} />
        </Container>
    );
}

export default Repos;