import React from 'react'
import styled from 'styled-components'
import Snippet from './Snippet';
import TagsTab from './TagsTab';


function MainContent() {
    return (
        <MainContentStyled>
            <div className="snippets-con">
                <Snippet />
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
