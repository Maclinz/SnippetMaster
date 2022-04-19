import React from 'react'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import {isAuth, getCookie} from '../../actions/auth';
import {create} from '../../actions/tags';

function Tags() {
    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        tags: [],
        removed: false,
    });

    const {name, error, success, tags, removed} = values;
    const token = getCookie('token');

    const newTagForm = () => {
        return (
            <form >
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input type="text" className="form-control" onChange={handleChange} value={name} autoFocus/>
                </div>
                <div>
                    <button className="btn btn-primary">Create</button>
                </div>
            </form>
        )
    }

    return (
        <div>
            
        </div>
    )
}

export default Tags;