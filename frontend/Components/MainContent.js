import React from 'react'
import styled from 'styled-components'
import Snippet from './Snippet';
import TagsTab from './TagsTab';


function MainContent({ snippets, tags, size }) {
    console.log(snippets);
    return (
        <MainContentStyled>
            <div className="snippets-con">
                {/*<Snippet snippets={snippets} tags={tags} size={size} />*/}
                {
                    snippets.map((snippet, index) => {
                        return <Snippet key={snippet._id} snippet={snippet} tags={tags} size={size} />
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
    position: relative;
    display:grid ;
    grid-template-columns: 1fr 1fr;
    grid-column-gap:3rem ;
    width:100%; 
    .snippets-con{
        flex-grow: 1;
    }
    .tags-con{
        width: 100%;
        //margin-left: 3rem;
        //right: 3rem;
    }
`;

export default MainContent;
