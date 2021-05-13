import React from "react";
import { Extracurricular } from "../components/Extracurricular";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { WorkExperience } from "../components/WorkExperience";
import { AppContainer } from "../globalStyles";

export const Experience = () => {
  return (
    <AppContainer>
      <NavBar />
      <WorkExperience />
      <Extracurricular />
      <Footer />
    </AppContainer>
  );
};
