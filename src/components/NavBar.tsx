import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  margin: 48px 0 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1500px) {
    margin: 64px 0 24px;
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  // gap: 24px;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-end;
    // gap: 8px;
  }
`;

export const NavItem = styled(NavLink)`
  text-transform: lowercase;
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  margin-left: 24px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.5em;
    text-decoration-thickness: 2px;
    color: #748b6c;
  }

  @media (max-width: 560px) {
    margin: 0 0 8px;
  }
`;

export const Contact = styled.a`
  text-transform: lowercase;
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  margin-left: 24px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.5em;
    text-decoration-thickness: 2px;
    color: #748b6c;
  }

  @media (max-width: 560px) {
    margin: 0 0 8px;
  }
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
      <HomePageNav onClick={() => history.push("/")}>恬慧</HomePageNav>
      <NavItemContainer>
        <NavItem exact to="/" activeStyle={{ color: "#748b6c" }}>
          experience
        </NavItem>
        <NavItem to="/about" activeStyle={{ color: "#748b6c" }}>
          about
        </NavItem>
        <Contact href="mailto:tianhui.yang@uwaterloo.ca">contact</Contact>
      </NavItemContainer>
    </NavBarContainer>
  );
};
