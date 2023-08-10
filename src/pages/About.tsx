import React from "react";
import { AppContainer, Link } from "../globalStyles";
import { NavBar } from "../components/NavBar";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";
import styled from "styled-components";

const AboutContent = styled.p`
  line-height: 1.75;
  margin: 0 0 24px;
`;

export const About = () => {
  return (
    <AppContainer>
      <NavBar />
      <Section
        heading="Nice to (virtually) meet you, I'm Tianhui!"
        subheading="[ tian-hway, she/her ]"
      ></Section>
      <Section>
        <AboutContent>
          I'm a Computer Science student at the University of Waterloo and am interning at {" "}  
          <Link href="https://www.datadoghq.com/" target="_blank">
            Datadog
          </Link>
          {" "} as a SWE intern on the Query team. I am passionate about using my technical knowledge to build an
          inclusive community and create solutions with large scale impact.
        </AboutContent>
        <AboutContent>
          I really enjoy staying active and the general outdoors. Ask me about
          the mountains I've climbed and places I've explored. I also really
          like matcha and dark chocolate!
        </AboutContent>
        <AboutContent>
          With so much more to learn, I am always open to exploring new
          opportunities. Feel free to reach out if you're interested in
          connecting. :)
        </AboutContent>
      </Section>
      <Footer />
    </AppContainer>
  );
};
