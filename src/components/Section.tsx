import styled from "styled-components";

interface SectionProps {
  heading?: string;
  subheading?: string;
  children?: React.ReactFragment | HTMLCollection | string;
}

export const SectionContainer = styled.div`
  margin: 20px 0;
  flex-direction: column;
`;

export const SectionHeading = styled.div`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  margin: 8px 0;
  line-height: 1.75;
  color: #748b6c;
`;

export const SectionSubheading = styled.div`
  text-transform: lowercase;
  font-size: 14px;
  margin: 8px 0;
  line-height: 1.5;
`;

export const Section = ({ heading, subheading, children }: SectionProps) => {
  return (
    <SectionContainer>
      <SectionHeading>{heading}</SectionHeading>
      <SectionSubheading>{subheading}</SectionSubheading>
      {children}
    </SectionContainer>
  );
};
