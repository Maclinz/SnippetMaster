import fetch from 'isomorphic-fetch';

import { API } from '../config';
import queryString from 'query-string';

//Send a request to the server to register a new user

export const createSnippet = (snippet, token) => {
    return fetch(`${API}/snippet`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        //Change the body to JSON
        body: snippet
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const getSnippetsAndTags = () => {
    return fetch(`${API}/snippet-tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const listSearch = (params) => {
    console.log('Search Params:', params);

    let query = queryString.stringify(params);

    console.log('Query:', query);

    return fetch(`${API}/snippet/search?${query}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}



export const listUserBlogs = () => {
    return fetch(`${API}/snippet`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

