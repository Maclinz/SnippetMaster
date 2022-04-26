import React from 'react'
import styled from 'styled-components';
import Layout from '../../Components/Layout';
import SnippetCreate from '../../Components/SnippetCreate';

const CreateSnippetIndex = () => {
    return (
        <CreateSnippetStyled>
            <Layout>
                <SnippetCreate />
            </Layout>
        </CreateSnippetStyled>
    )
}

const CreateSnippetStyled = styled.div`
    overflow: hidden; 
`;

export default CreateSnippetIndex;
