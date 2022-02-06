import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import avatar1 from '../public/static/images/avatar1.png';
import ActionButton from './ActionButton';

const love = <i className="fi fi-rr-heart"></i>;



function Snippet() {
    return (
        <SnippetStyled>
            <div className="snippet-con">
                <div className="snippet-top">
                    <div className="profile">
                        <Image src={avatar1} alt="avatar" width="64" height="64" className='profile-img' />
                    </div>
                    <div className="language">
                        <p>Javascript</p>
                    </div>
                </div>
                <div className="snippet-mid">
                    <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Excepturi, odit officia. Neque sapiente amet quod 
                            deleniti 
                            quaerat iure labore facilis delectus 
                            ipsa officia expedita ad, 
                            voluptatem ut aut nemo praesentium eos molestias ullam. 
                            Voluptate dolore est, natus esse impedit optio.
                    </p>
                </div>
                <div className="snippet-bottom">
                    <div className="snippet-actions">
                        <div className="left-actions">
                            <ActionButton icon={love} name={'Likes'} />
                        </div>
                        <div className="right-actions"></div>
                    </div>
                </div>
            </div>
        </SnippetStyled>
    )
}

const SnippetStyled = styled.div`
    max-width: 985px;
    background-color: var(--color-white);
    box-shadow: var(--shadow-2);
    border-radius: var(--border-radius-md);
    .snippet-con{
        padding: 2rem;
        .snippet-top{
            .profile{
                position: relative;
                border-radius: 50% !important;
                .profile-img{
                    border-radius: 50% !important;
                }
            }
        }


        .snippet-bottom{
            .snippet-actions{

            }
        }
    }
    
`;

export default Snippet;
