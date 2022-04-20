import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import avatar1 from '../public/static/images/avatar1.png';
import ActionButton from './ActionButton';
import TagButton from './TagButton';
import data from '../data/data';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Link from 'next/link';
import Head from 'next/head';
import {getSnippetsAndTags} from '../actions/snippet';
import {API} from '../config';

const love = <i className="fi fi-rr-heart"></i>;
const copy = <i className="fi fi-rr-copy"></i>;
const more = <i className="fi fi-rr-interrogation"></i>




function Snippet({snippet, tags, size}) {
    
    //destructure the snippet
    const {_id, title, description, code} = snippet;
    console.log(code);
    const codeString = `${code}`;

    return (
        <SnippetStyled>
            <div className="snippet-con">
                <div className="snippet-top">
                    <div className="profile">
                        <Image src={avatar1} alt="avatar" width="64" height="64" className='profile-img' />
                        <h3 className="s-title">{title}</h3>
                    </div>
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

        .snippet-mid{
            margin: 2rem 0;
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

export default Snippet;
