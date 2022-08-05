import axios from 'axios';

const AUTH_SIGNUP_ENDPOINT= '/api/users/signup'
const AUTH_CURRENT_USER_ENDPOINT= '/api/users/currentuser'

const getCurrentUser = async (onSuccess) =>{
    const response = await axios.get(AUTH_CURRENT_USER_ENDPOINT);
    if (onSuccess) {
        onSuccess(response.data);
    }
    return response.data;
}


const attemptSignUp = async (email, password ,onSuccess) =>{
    const response = await axios.post(AUTH_SIGNUP_ENDPOINT, {
        email, password
    })
    if (onSuccess) {
        onSuccess(response.data);
    }
    return response.data;
}

export {attemptSignUp, getCurrentUser};