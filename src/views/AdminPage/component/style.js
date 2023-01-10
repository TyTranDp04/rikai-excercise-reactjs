import styled from "styled-components";

export const ImgPreviewItem = styled.img`
width: 100%;
height: 100%;
border: 0.5px solid #0F1C3F;
border-radius: 50%;
object-fit: cover;
`
export const ImgContent = styled.div`
display:block;
position: relative;
left: 0px;
width: 150px;
height: 150px;
@media (max-width: 767px) {
  width: 100px;
  height: 100px;
}
@media (max-width: 480px) {
  width: 80px;
  height: 80px;
}
`
export const ImgPreview = styled.div`
width: 100%;
height: ;
min-height: 100px;
margin-top: 15px;
display: flex;
justify-content:center;
align-items:center;
align-items: center;
font-weight: bold;
color: #cccccc;
position: relative;
`
export const AdminAddArticle = styled.div`
  padding-bottom: 10px;
  text-align: end;
`
export const AdminImages = styled.img`
  max-width: 100%;
  height: 125px;
`
export const AdminImagesItem = styled.div`
  width: 150px;
  height: 120px;
  margin: auto;
`
export const AdminTitleH4 = styled.h4`
  
`
export const AdminTitle = styled.div`
  padding: 20px 0;
`
export const AdminContainerFluid = styled.div`

`