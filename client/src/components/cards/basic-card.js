import { Fragment } from "react"
import styled from "styled-components"

const BasicCard = ({children}) => {
    return (
        <Fragment>
            <Card>
                <CardContents>
                    {children}
                </CardContents>
            </Card>
        </Fragment>
    )
}


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
export default BasicCard;