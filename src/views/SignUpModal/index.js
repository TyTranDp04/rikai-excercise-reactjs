import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import * as yup from "yup";
import { registerAction } from '../../stores/slices/user.slice';
import { InputSignUp, SignUpSubmit, TextRed } from '../SignInPage/component/style';

const schema = yup.object().shape({
  Name: yup.string()
    .required('Username is required'),
  Gmail: yup.string()
    .required('Please enter a valid email address'),
  Password: yup.string()
    .required('Password is required')
    .min(6, "Password min is 6."),
}).required();

const SignUpModal = (props) => {
  const userInfo = useSelector(state => state.users.userInfoState);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [error, setError] = useState(null);
  const [hideModal, setHideModal] = useState(false);
  const userInfoError = userInfo?.error;

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  useEffect(() => {
    if (!hideModal) {
      return
    } else {
      props.onHide()
      setTimeout(() => {
        setHideModal(false);
      })
    }
  }, [hideModal, props]);

  const handleSignUp = (data) => {
    if (!isValidEmail(data.Gmail)) {
      setError('Please enter a valid email address');
    } else {
      setError(null);
      dispatch(registerAction(data))
      setTimeout(() => {
        if (userInfoError) {
          setHideModal(true);
        } else {
          setHideModal(false);
          return;
        }
      })
    }
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <InputSignUp
              {...register("Name")}
              type="text"
              placeholder="Please enter your username"
              autoFocus
            />
            <TextRed>{errors.Name?.message}</TextRed>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <InputSignUp
              {...register("Gmail")}
              type="email"
              placeholder="name@example.com"
            />
            {error && <TextRed>{error}</TextRed>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Password</Form.Label>
            <InputSignUp
              {...register("Password")}
              type="password"
              placeholder="Please enter your password"
            />
            <TextRed>{errors.Password?.message}</TextRed>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <SignUpSubmit onClick={handleSubmit(handleSignUp)}>Sign Up</SignUpSubmit>
      </Modal.Footer>
      <ToastContainer
        style={{ display: "block", position: "fixed", zIndex: "99999" }}
        autoClose={1000}
      />
    </Modal>
  );
}

export default SignUpModal