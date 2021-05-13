import React from "react";
import styled from "styled-components";
import { Description, Header, Link } from "../globalStyles";
import { ExperienceModel } from "../models/experience.model";
import { Section } from "./Section";

const extracurriculars: ExperienceModel[] = [
  {
    company: "CUTC",
    role: "Tech Lead",
    date: "2020",
    tech: "HTML5/CSS3, JavaScript, Bootstrap",
    description: "Organizing the largest virtual tech conference in Canada",
    link: "https://www.cutc.ca/",
  },
  {
    company: "lleTTonna",
    role: "Backend developer",
    date: "2020",
    tech: "Node.js, Postgres, Postman",
    description: "Building a CBT app for mothers with postpartum depression",
    link: "https://llettonna.com/momsinmind-new/",
  },
  {
    company: "Illuminate Universe",
    role: "Senior National Lead",
    date: "2020",
    tech: "Product management",
    description: "Enabling experiential learning for high school students",
    link: "https://www.illuminateuniverse.com/",
  },
];

const ExtracurricularContainer = styled.div`
  margin-top: 32px;
`;

export const Extracurricular = () => {
  return (
    <Section
      heading="Leadership"
      subheading={
        "working with organizations to build an inclusive tech community"
      }
    >
      {extracurriculars.map((experience) => {
        return (
          <ExtracurricularContainer>
            <Header>
              {experience.description} at{" "}
              <Link href={experience.link} target="_blank">
                {experience.company}
              </Link>
            </Header>
            <Description>
              {experience.date} {experience.role} - {experience.tech}
            </Description>
          </ExtracurricularContainer>
        );
      })}
    </Section>
  );
};
