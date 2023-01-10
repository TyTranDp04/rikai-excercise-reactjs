import React from 'react';
import { Link } from 'react-router-dom';
import { Body, Btn, Container, Content, H1 } from './style';

const FNFContent = () => {
  return (
      <Container className='container-fluid'>
        <div style={{ padding: "10px" }} className='text-start'>
          <Link to="/">
            <Btn>Back To Home</Btn>
          </Link>
        </div>
        <Body>
          <div>
            <Content>404</Content>
            <H1>Page Not Found</H1>
          </div>
        </Body>
      </Container>
  )
}

export default FNFContent