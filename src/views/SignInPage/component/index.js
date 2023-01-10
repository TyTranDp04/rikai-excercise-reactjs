import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import * as yup from "yup"
import logo from '../../../assets/images/rikai.ico'
import { loginAction } from '../../../stores/slices/user.slice'
import SignUpModal from '../../SignUpModal'
import { Button, ButtonSignUp, Container, ForgotPass, ForgotPassH4, Form, FormHeader, H2, Input, LoginTitle, Section, StImg, StImgDiv, TextBlack, TextRed } from "./style.js"

const schema = yup.object().shape({
  Gmail: yup.string()
    .required('Please enter a valid email address'),
  Password: yup.string()
    .required('Please enter a valid password'),
}).required();

const SignInContent = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignIn = (data) => {
    dispatch(loginAction(data));
  };
  const handleSignUpModal = () => {
    setModalShow(true)
  }
  
  return (
    <Section className="container-fluid">
      <Container className="container">
        <Form className="col-lg-6">
          <FormHeader>
            <StImgDiv><StImg src={logo} /></StImgDiv>
            <LoginTitle><H2>Rikai Articles</H2></LoginTitle>
          </FormHeader>
          <label>Email</label>
          <Input
            {...register("Gmail")}
            type="email"
            placeholder="Enter your email address"
          />
          <TextRed>{errors.Gmail?.message}</TextRed>
          <br />
          <label>Password</label>
          <Input
            {...register("Password")}
            type="password"
            placeholder="Enter your password"
          />
          <TextRed>{errors.Password?.message}</TextRed>
          <ForgotPass><ForgotPassH4></ForgotPassH4></ForgotPass>
          <Button type="submit" onClick={handleSubmit(handleSignIn)}>Submit</Button>
          <TextBlack></TextBlack>
          <ButtonSignUp onClick={handleSubmit(handleSignUpModal)}>Create New Account</ButtonSignUp>
          <SignUpModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <ToastContainer
            style={{ display: "block", position: "fixed", zIndex: "99999" }}
            autoClose={1000}
          />
        </Form>
      </Container>
    </Section>
  );
};
export default SignInContent;