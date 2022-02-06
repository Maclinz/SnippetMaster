import React from 'react'
import styled from 'styled-components'
import Snippet from './Snippet';


function MainContent() {
    return (
        <MainContentStyled>
            <div className="snippets-con">
                <Snippet />
            </div>
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`

`;

export default MainContent;
