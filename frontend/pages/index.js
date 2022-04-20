import React from 'react'
import Private from '../Components/Auth/Private';
import Layout from '../Components/Layout';
import MainContent from '../Components/MainContent';
import {getSnippetsAndTags} from '../actions/snippet';
import {API} from '../config';

const Index = ({snippets, tags, size}) => {
    
    return (
        <div>
            <Layout>
                <MainContent snippets={snippets} tags={tags} size={size} />
            </Layout>
        </div>
    )
}

Index.getInitialProps = () => {
    return getSnippetsAndTags().then(data => {
        //check for error
        if(data.error) {
            console.log(data.error);
        }else{
            return {
                snippets: data.newSnippets, 
                tags: data.tags, 
                size: data.size
            }
        }
    })
}



export default Index;
