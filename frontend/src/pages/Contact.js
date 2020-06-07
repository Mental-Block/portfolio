import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";

//css
import styled, { ThemeProvider } from "styled-components";
import { mainTheme } from "../components/css/Theme";
import { StyledBackground } from "../components/css/Background";
import { StyledLinkButton } from "../components/css/Link";
import {
  StyledPageWrapper,
  StyledCenterContainer,
} from "../components/css/Layout";

export const Contact = () => {
  const { register, handleSubmit, errors } = useForm({
    validateCriteriaMode: "all",
  });

  const submit = async (data, e) => {
    e.target.reset();
    await fetch(window.location.href, {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <StyledPageWrapper>
          <StyledBackground>
            <StyledCenterContainer>
              <StyledForm onSubmit={handleSubmit(submit)}>
                <StyledInputControl>
                  <StyledLabel>
                    First Name
                    <StyledInput
                      ref={register({
                        required: {
                          value: true,
                          message: "This is field is required",
                        },
                        maxLength: {
                          value: 15,
                          message: "please keep characters under 15",
                        },
                      })}
                      name="firstName"
                      id="firstName"
                      placeHolder="First Name"
                    />
                  </StyledLabel>
                  <ErrorMessage errors={errors} name="firstName">
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

                <StyledInputControl>
                  <StyledLabel>
                    Last Name
                    <StyledInput
                      ref={register({
                        required: {
                          value: true,
                          message: "This is field is required",
                        },
                        maxLength: {
                          value: 15,
                          message: "please keep characters under 15",
                        },
                      })}
                      name="lastName"
                      id="lastName"
                      placeHolder="Last Name"
                    />
                  </StyledLabel>
                  <ErrorMessage errors={errors} name="lastName">
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

                <StyledInputControl>
                  <StyledLabel>
                    Email
                    <StyledInput
                      ref={register({
                        required: {
                          value: true,
                          message: "This is field is required",
                        },
                        maxLength: {
                          value: 40,
                          message: "please keep characters under 40",
                        },
                        pattern: {
                          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "please use a valid email address",
                        },
                      })}
                      name="email"
                      id="email"
                      placeHolder="Email"
                    />
                  </StyledLabel>
                  <ErrorMessage errors={errors} name="email">
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

                <StyledInputControl>
                  <StyledLabel>
                    Message
                    <StyledInput
                      style={{ height: "200px" }}
                      as="textarea"
                      ref={register({
                        required: {
                          value: true,
                          message: "This is field is required",
                        },
                        maxLength: {
                          value: 2000,
                          message: "please keep characters under 2000",
                        },
                        minLength: {
                          value: 20,
                          message: "please keep message over 20 characters",
                        },
                      })}
                      name="message"
                      id="message"
                      placeHolder="Message"
                    />
                  </StyledLabel>
                  <ErrorMessage errors={errors} name="message">
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

                <StyledLinkButton
                  button="true"
                  title="Submit"
                  value="submit"
                  type="submit"
                ></StyledLinkButton>
              </StyledForm>
            </StyledCenterContainer>
          </StyledBackground>
        </StyledPageWrapper>
      </ThemeProvider>
    </>
  );
};

const StyledForm = styled.form`
  box-shadow: 0px 0px 2px ${(props) => props.theme.primaryC},
    0px 0px 5px ${(props) => props.theme.primaryC},
    0px 0px 10px ${(props) => props.theme.primaryC},
    0px 0px 30px ${(props) => props.theme.primaryC};
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  max-width: 100%;
  padding: 3rem;
`;

const StyledLabel = styled.label`
  font-size: 1.2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-family: ${(props) => props.theme.primaryF};
  color: ${(props) => props.theme.primaryC};
  width: inherit;
`;

const StyledInputControl = styled.div`
  width: 320px;
  padding: 0.75rem 0;
`;

const StyledInput = styled.input`
  margin-top: 0.4rem;
  font-size: 1.2rem;
  padding: 0.25rem 0;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.thirdC};
  font-family: ${(props) => props.theme.secondaryF};
  color: #000000;
  resize: none;
  text-indent: 0.5rem;
`;

const StyledHelperText = styled.p`
  font-family: ${(props) => props.theme.primaryF};
  color: #ff0000;
  font-size: 0.8rem;
`;
