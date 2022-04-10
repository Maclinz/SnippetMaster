import React from 'react';
import styled from 'styled-components';
import TagButton from './TagButton';


function TagsTab() {
  return (
    <TagsTabStyled>
        <div className="tags-content">
            <h2 className="md-heading">Related Tags</h2>
            <div className="tags-btns-con">
                <TagButton 
                    name={'#crypto'} 
                    color={'var(--color-gradient-1)'}
                    bg={'var(--button-gradient-2)'}
                />
                <TagButton 
                    name={'#next.js'} 
                    color={'var(--text-gradient-8)'}
                    bg={'var(--button-gradient-10)'}
                />
                <TagButton 
                    name={'#javascript'}
                    color={'var(--text-gradient-3)'}
                    bg={'var(--button-gradient-7)'}
                />
                <TagButton 
                    name={'#c++'}
                    color={'var(--text-gradient-4)'}
                    bg={'var(--button-gradient-3)'}
                />
                <TagButton 
                    name={'#php'}
                    color={'var(--text-gradient-5)'}
                    bg={'var(--button-gradient-5)'}
                />
                <TagButton 
                    name={'#maclinz'}
                    color={'var(--text-gradient-6)'}
                    bg={'var(--button-gradient-6)'}
                />
                <TagButton 
                    name={'#binary-tree'}
                    color={'var(--text-gradient-7)'}
                    bg={'var(--button-gradient-8)'}
                />
            </div>
        </div>
    </TagsTabStyled>
  )
}

const TagsTabStyled = styled.div`
    background-color: var(--color-white);
    box-shadow: var(--shadow-2);
    min-height: 700px;
    border-radius: var(--border-radius-md);
    .tags-content{
        padding: 2rem 1rem;
        .tags-btns-con{
            padding-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            
        }
    }
`;

export default TagsTab;