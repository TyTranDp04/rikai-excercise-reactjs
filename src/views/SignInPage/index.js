import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { HelmetProvider } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SignInContent from './component'
import logo from '../../assets/images/rikai.ico'

const SignInPage = () => {
  const userInfo = useSelector(state => state.users.userInfoState);
  const user = userInfo?.data?.Gmail;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/signin');
    } else {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Rikai - log in or sign up</title>
          <link rel="icon" href={logo} />
        </Helmet>
      </HelmetProvider>

      <SignInContent/>
    </>
  )
}

export default SignInPage