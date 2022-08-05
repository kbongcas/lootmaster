import { useState } from 'react';
import Button from '../components/button/button';
import FormInput from '../components/form-input/form-input';
import styled from 'styled-components';
import BasicCard from '../components/cards/basic-card';
//import { useNavigate } from 'react-router-dom';
//import { UserContext } from '../context/user-context';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInPage = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const [ errors ] = useState([]);
    //const { setCurrentUser } = useContext(UserContext);
    //const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value }  = event.target;
        setFormFields({ ...formFields, [name]: value });
    }


    // @TODO: Implement
    //const onSuccessSignIn = (responseData) => {
    //    setErrors([]);
    //    const { email } = responseData;
    //    setCurrentUser(email);
    //    navigate("/auth")
    //    console.log('auth rotuing...');
    //}

    const onSubmit = async event => {
        //@TODO: Implement
        // asdf
    }

    return (
        <div>
            <BasicCard>
                <Header>Sign In</Header>
                <form onSubmit={onSubmit}>
                    <FormInputContainer>
                        <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange} />
                    </FormInputContainer>
                    <FormInputContainer>
                        <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange} />
                    </FormInputContainer>
                    <ButtonContainer>
                        <Button type='submit'>Sign In</Button>
                    </ButtonContainer>
                    <ErrorList>
                        {errors.length > 0 && (errors.map(err => <li key={err.message}>{err.message}</li>))}
                    </ErrorList>
                </form>
            </BasicCard>
        </div>
    )
}

const Header = styled.h1`
    letter-spacing: 2px;
    padding-bottom: 23px;
    padding-top: 13px;
    text-align: center;
`
const FormInputContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 8px;
`

const ErrorList = styled.ul`
    list-style-type: none;
    text-align: center;
    .li{
        text-align: center;
    }
`

const ButtonContainer = styled.div`

    padding: 24px 24px;
`



export default SignInPage;