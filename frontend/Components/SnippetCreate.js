import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import {withRouter} from 'next/router';
import {getCookie, isAuth} from '../actions/auth';
import {createSnippet} from '../actions/snippet';

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

    useEffect(() => {
        setValues({
            ...values,
            formData: new FormData()
        })
    }, [router]);

    const pusblishSnippet = async (e) => {
        e.preventDefault();
        createSnippet(formData, getCookie('token')).then(data => {
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
    }

    const handleChange = name => e => {
        const value = e.target.value;
        formData.set(name, value);
        setValues({
            ...values, [name]: value, formData, error: '', success: ''
        });
    }

    const handleCode = (e) => {
        setCode(e.target.value)
        formData.set('body', e.target.value);
        if(typeof window === 'undefined') {
            localStorage.setItem('body', JSON.stringify(e));
        }
        console.log(code);
    }

    const createForm = () => {
        return <form onSubmit={pusblishSnippet} className="create-snippet-form">
            <div className="input-control">
                <label htmlFor="">Title</label>
                <input type="text" value={title} onChange={handleChange('title')} />
            </div>
            <div className="input-control">
                <div className="code-body">
                    <pre>
                        <code>
                            <textarea name="" id="" cols="30" rows="10" value={code} onChange={handleCode}>
                            </textarea>
                        </code>
                    </pre>
                
                </div>
            </div>
            <div className="create-snippet-btn">
                    <button type='submit'>Create Snippet</button>
            </div>
        </form>
    }

    return (
        <SnippetCreateStyled>
            {createForm()}
            <hr />
            {JSON.stringify(code)}
        </SnippetCreateStyled>
    )
}

const SnippetCreateStyled = styled.div`

`;

export default withRouter(SnippetCreate);