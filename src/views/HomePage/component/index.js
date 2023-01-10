import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { HomeAuthor, HomeContainerFluid, HomeInner, HomeWrapper, HomeWrapperAuthor, HomeWrapperImage } from './style';

const HomeContent = () => {
  const articleInfo = useSelector(state => state.article.articleState);
  const articleData = articleInfo?.data;

  return (<HomeContainerFluid className='container-fluid'>
    <HomeWrapper className='row'>
      {articleData?.map(item => <HomeInner className='col-sm-4' key={item._id}><Card>
        <HomeWrapperImage><Card.Img variant="top" src={item.images} style={{height: "210px"}}/></HomeWrapperImage>
        <Card.Body style={{height: "220px"}}>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.shortDescription}
          </Card.Text>
          <HomeWrapperAuthor>
            <Button variant="primary">See details</Button>
            <HomeAuthor>Author: Ty Tran</HomeAuthor>
          </HomeWrapperAuthor>
        </Card.Body>
      </Card></HomeInner>)}
    </HomeWrapper>
  </HomeContainerFluid>)
}

export default HomeContent