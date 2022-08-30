import React, {useState} from 'react'
import { useForm, ErrorMessage } from "react-hook-form";

import PopUp from "./PopUp"

import {
    StyledForm, 
    StyledInputControl, 
    StyledLabel, 
    StyledInput, 
    StyledHelperText, 
    StyledSubmitButton, 
    StyledTitle, 
    StyledLeftArrow, 
    StyledCenterContainer,
    StyledDownArrow,
    StyledRightArrow,
    StyledUpArrow,
    StyledContactBackground,
    StyledGlowingRow,
    StyledGlowingRowLeftFix,
    StyledGlowingRowTopRightFix,
    StyledGlowingRowTopRightFix2,
} from "../css"

const REGEX = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

const required = {
    value: true,
    message: "This is field is required",
}

const maxChars = (number) => {
    return  {
        value: number,
        message: `please keep characters under ${number}`,
    }
}

const minChars = (number) => {
    return  {
        value: number,
        message: `please keep characters over ${number}`,
    }
}

const Contact = () => {
    const [openPopUp, setPopUp] = useState(false)

    const { register, handleSubmit, errors } = useForm({
        validateCriteriaMode: "all",
      });
    
      const submit = async (data, e) => {
        e.preventDefault();
    
       const res = await fetch("https://formspree.io/f/mrgooybp", {
          mode: "cors",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .catch((err) => console.error(err));
    
          if(res.ok === true){
            setPopUp(true);
            e.target.reset();
          } 
      };
      
      const INPUTS = [
        {
            id: "firstName",
            name: "firstName",
            rules:  {
                required,
                maxLength: maxChars(15)
            },
            placeholder: "John",
            label: "First Name"
        },
        {
            id: "lastName",
            name: "lastName", 
            rules: {
                required,
                maxLength: maxChars(15)
            },
            placeholder: "Doe",
            label: "Last Name"
        },
        {
            id: "email",
            name: "email",
            rules: {
                required,
                maxLength: maxChars(40),
                pattern: {
                    value: REGEX.email, 
                    message: "This field needs to be an email"
                },
            },
            placeholder: "Johndoe@example.com",
            label: "Email"
        },
        {
            style: {height: "200px" },
            as: "textarea",
            id: "message",
            name: "message",
            rules: {
                required,
                maxLength: maxChars(2000),
                minLength: minChars(20)
            },
            placeholder: "Something you want to tell me.",
            label: "Message"
        }
    ]

    return (
        <>
            <StyledContactBackground>
                <StyledGlowingRow>
                    <StyledGlowingRowLeftFix/>
                    <StyledGlowingRowTopRightFix />
                    <StyledGlowingRowTopRightFix2/>


                    <StyledLeftArrow speed='1s' color="blue" style={{top: '15px'}}/>
                    <StyledLeftArrow speed='1.5s' color="blue" style={{top: '18px'}}/>
                    <StyledLeftArrow speed='1.8s' color="blue" style={{top: '20px'}}/>
                </StyledGlowingRow>

                <StyledCenterContainer>
                    <StyledTitle>
                        Get in touch
                        <StyledLeftArrow color="blue"  speed='2s'/>
                    </StyledTitle>
                </StyledCenterContainer>
                
                <StyledCenterContainer>
                    <StyledForm onSubmit={handleSubmit(submit)}>
                        {
                            INPUTS.map((props) => (
                                <StyledInputControl key={props.id}>
                                    <StyledLabel>
                                        {props.label}
                                        <StyledInput
                                        ref={register(props.rules)}
                                        {...props}
                                        />
                                    </StyledLabel>
                                    <ErrorMessage errors={errors} name={props.name}>
                                        {({ messages }) =>
                                        messages &&
                                        Object.entries(messages).map(([type, message]) => (
                                            <StyledHelperText key={type}>
                                            {message}
                                            </StyledHelperText>
                                        ))
                                        }
                                    </ErrorMessage>
                                </StyledInputControl>
                                ))
                            }
                        <StyledSubmitButton type="submit">
                            <StyledUpArrow  speed="2s" color="blue" />
                            <StyledRightArrow speed="2s"  color="blue"/>
                            <StyledDownArrow speed="2s" color="blue"/>
                            <StyledLeftArrow  speed="2s"  color="blue"/>     
                            Submit
                        </StyledSubmitButton>
                    </StyledForm>
                </StyledCenterContainer>
            </StyledContactBackground>
            {openPopUp ? <PopUp close={() => setPopUp(false)} /> : null}
        </>
    )
}

export default Contact