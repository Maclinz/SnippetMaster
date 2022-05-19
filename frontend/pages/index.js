import React, { useState } from 'react'
import Private from '../Components/Auth/Private';
import Layout from '../Components/Layout';
import MainContent from '../Components/MainContent';
import { getSnippetsAndTags } from '../actions/snippet';
import { API } from '../config';
import Snippet from '../Components/Snippet';


const Index = ({ snippets, tags, totalSnippets, snippetsLimit, snippetsSkip }) => {
    const [loading, setLoading] = useState(false);
    const [skip, setSkip] = useState(snippetsSkip);
    const [limit, setLimit] = useState(snippetsLimit);
    const [size, setSize] = useState(totalSnippets);
    const [loadedSnippets, setLoadedSnippets] = useState([]);


    const loadMore = () => {
        let toSkip = snippetsSkip + snippetsLimit;
        getSnippetsAndTags(toSkip, snippetsLimit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setSkip(toSkip);
                setSize(data.size);
                setLoadedSnippets([...loadedSnippets, ...data.newSnippets]);
            }
        })
    }

    const showLoadedSnippets = () => {
        return loadedSnippets.map((snippet, i) => {
            return <Snippet key={snippet._id} snippet={snippet} />
        })
    }

    return (
        <div>
            <Layout>
                <Private>
                    <MainContent
                        setLoading={setLoading}
                        loading={loading} snippets={snippets}
                        tags={tags}
                        load={loadMore}
                        loadedSnippets={showLoadedSnippets}
                    />
                </Private>
            </Layout>
        </div>
    )
}

Index.getInitialProps = () => {
    const skip = 0;
    const limit = 3;

    return getSnippetsAndTags(skip, limit).then(data => {
        //check for error
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                snippets: data.newSnippets,
                tags: data.tags,
                totalSnippets: data.size,
                snippetsLimit: limit,
                snippetsSkip: skip,
            }
        }
    })
}



export default Index;
