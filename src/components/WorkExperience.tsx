import React from "react";
import styled from "styled-components";
import { Description, Header, Link } from "../globalStyles";
import { ExperienceModel } from "../models/experience.model";
import { Section } from "./Section";

const workExperienceHistory: ExperienceModel[] = [
  {
    company: "RBC",
    role: "SWE Intern",
    date: "Winter 2021",
    tech: "Angular, TypeScript, Sass",
    description: "Building a mortgage application tracker for national clients",
    link: "https://www.rbcroyalbank.com/mortgages/index.html",
  },
  {
    company: "TitanFile Inc.",
    role: "SWE Intern",
    date: "Summer 2020",
    tech: "Django, Socket.IO, JSX, Twilio",
    description: "Implementing a secure file sharing platform",
    link: "https://www.titanfile.com/",
  },
];

const WorkExpContainer = styled.div`
  margin-top: 32px;
`;

export const WorkExperience = () => {
  return (
    <Section
      heading="Work"
      subheading="some cool places I've worked as a software engineer intern!"
    >
      {workExperienceHistory.map((experience) => {
        return (
          <WorkExpContainer>
            <Header>
              {experience.description} at{" "}
              <Link href={experience.link} target="_blank">
                {experience.company}
              </Link>
            </Header>
            <Description>
              {experience.date} - {experience.tech}
            </Description>
          </WorkExpContainer>
        );
      })}
    </Section>
  );
};
