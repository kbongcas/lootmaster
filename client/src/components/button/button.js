import styled from "styled-components";

const Button = ({ children, buttonType, ...otherProps }) => {
    return <ButtonStyled buttonType={buttonType} >{children}</ButtonStyled>;
}


const ButtonStyled = styled.button`
  min-width: 165px;
  width: 100%;
  height: 100%;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: white;
  color: black;
  font-weight: bolder;
  border: 3px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 7px;

  &:hover {
    background-color: gray;
    border: 4px solid black;
  }

  ${ props => {
    if(props.buttonType === "inverted")
    {
        return `
            background-color: black;
            color: white;
        `
    }
  }}

`


export default Button;