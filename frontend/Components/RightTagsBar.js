import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

function RightTagsBar() {
    return (
        <RightTagsBarStyled>
            <ul className="tags">
                <li className="tag">
                    <Link href="/admin/crud/tag">
                        <a>Create Tag</a>
                    </Link>
                </li>
            </ul>
        </RightTagsBarStyled>
    )
}


const  RightTagsBarStyled = styled.div`

`;

export default RightTagsBar;