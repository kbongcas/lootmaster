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
    position: relative;
    margin 0 0;
`
const FormBlock = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid black;
    border-radius: 4px;
    &:focus {
        border: 4px solid black
    }
`

const FormBlockLabel = styled.label`
`

export default FormInput;