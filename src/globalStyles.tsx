import styled from "styled-components";

export const AppContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  height: 100%;

  @media (max-width: 800px) {
    margin: 0 24px;
  }
`;

export const Header = styled.div`
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 500;
  margin: 6px 0;
  line-height: 1.5;
`;

export const Description = styled.p`
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 8px 0;
  font-size: 12px;
  line-height: 1.5;
`;

export const Link = styled.a`
  text-decoration: underline;
  color: black;
  &:hover {
    background-color: #cfe2d0;
    // color: #748b6c;
  }
`;
