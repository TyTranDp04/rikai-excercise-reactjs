import React from 'react'
import { Helmet } from 'react-helmet'
import { HelmetProvider } from 'react-helmet-async'
import logo from '../../assets/images/rikai.ico'
import FNFContent from './Page404'


const FNFPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>404 </title>
          <link rel="icon" href={logo} />
        </Helmet>
      </HelmetProvider>
      <FNFContent />
    </>
  )
}

export default FNFPage