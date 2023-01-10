import styled from "styled-components";
import { Link } from "react-router-dom";
export const DropdownInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const HeaderDropdownImg = styled.div`
  width: 30px;
  height: 30px;
  padding-right: 5px;
`
export const HeaderDropdownInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
`
export const HeaderDropdown = styled.div`
  width: 100px;
  height: 100%;
`
export const SidebarDesc = styled.div`
  padding-right: 10px;
`
export const HeaderAvatar = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 0;
  
  @media (max-width: 576px) {
    width: 30px;
    height: 30px;
  }

  .avatar {
    min-width: 100%;
    min-height: 100%;
    border-radius: 50%;
  }
`
export const HeaderInnerLogo = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`
export const HeaderInner = styled.div`
  width: 130px;
`
export const StyleLink = styled(Link)`
  text-decoration: none;
  color: #0086D1;
`
export const HeaderContainer = styled.div`
  
`
export const HeaderContainerFluid = styled.div`
  box-shadow: 0px 3px 2px 0px rgb(0 0 0 / 10%);
`