import React from "react";
import { FacilityFeaturesSection } from "./sections/FacilityFeaturesSection";
import { FacilityGallerySection } from "./sections/FacilityGallerySection";
import { FooterSection } from "./sections/FooterSection";
import { GetStartedSection } from "./sections/GetStartedSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainSection } from "./sections/MainSection";
import { VirtualTourSection } from "./sections/VirtualTourSection";
import { WhatMakesUsDifferentSection } from "./sections/WhatMakesUsDifferentSection";

export const FacilityTour = (): JSX.Element => {
  return (
    <div
      className="bg-black overflow-hidden w-full min-w-[1920px] min-h-[5314px] relative"
      data-model-id="1:1045"
    >
      <img
        className="absolute top-[1493px] left-0 w-[1920px] h-[916px]"
        alt="Union"
        src="/img/union.svg"
      />

      <img
        className="absolute top-[3328px] left-0 w-[1920px] h-[1011px]"
        alt="Union"
        src="/img/union-1.svg"
      />

      <div className="absolute top-0 left-0 w-[1943px] h-[458px] bg-[#14181f]" />

      <img
        className="absolute top-11 left-[538px] w-px h-[33px]"
        alt="Line"
        src="/img/line-217.svg"
      />

      <MainSection />
      <WhatMakesUsDifferentSection />
      <HeaderSection />
      <VirtualTourSection />
      <FacilityGallerySection />
      <FacilityFeaturesSection />
      <GetStartedSection />
      <FooterSection />
    </div>
  );
};
