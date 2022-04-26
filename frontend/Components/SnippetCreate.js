import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import {withRouter} from 'next/router';
import {getCookie, isAuth} from '../actions/auth';
import {createSnippet} from '../actions/snippet';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import ActionButton from './ActionButton';


const doc = <i className="fi fi-rr-add"></i>
const close = <i className="fi fi-rr-cross"></i>


function SnippetCreate({router}) {
    const [code, setCode] = useState('')
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        title: '',
        hidePostButton: false
    })

    const {error, sizeError, success, formData, title, hidePostButton} = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({
            ...values,
            formData: new FormData()
        })
    }, [router]);

    const pusblishSnippet = async (e) => {
        e.preventDefault();
        createSnippet(formData, token).then(data => {
            if(!data) {
                setValues({...values, error: 'Error while creating snippet'})
            } else {
                setValues({
                    ...values,
                    title: '',
                    error: '',
                    success: `Snippet Create Successfully`
                })
                setCode('')
            }
        })

        //if code is too short
        if(code.length < 100) {
            console.log('At least 100 characters are required!');
        }
    }

    const handleChange = name => e => {
        const value = e.target.value;
        if(!value) {
            console.log('There is no value');
        }
        formData.set(name, value);
        setValues({
            ...values, [name]: value, formData, error: '', success: ''
        });
    }

    const handleCode = (e) => {
        setCode(e.target.value)
        formData.set('code', e.target.value);
        if(typeof window === 'undefined') {
            localStorage.setItem('code', JSON.stringify(e));
        }
    }

    const closeModal = () => {
        Router.push('/');
    }
    

    const createForm = () => {
        return <form onSubmit={pusblishSnippet} className="create-snippet-form">
            <div className="input-control">
                <label className='gradient-text-1' htmlFor="">Title</label>
                <input type="text" value={title} placeholder={'Name your Snippet...'} onChange={handleChange('title')} required />
            </div>
            <div className="input-control">
                <div className="code-body">
                    <pre>
                        <code>
                            <textarea name="" id="" placeholder='Add Code Here...' cols="30" rows="15" value={code} onChange={handleCode} required>
                            </textarea>
                        </code>
                    </pre>
                
                </div>
            </div>
            <h2>Add Tags</h2>
            <div className="create-snippet-btn">
                <ActionButton icon={doc} name={'Create Snippet'} />
            </div>

            <div className="close-btn" onClick={closeModal}>
                {/*<ActionButton icon={close}/>*/}
            </div>
        </form>
    }

    return (
        <SnippetCreateStyled>
            <div className="overlay" onClick={closeModal}></div>
            {createForm()}
        </SnippetCreateStyled>
    )
}

const SnippetCreateStyled = styled.div`
    width: 100%; 
    height: 100%;
    background-color:var(--color-background-2);
    position: fixed;
    top:0;
    left:0;
    z-index: 100 ;
    overflow: hidden; 
    display: flex; 
    justify-content: center;
    align-items: center;
    overflow: hidden; 
    .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        position: fixed;
    }
    form{
        max-width:var(--max-width);
        border-radius: var(--border-radius-md);
        background-color: var(--color-white);
        padding:2rem ;
        width: var(--max-width);
        box-shadow: var(--shadow-2);
        margin: 2rem 3rem;
        position: relative;
        pointer-events: all;
        .close-btn{
            position: absolute;
            top: 0;
            right: 0;
            display: flex; 
            justify-content: center;
            align-items: center;
            div{
                border-top-left-radius:0 ;
                border-bottom-right-radius:0 ;
            }
            p{
                span{
                    display:none ;
                }
            }
        }
        input, textarea{
            width: 100%;
            outline: none;
            border: none;
            font-family:inherit ;
            font-size:inherit ;
            
        }
        label{
            font-size: var(--font-size-2);
            font-weight:600 ;
        }
        input{
            margin:.4rem 0 ;
            background-color:var(--snippet-bg) ;
            border-radius: var(--border-radius-sm);
            padding: .6rem 1rem;
            color: white ;
            font-weight: bold;
        }
        textarea{
            background-color:var(--snippet-bg) ;
            border-radius: var(--border-radius-sm);
            color: white ;
            padding: .6rem 1rem;
            resize: none;
            overflow: auto;
            &::-webkit-scrollbar {
                width: 8px;
                height: 8px;
                border-top-right-radius: var(--border-radius-sm);
                border-bottom-right-radius: var(--border-radius-sm);
            }

            &::-webkit-scrollbar-track {
                background: #282c34;
            }

            &::-webkit-scrollbar-thumb {
                background: var(--color-gradient-1);
                border-radius: var(--border-radius-md);
            }

            &::-webkit-scrollbar-thumb:hover {
                background: var(--color-gradient-2);
            }
        }
    }
`;

export default withRouter(SnippetCreate);