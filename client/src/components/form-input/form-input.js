import styled from "styled-components";

const FormInput = ({ label, ...otherProps}) => {
    return (
        <FormInputContainer>
            <FormBlockLabel>{label}</FormBlockLabel>
            <FormBlock {...otherProps}/>
        </FormInputContainer>
    )
}

const FormInputContainer = styled.div`
`
const FormBlock = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 6px;
    border: 2px solid black;
    border-radius: 4px;
    &:focus {
        padding: 4px;
        border: 4px solid black
    }
`

const FormBlockLabel = styled.label`
`

export default FormInput;