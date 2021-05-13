import React from "react";
import styled from "styled-components";
import GitHub from "../assets/github.svg";
import Mail from "../assets/envelope.svg";
import Medium from "../assets/medium.svg";
import LinkedIn from "../assets/linkedin.svg";

const FooterContainer = styled.div`
  bottom: 0;
  margin: 32px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 32px;
`;

const FooterIcon = styled.img`
  width: 18px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/tianhuiyang" target="_blank">
        <FooterIcon src={GitHub}></FooterIcon>
      </a>
      <a href="https://www.linkedin.com/in/tianhuiyang/" target="_blank">
        <FooterIcon src={LinkedIn}></FooterIcon>
      </a>
      <a href="mailto:tianhui.yang@uwaterloo.ca" target="_blank">
        <FooterIcon src={Mail}></FooterIcon>
      </a>
      <a href="https://medium.com/@tianhui" target="_blank">
        <FooterIcon src={Medium}></FooterIcon>
      </a>
    </FooterContainer>
  );
};
