import React from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from "react-redux";
import avatarDefault from "../../assets/images/avatarnull.png";
import logo from '../../assets/images/rikailogo.png';
import shutdown from "../../assets/images/shutdown.png";
import { logoutAction } from '../../stores/slices/user.slice';
import { DropdownInner, HeaderAvatar, HeaderContainer, HeaderContainerFluid, HeaderDropdown, HeaderDropdownImg, HeaderDropdownInner, HeaderInner, HeaderInnerLogo, SidebarDesc, StyleLink } from './style';

const Header = () => {
  const userInfo = useSelector(state => state.users.userInfoState);
  const roleInfo = useSelector(state => state.role.roleState);
  const user = userInfo?.data?.Name;
  const permission = roleInfo?.data?.Role;
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
  };
  return (
    <HeaderContainerFluid>
      <HeaderContainer className='container'>
        <Navbar>
          <Container style={{ padding: "0" }}>
            <HeaderInner>
              <StyleLink to="/">
                <HeaderInnerLogo src={logo} />
              </StyleLink>
            </HeaderInner>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Dropdown>
                <DropdownInner>
                  <SidebarDesc className="header-name"> Hi, {user}</SidebarDesc>
                  <HeaderAvatar>
                    <Dropdown.Toggle style={{
                      padding: "0",
                      background: "white",
                      border: "none",
                      height: "45px"
                    }}>
                      <HeaderInnerLogo className="avatar" src={avatarDefault} />
                    </Dropdown.Toggle>
                  </HeaderAvatar>
                </DropdownInner>
                <HeaderDropdown>
                  <Dropdown.Menu className="drop-down-item" style={{ padding: "0" }}>
                    <StyleLink onClick={() => logout()}>
                      <HeaderDropdownInner>
                        <HeaderDropdownImg><HeaderInnerLogo src={shutdown} /></HeaderDropdownImg>
                        <SidebarDesc className="drop-down-item">Logout</SidebarDesc>
                      </HeaderDropdownInner>
                    </StyleLink>
                    {permission === "admin" && <StyleLink to="/admin">
                      <HeaderDropdownInner>
                        <HeaderDropdownImg><HeaderInnerLogo src={avatarDefault} /></HeaderDropdownImg>
                        <SidebarDesc className="drop-down-item">Admin Page</SidebarDesc>
                      </HeaderDropdownInner>
                    </StyleLink>}
                  </Dropdown.Menu>
                </HeaderDropdown>
              </Dropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </HeaderContainer>
    </HeaderContainerFluid>
  )
}

export default Header