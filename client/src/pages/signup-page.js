import { useContext, useState } from 'react';
import Button from '../components/button/button';
import FormInput from '../components/form-input/form-input';
import signUp from '../utils/auth-utils';
import styled from 'styled-components';
import { UserContext } from '../context/user-context';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
    email: '',
    password: ''
}


const SignupPage = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    const [ errors, setErrors ] = useState([]);
    const { setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onSuccessSignup = (responseData) => {
        setCurrentUser('KEVIN');
        navigate("/auth")
        console.log('auth rotuing...');
    }


    const handleChange = (event) => {
        const { name, value }  = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const onSubmit = async event => {
        event.preventDefault();
        setErrors({errors: []});
        try{
            console.log(email)
            console.log(password)
            await signUp(email, password, onSuccessSignup);
        }
        catch (err) {
            setErrors(err.response.data.errors);
        }
        setFormFields(defaultFormFields);
    }

   

    return (
        <div>
            <Card>
                <CardContents>
                    <Header>Sign Up</Header>
                    <form onSubmit={onSubmit}>
                        <FormInputContainer>
                            <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange}/>
                        </FormInputContainer>
                        <FormInputContainer>
                            <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange}/>
                        </FormInputContainer>
                        <ButtonContainer>
                            <Button type='submit'>Sign Up</Button>
                        </ButtonContainer>
                        <ErrorList>
                            {errors.length > 0 && (errors.map( err => <li key={err.message}>{err.message}</li>))}
                        </ErrorList>
                    </form>
                </CardContents>
            </Card>
        </div>
    )
}



const Header = styled.h1`
    letter-spacing: 2px;
    padding-bottom: 23px;
    padding-top: 13px;
    text-align: center;
`

const Card = styled.div`
    background: whitesmoke;
    border-radius: 8px;
    border: 3px solid black;
    height: 450px;
    margin: 6rem auto 8.1rem auto;
    width: 329px;

`
const CardContents = styled.div`
    padding: 12px 44px;
    //display: flex;
    //flex-direction: column;
    //justify-content: space-evenly;
    //background-color: peachpuff;

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

export default SignupPage;