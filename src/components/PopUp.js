import React from "react"
import { createPortal } from "react-dom"
import { 
    StyledCardText, 
    StyledCard, 
    StyledCenterContainer, 
    StyledButton, 
    StyledModalBackground 
} from "../css"

const PopUp = (props) => {
   return createPortal(
        <>
            <StyledModalBackground>
                <StyledCenterContainer>
                    <StyledCard>
                        <StyledCenterContainer style={{marginBottom: '20px'}} direction="column">
                            <StyledCardText>Your message has been sent!</StyledCardText>
                            <StyledButton sm onClick={props.close}>Close</StyledButton> 
                        </StyledCenterContainer>
                    </StyledCard>
                </StyledCenterContainer>
            </StyledModalBackground>
        </>, document.getElementById("popUp")
    )
}

export default PopUp