import { useState } from 'react';
import Button from '../components/button/button';
import FormInput from '../components/form-input/form-input';
import styled from 'styled-components';
import SignupPage from './signup-page';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInPage = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, confirmPassword } = formFields;

    console.log(formFields);

    const handleChange = (event) => {
        const { name, value }  = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div>
            <Card>
                <CardContents>
                    <Header>Sign In</Header>
                    <form onSubmit={() => {}}>
                        <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange}/>
                        <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange}/>
                        <ButtonContainer>
                            <Button type='submit'>Sign In</Button>
                        </ButtonContainer>
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
    margin: 0 auto 0 auto;
    width: 329px;
    padding: 0px 0px 70px 0px;

`
const CardContents = styled.div`
    padding: 12px 44px;
`

const ButtonContainer = styled.div`
    padding: 24px 24px;
`

export default SignInPage;