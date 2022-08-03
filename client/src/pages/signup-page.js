import { useState } from 'react';
import Button from '../components/button/button';
import FormInput from '../components/form-input/form-input';
import styled from 'styled-components';

const defaultFormFields = {
    email: '',
    password: '',
    confirmPassword: ''
}

const SignupPage = () => {

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
                    <Header>Sign Up</Header>
                    <form onSubmit={() => {}}>
                        <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange}/>
                        <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange}/>
                        <FormInput label="Confirm Password" type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange}/>
                        <ButtonContainer>
                            <Button type='submit'>Sign Up</Button>
                        </ButtonContainer>
                    </form>
                </CardContents>
            </Card>
        </div>
    )
}

const Header = styled.h1`
    letter-spacing: 4px;
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
`

const ButtonContainer = styled.div`
    padding: 12px 44px;
    align: center
`

export default SignupPage;