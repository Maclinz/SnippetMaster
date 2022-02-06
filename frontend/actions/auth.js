import fetch from 'isomorphic-fetch';

import {API} from '../config';

export const signUp = (user) => {
    return fetch(`${API}/signup`, {})
}