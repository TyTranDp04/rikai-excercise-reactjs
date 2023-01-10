import { faMarker, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { URL_API } from '../../../api/const.api';
import { getArticleAction } from '../../../stores/slices/article.slice';
import AddArticleModal from './AddArticleModal';
import { AdminAddArticle, AdminContainerFluid, AdminImages, AdminImagesItem, AdminTitle, AdminTitleH4 } from './style';
import UpdateArticleModal from './UpdateArticle';

const AdminContent = () => {
  const articleInfo = useSelector(state => state.article.articleState);
  const userInfo = useSelector(state => state.users.userInfoState);
  const dispatch = useDispatch();
  const [modalAddShow, setModaAddlShow] = useState(false);
  const [modalUpdateShow, setModaUpdatelShow] = useState(false);
  const authorName = userInfo?.data?.Name;
  const articleData = articleInfo?.data;
  const userID = userInfo?.data?.id;
  const filterArticleOfAuthor = articleData?.filter(item => item?.authorId === userID);

  const deleteData = async (id) => {
    await axios.delete(`${URL_API}/delete-articles/${id}`)
  }

  const handleDeleteArticle = async (id) => {
    Swal.fire({
      title: "Are you sure DELETE?",
      icon: "warning",
      iconHtml: "!",
      confirmButtonColor: "#8000ff",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id)
        dispatch(getArticleAction())
        Swal.fire({
          title: "Successfully",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#8000ff",
        });
      }
    })
  }

  const handleUpdateArticle = (id) => {
    console.log("🚀 ~ file: index.js:55 ~ handleUpdateArticle ~ id", id)
    setModaUpdatelShow(true)
  }
  return (
    <AdminContainerFluid className='container-fluid'>
      <AdminTitle>
        <AdminTitleH4>Management Articles</AdminTitleH4>
      </AdminTitle>
      <AdminAddArticle>
        <Button variant="primary" onClick={() => setModaAddlShow(true)}>
          Create new article
        </Button>
      </AdminAddArticle>
      <AddArticleModal
        show={modalAddShow}
        onHide={() => setModaAddlShow(false)}
      />
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>No</th>
            <th>Images</th>
            <th>Title</th>
            <th>Short description</th>
            <th>Description</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterArticleOfAuthor === [] ? <tr><td colSpan={7}>No Data</td></tr> :
            filterArticleOfAuthor?.map((item, index) => <tr key={item._id}>
              <td>{index + 1}</td>
              <td style={{width: "15%"}}>
                <AdminImagesItem>
                  <AdminImages src={item.images} />
                </AdminImagesItem>
              </td>
              <td>{item.title}</td>
              <td>{item.shortDescription}</td>
              <td>{item.description}</td>
              <td>{authorName}</td>
              <td>
                <Button variant="outline-warning" onClick={() => handleUpdateArticle(item._id)}><FontAwesomeIcon icon={faMarker} /></Button>{' '}
                <Button variant="outline-danger" onClick={() => handleDeleteArticle(item._id)}><FontAwesomeIcon icon={faTrashCan} /></Button>{' '}
              </td>
            </tr>)
          }
        <UpdateArticleModal
          show={modalUpdateShow}
          onHide={() => setModaUpdatelShow(false)}
        />
        </tbody>
      </Table>
    </AdminContainerFluid>
  )
}

export default AdminContent