import React from 'react'
import styled from 'styled-components'
import Snippet from './Snippet';
import TagsTab from './TagsTab';


function MainContent({ snippets, tags, size, loading, setLoading }) {
    return (
        <MainContentStyled>
            <div className="snippets-con">
                {/*<Snippet snippets={snippets} tags={tags} size={size} />*/}
                {
                    snippets.map((snippet, index) => {
                        return loading ? <h1>Loading........</h1> : <Snippet key={snippet._id} snippet={snippet} tags={tags} size={size} />
                    })
                }
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
    }
    .tags-con{
        width: var(--tags-width);
        margin-left: 3rem;
        right: 3rem;
    }
`;

export default MainContent;
