import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  margin: 64px 0 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }
`;

export const NavItem = styled.a`
  text-transform: lowercase;
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const HomePageNav = styled.p`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  background-color: #cfe2d0;
  cursor: pointer;
`;

export const NavBar = () => {
  let history = useHistory();

  return (
    <NavBarContainer>
      <HomePageNav onClick={() => history.push("/")}>Tianhui</HomePageNav>
      <NavItemContainer>
        <NavItem onClick={() => history.push("/experience")}>
          experience
        </NavItem>
        <NavItem onClick={() => history.push("/about")}>about</NavItem>
        <NavItem href="mailto:tianhui.yang@uwaterloo.ca" target="_blank">
          contact
        </NavItem>
      </NavItemContainer>
    </NavBarContainer>
  );
};
