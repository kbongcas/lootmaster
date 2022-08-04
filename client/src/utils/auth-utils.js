import axios from 'axios';

const AUTH_SIGNUP_ENDPOINT= '/api/users/signup'

const signUp = async (email, password ,onSuccess) =>{
    const response = await axios.post(AUTH_SIGNUP_ENDPOINT, {
        email, password
    })
    if (onSuccess) {
        onSuccess(response.data);
    }
    return response.data;
}

export default signUp;