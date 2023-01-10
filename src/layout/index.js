import React, { useEffect } from 'react'
import logo from '../assets/images/rikai.ico'
import { ContainerFluid } from '../assets/css/common'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRoleAction } from '../stores/slices/role.slice'
import { getArticleAction } from '../stores/slices/article.slice'

const Layout = ({ children, title }) => {
  const userInfo = useSelector(state => state.users.userInfoState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = userInfo?.data?.Gmail;
  const userID = userInfo?.data?.id;

  useEffect(() => {
    if (!userID) {
      return;
    } else {
      dispatch(getRoleAction(userID))
    }
  }, [userID, dispatch]);

  useEffect(() => {
    dispatch(getArticleAction())
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user, navigate]);

  return (
    <ContainerFluid className="container-fluid">
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <link rel="icon" href={logo} />
        </Helmet>
      </HelmetProvider>
      <Header />
      {children}
      <Footer />
    </ContainerFluid>
  )
}

export default Layout