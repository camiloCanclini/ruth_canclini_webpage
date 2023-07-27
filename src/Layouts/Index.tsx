import React from 'react';
import PresentationSection from '../Components/App/PresentationSection/PresentationSection';
import NavBar from "../Components/App/NavBar/NavBar";
import ServiceSection from "../Components/App/ServiceSection/ServiceSection";
import TeamSection from "../Components/App/TeamSection/TeamSection";
import FormSection from "../Components/App/FormContactSection/FormSection";
const Index: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <PresentationSection></PresentationSection>
      <ServiceSection></ServiceSection>
      <TeamSection></TeamSection>
      <FormSection></FormSection>
    </>
  );
};

export default Index;