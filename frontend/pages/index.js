import React, { useState } from 'react'
import Private from '../Components/Auth/Private';
import Layout from '../Components/Layout';
import MainContent from '../Components/MainContent';
import { getSnippetsAndTags } from '../actions/snippet';
import { API } from '../config';

const Index = ({ snippets, tags, size, }) => {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Layout>
                <Private>
                    <MainContent setLoading={setLoading} loading={loading} snippets={snippets} tags={tags} size={size} />
                </Private>
            </Layout>
        </div>
    )
}

Index.getInitialProps = () => {
    return getSnippetsAndTags().then(data => {
        //check for error
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                snippets: data.newSnippets,
                tags: data.tags,
                size: data.size,
            }
        }
    })
}



export default Index;
