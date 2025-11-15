import React from "react";
import { BenefitsSection } from "./sections/BenefitsSection";
import { BootCampSection } from "./sections/BootCampSection";
import { ClassScheduleSection } from "./sections/ClassScheduleSection";
import { GetStartedSection } from "./sections/GetStartedSection";
import { GroupSessionsSection } from "./sections/GroupSessionsSection";
import { SeniorFitnessSection } from "./sections/SeniorFitnessSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";

export const GroupSessions = (): JSX.Element => {
  return (
    <div
      className="bg-black overflow-hidden w-full min-w-[1920px] min-h-[4226px] relative"
      data-model-id="1:873"
    >
      <img
        className="absolute top-[1924px] left-0 w-[1920px] h-[573px]"
        alt="Image"
        src="/img/image.png"
      />

      <img
        className="absolute top-[1795px] left-0 w-[1920px] h-[529px]"
        alt="Image"
        src="/img/image-1.png"
      />

      <div className="absolute top-0 left-0 w-[1943px] h-[458px] bg-[#14181f]" />

      <img
        className="absolute top-11 left-[538px] w-px h-[33px]"
        alt="Line"
        src="/img/line-217.svg"
      />

      <SeniorFitnessSection />
      <BootCampSection />
      <GroupSessionsSection />
      <ClassScheduleSection />
      <BenefitsSection />
      <WhyChooseSection />
      <GetStartedSection />
    </div>
  );
};
