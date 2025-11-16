import React from "react";
import { Navigation } from "../../components/Navigation";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ClientTransformationsSection } from "./sections/ClientTransformationsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { PersonalTrainingSection } from "./sections/PersonalTrainingSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const PersonalTraining = (): JSX.Element => {
  return (
    <div
      className="bg-black w-full lg:min-w-[1920px] min-h-screen lg:min-h-[7095px] relative"
      data-model-id="1:456"
    >
      <img
        className="hidden lg:block absolute top-[1639px] left-0 w-[1920px] h-[1080px]"
        alt="Union"
        src="/img/union.svg"
      />

      <img
        className="absolute top-0 left-0 w-full lg:w-[1920px] h-[400px] lg:h-[752px] object-cover"
        alt="Rectangle"
        src="/img/rectangle-6542.png"
      />

      <img
        className="hidden lg:block absolute top-11 left-[538px] w-px h-[33px]"
        alt="Line"
        src="/img/line-217.svg"
      />

      <Navigation />

      <HeroSection />
      <ClientTransformationsSection />
      <TestimonialsSection />
      <PersonalTrainingSection />
      <AboutUsSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};
