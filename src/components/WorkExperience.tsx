import React from "react";
import styled from "styled-components";
import { Description, Header, Link } from "../globalStyles";
import { ExperienceModel } from "../models/experience.model";
import { Section } from "./Section";

const workExperienceHistory: ExperienceModel[] = [
  {
    company: "Datadog",
    role: "SWE Intern",
    date: "Summer 2023",
    tech: "Python, datetime, pytz, expression trees",
    description: "Built a customizable query function to support timeshifting",
    link: "https://docs.datadoghq.com/dashboards/querying/",
  },
  {
    company: "Roblox",
    role: "SWE Intern",
    date: "Winter 2023",
    tech: "Pandas, Scikit-learn, SQL, Spark, Airflow",
    description: "Automated inappropriate game detection methods",
    link: "https://corporate.roblox.com/trust-safety/",
  },
  {
    company: "Amazon Web Services",
    role: "SWE Intern",
    date: "Summer 2022",
    tech: "S3, React, TypeScript, Axios, BaseWeb",
    description: "Introduced an API management portal",
    link: "https://aws.amazon.com/api-gateway/",
  },
  {
    company: "Intuit",
    role: "SWE Intern",
    date: "Fall 2021",
    tech: "Spring, React, TypeScript, XSLT",
    description: "Simplified financial tasks for millions of users",
    link: "https://www.intuit.com/",
  },
  {
    company: "RBC",
    role: "SWE Intern",
    date: "Winter 2021",
    tech: "Angular, TypeScript, Sass",
    description: "Built a mortgage application tracker for national clients",
    link: "https://www.rbcroyalbank.com/mortgages/index.html",
  }
];

const WorkExpContainer = styled.div`
  margin-top: 32px;
`;

export const WorkExperience = () => {
  return (
    <Section
      heading="Work"
      subheading="cool places I've worked as a software engineer intern!"
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
