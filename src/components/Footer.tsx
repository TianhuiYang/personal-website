import React from "react";
import styled from "styled-components";
import GitHub from "../assets/github.svg";
import Mail from "../assets/envelope.svg";
import Medium from "../assets/medium.svg";
import LinkedIn from "../assets/linkedin.svg";
import { FooterModel } from "../models/footer.model";

const FooterContainer = styled.div`
  bottom: 0;
  margin: 24px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  // gap: 32px;

  @media (min-width: 1500px) {
    margin: 32px 0;
  }
`;

const FooterIcon = styled.img`
  width: 18px;
  margin-right: 32px;
`;

const socialLinks: FooterModel[] = [
  {
    link: "https://github.com/tianhuiyang",
    icon: GitHub,
  },
  {
    link: "https://www.linkedin.com/in/tianhuiyang/",
    icon: LinkedIn,
  },
  {
    link: "mailto:tianhui.yang@uwaterloo.ca",
    icon: Mail,
  },
  {
    link: "https://medium.com/@tianhui",
    icon: Medium,
  },
];

export const Footer = () => {
  return (
    <FooterContainer>
      {socialLinks.map((social) => {
        return (
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <FooterIcon src={social.icon}></FooterIcon>
          </a>
        );
      })}
    </FooterContainer>
  );
};
