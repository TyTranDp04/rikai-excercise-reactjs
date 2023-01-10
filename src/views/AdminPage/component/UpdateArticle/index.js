import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import * as yup from "yup";
import { URL_API } from '../../../../api/const.api';
import imgNull from '../../../../assets/images/avatarnull.png';
import { getArticleAction } from '../../../../stores/slices/article.slice';
import { InputSignUp, SignUpSubmit, TextRed } from '../../../SignInPage/component/style';
import { ImgContent, ImgPreview, ImgPreviewItem } from '../style';

const schema = yup.object().shape({
  title: yup.string()
    .required('Title is required'),
  shortDescription: yup.string()
    .required('Short Description is required'),
  description: yup.string()
    .required('Description is required'),
}).required();

const UpdateArticleModal = (props) => {
  const userInfo = useSelector(state => state.users.userInfoState);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [imagePreview, setImagePreview] = useState(null);

  const filePicekerRef = useRef()

  const previewFile = async (e) => {
    const reader = new FileReader();
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }

    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("image")) {
        setImagePreview(readerEvent.target.result);
      }
    };
  }

  const handleClickImg = (e) => {
    e.preventDefault();
    filePicekerRef.current.click()
  }
  const ID = userInfo?.data?.id;

  const updateData = async (data) => {
    const url = URL_API + "/update-articles/" + ID;
    await axios
      .patch(url, data)
      .then(() => {
        Swal.fire({
          title: "Update success",
          icon: "success",
          confirmButtonText: "Ok",
          showCloseButton: true,
          confirmButtonColor: "#8000ff",
        });
        dispatch(getArticleAction())
        props.onHide()
      })
      .catch((err) => toast.error("Image entity too large"));
  }

  const handleAddArticle = (data) => {
    let configInput = {
      title: data.title,
      images: imagePreview,
      shortDescription: data.shortDescription,
      description: data.description,
    }
    updateData(configInput)
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
          Create new article
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="form">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <InputSignUp
              {...register("title")}
              type="text"
              placeholder="Please enter title"
              autoFocus
            />
            <TextRed>{errors.title?.message}</TextRed>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Short Description</Form.Label>
            <InputSignUp
              {...register("shortDescription")}
              type="text"
              placeholder="Please enter short description"
            />
            <TextRed>{errors.shortDescription?.message}</TextRed>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Description</Form.Label>
            <InputSignUp
              {...register("description")}
              type="text"
              placeholder="Please enter description"
            />
            <TextRed>{errors.description?.message}</TextRed>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Images</Form.Label>
            <InputSignUp
              ref={filePicekerRef}
              accept="image/*"
              onChange={previewFile}
              type="file"
              hidden
            />
            <ImgPreview className="img__preview">
              <ImgContent className="img__preview-content">
                <ImgPreviewItem
                  className="img__preview-image"
                  onClick={handleClickImg}
                  src={imagePreview ?? imgNull}
                  alt="Image Preview"
                />
              </ImgContent>
            </ImgPreview>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <SignUpSubmit onClick={handleSubmit(handleAddArticle)}>Update</SignUpSubmit>
      </Modal.Footer>
      <ToastContainer
        style={{ display: "block", position: "fixed", zIndex: "99999" }}
        autoClose={1000}
      />
    </Modal>
  );
}

export default UpdateArticleModal