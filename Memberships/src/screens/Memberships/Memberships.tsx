import React from "react";
import { FitnessImageSection } from "./sections/FitnessImageSection";
import { GetStartedSection } from "./sections/GetStartedSection";
import { IncludedFeaturesSection } from "./sections/IncludedFeaturesSection";
import { MembershipBenefitsSection } from "./sections/MembershipBenefitsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { TrainingImageSection } from "./sections/TrainingImageSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const Memberships = (): JSX.Element => {
  return (
    <div
      className="bg-black overflow-hidden w-full min-w-[1920px] min-h-[3801px] relative"
      data-model-id="1:731"
    >
      <img
        className="absolute top-[1169px] left-0 w-[1920px] h-[787px]"
        alt="Union"
        src="/img/union.svg"
      />

      <img
        className="absolute top-[1438px] left-[1009px] w-[559px] h-[354px]"
        alt="Rectangle"
        src="/img/rectangle-6544.png"
      />

      <div className="absolute top-0 left-0 w-[1943px] h-[458px] bg-[#14181f]" />

      <img
        className="absolute top-11 left-[538px] w-px h-[33px]"
        alt="Line"
        src="/img/line-217.svg"
      />

      <FitnessImageSection />
      <TrainingImageSection />
      <MembershipBenefitsSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <img
        className="absolute top-[2378px] left-[360px] w-[1196px] h-[449px] object-cover"
        alt="Rectangle"
        src="/img/rectangle-6543.png"
      />

      <GetStartedSection />
      <IncludedFeaturesSection />
    </div>
  );
};
