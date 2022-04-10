import React from 'react'
import Layout from '../../Components/Layout';
import SnippetCreate from '../../Components/SnippetCreate';

const CreateSnippetIndex = () => {
    return (
        <div>
            <Layout>
                <h1>Create Snippet</h1>
                <SnippetCreate />
            </Layout>
        </div>
    )
}

export default CreateSnippetIndex;
