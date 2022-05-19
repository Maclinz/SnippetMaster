import React from 'react'
import styled from 'styled-components'
import { getSnippetsAndTags, listUserSnippets } from '../actions/snippet';
import ActionButton from './ActionButton';
import Snippet from './Snippet';
import TagsTab from './TagsTab';

const down = <i className="fi fi-br-angle-down"></i>


function MainContent({ loading, snippets, tags, size, load, loadedSnippets }) {


    return (
        <MainContentStyled>
            <div className="snippets-con">
                {/*<Snippet snippets={snippets} tags={tags} size={size} />*/}
                {
                    snippets.map((snippet, index) => {
                        return loading ? <h1>Loading........</h1> : <Snippet key={snippet._id} snippet={snippet} tags={tags} size={size} />
                    })
                }
                {
                    //show loaded snippets here
                    loadedSnippets()
                }
                <div className="load-more">
                    <div className="l-btn" onClick={load}>
                        <ActionButton name={'Load More'} icon={down} />
                    </div>
                </div>
            </div>
            <div className="tags-con">
                <TagsTab />
            </div>
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
    display: flex;
    position: relative;
    
    .snippets-con{
        flex-grow: 1;
        width: 70%;
    }
    .tags-con{
        width: var(--tags-width);
        margin-left: 3rem;
        right: 3rem;
    }
`;

export default MainContent;
