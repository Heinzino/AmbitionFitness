import React from "react";
import { Link } from "react-router-dom";
import { AboutUsSection } from "./sections/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ClientTransformationsSection } from "./sections/ClientTransformationsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { PersonalTrainingSection } from "./sections/PersonalTrainingSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const navigationItems = [
  { label: "Home", href: "/", isActive: false },
  { label: "Personal Training", href: "/personal-training", isActive: true },
  { label: "Memberships", href: "/memberships", isActive: false },
  { label: "Group Sessions", href: "/group-sessions", isActive: false },
  { label: "Virtual Tour", href: "/virtual-tour", isActive: false },
];

export const PersonalTraining = (): JSX.Element => {
  return (
    <div
      className="bg-black w-full min-w-[1920px] min-h-[7095px] relative"
      data-model-id="1:456"
    >
      <img
        className="absolute top-[1639px] left-0 w-[1920px] h-[1080px]"
        alt="Union"
        src="/img/union.svg"
      />

      <img
        className="absolute top-0 left-0 w-[1920px] h-[752px] object-cover"
        alt="Rectangle"
        src="/img/rectangle-6542.png"
      />

      <img
        className="absolute top-11 left-[538px] w-px h-[33px]"
        alt="Line"
        src="/img/line-217.svg"
      />

      <header className="inline-flex items-start gap-[221px] absolute top-[15px] left-[360px]">
        <img
          className="relative w-[95px] h-[102.62px] aspect-[0.93] object-cover"
          alt="Image"
          src="/img/image-3-2-1.png"
        />

        <nav className="inline-flex items-center justify-end gap-10 relative flex-[0_0_auto]">
          <ul className="inline-flex items-center gap-[30px] relative flex-[0_0_auto]">
            {navigationItems.map((item, index) => (
              <li key={index}>
                {item.isActive ? (
                  <Link
                    className="relative flex items-center justify-center w-fit mt-[-1.03px] [font-family:'Inter',Helvetica] font-medium text-variable-collection-coloryellow text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap"
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    className="relative flex items-center justify-center w-fit mt-[-1.03px] [font-family:'Inter',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap"
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <button className="inline-flex items-center justify-center gap-[10.33px] px-[23px] py-[15.49px] relative flex-[0_0_auto] bg-variable-collection-coloryellow rounded-[12.39px]">
            <span className="relative flex items-center justify-center w-fit mt-[-1.55px] font-16-medium font-[number:var(--16-medium-font-weight)] text-variable-collection-colorpriamry text-[length:var(--16-medium-font-size)] text-center tracking-[var(--16-medium-letter-spacing)] leading-[var(--16-medium-line-height)] whitespace-nowrap [font-style:var(--16-medium-font-style)]">
              Get in Touch
            </span>

            <img
              className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
              alt="Line"
              src="/img/line-108-3.svg"
            />
          </button>
        </nav>
      </header>

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
