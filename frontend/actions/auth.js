import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';

import { API } from '../config';

//Send a request to the server to register a new user

export const signUp = (user) => {
    return fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        //Change the body to JSON
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

//sign out the user
export const signOut = (next) => {
    removeCookie('token');
    removeLocalStorage('user');
    next();

    //send a request to the server to sign out the user
    return fetch(`${API}/signout`, {
        method: 'GET',
    })
        .then(response => {
            console.log('You are now signed out');
        })
        .catch(err => console.log(err));
}

//Send a request to the server to login a user
export const signIn = (user) => {
    return fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        //Change the body to JSON
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

//set cookie
export const setCookie = (key, value) => {
    //check if process is browser
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        })
    }
}

//remove cookie
export const removeCookie = (key) => {
    //check if process is browser
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        })
    }
}

//get cookie
export const getCookie = (key) => {
    if (process.browser) {
        return cookie.get(key)
    }
}

//set to local storage
export const setLocalStorage = (key, value) => {
    //check if process is browser
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

//remove cookie from local storage
export const removeLocalStorage = (key) => {
    //check if process is browser
    if (process.browser) {
        localStorage.removeItem(key)
    }
}

//authenticate user by passing data to cookie and local storage
export const authenticate = (data, next) => {
    setCookie('token', data.token);
    setLocalStorage('user', data.user);
    next();
}

//get user data from local storage
export const getLocalUser = () => {
    if (process.browser) {

        //check if local stirage is empty on load return false
        if (!localStorage.getItem('user')) {
            return false;
        } else {
            return JSON.parse(localStorage.getItem('user'));
        }



    }
}

//check if user is authenticated
export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                //return true if user is authenticated
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        }
    }
}