import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import avatar1 from '../public/static/images/avatar1.png';
import ActionButton from './ActionButton';
import TagButton from './TagButton';
import data from '../data/data';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Link from 'next/link';
import Head from 'next/head';
import { getSnippetsAndTags } from '../actions/snippet';
import { API } from '../config';
import { getLocalUser } from '../actions/auth';

const love = <i className="fi fi-rr-heart"></i>;
const copy = <i className="fi fi-rr-copy"></i>;
const more = <i className="fi fi-rr-interrogation"></i>




function SmallSnippet({ snippet, tags, size }) {


    const codeString = `${code}`;

    return (
        <SnippetStyled>
            <div className="snippet-con">
                <div className="snippet-top">
                    <div className="profile">
                        <Image src={avatar1} alt="avatar" width="64" height="64" className='profile-img' />
                        <div className="user-text">
                            <h3 className="s-title2">{username}</h3>
                            <p className="s-title">Programmer</p>
                        </div>
                    </div>
                    <h3 className="s-title3">{title}</h3>
                    {/*<div className="language">
                        <p>Javascript</p>
                    </div>*/}
                </div>
                <div className="snippet-mid">
                    <SyntaxHighlighter language='javascript' style={atomOneDark} showLineNumbers={'True'}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                <div className="snippet-bottom">
                    <div className="snippet-actions">
                        <div className="left-actions">
                            <ActionButton icon={love} name={'Likes'} likes={'2.5K'} />
                        </div>
                        <div className="right-actions">
                            <ActionButton icon={more} />
                            <ActionButton icon={copy} />
                        </div>
                    </div>
                    <div className="snippet-tags">
                        <h3>Tags</h3>
                        <div className="tags-btns-con snippet-tags-con">
                            <TagButton
                                name={'#reccursion'}
                                color={'var(--color-gradient-1)'}
                                bg={'var(--button-gradient-2)'}
                            />
                            <TagButton
                                name={'#binarysearchtree'}
                                color={'var(--text-gradient-8)'}
                                bg={'var(--button-gradient-10)'}
                            />
                            <TagButton
                                name={'#javascript'}
                                color={'var(--text-gradient-3)'}
                                bg={'var(--button-gradient-7)'}
                            />
                            <TagButton
                                name={'#algorithms'}
                                color={'var(--text-gradient-4)'}
                                bg={'var(--button-gradient-3)'}
                            />
                            <TagButton
                                name={'#tensorflow'}
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
    margin-bottom: 3rem; 
    min-width:200px ;
    .s-title3{
        margin-top: 2rem ;
    }
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 1650px) {
        max-width: 875px;
        transition: all 0.3s ease-in-out;
    }
    @media screen and (max-width: 1548px) {
        max-width: 800px;
        transition: all 0.3s ease-in-out;
    }
    .snippet-con{
        padding: 2rem;
        .snippet-top{
            .profile{
                position: relative;
                border-radius: 50% !important;
                display:flex ;
                align-items: center;
                .profile-img{
                    border-radius: 50% !important;
                }
                .user-text{
                    margin-left:1rem ;
                }
            }
        }

        .snippet-mid{
            margin-top: .5rem;
            margin-left:0 ;
            margin-right:0 ;
            margin-bottom: 2rem;
            pre{
                border-radius: var(--border-radius-md);
                max-height: 350px;
                code{
                    font-weight: 500;
                }
            }
        }


        .snippet-bottom{
            .snippet-actions{
                display: flex;
                justify-content: space-between;
                .right-actions{
                    display:flex;
                    .action-btn{
                        padding: 0.8rem 1rem;
                        &:last-child{
                            margin-left: .8rem;
                        }
                        span{
                            display: none;
                        }
                    }
                    
                }
            }

            .snippet-tags{
                margin-top: 2rem;
                .snippet-tags-con{
                    margin-top: .8rem;
                }
            }
        }
    }
    
`;

export default SmallSnippet;
