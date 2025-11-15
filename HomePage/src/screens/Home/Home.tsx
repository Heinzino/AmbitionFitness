import React from "react";
import { Link } from "react-router-dom";
import { ClientTransformationsSection } from "./sections/ClientTransformationsSection";
import { FeatureProductsSection } from "./sections/FeatureProductsSection";
import { FindUsNearYouSection } from "./sections/FindUsNearYouSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

const whyChooseUsFeatures = [
  {
    id: 1,
    icon: "/img/vector.svg",
    iconType: "vector",
    title: "Elite Equipment",
    description: "State-of-the-art training equipment for maximum performance",
    topPosition: "2404px",
    leftPosition: "360px",
  },
  {
    id: 2,
    icon: "/img/football-leader-man-svgrepo-com-1.svg",
    iconType: "image",
    title: "Expert Coaches",
    description: "Certified trainers with years of professional experience",
    topPosition: "2334px",
    leftPosition: "668px",
  },
  {
    id: 3,
    icon: "/img/goal-svgrepo-com-1.svg",
    iconType: "image",
    title: "Proven Results",
    description: "Track record of transforming hundreds of clients",
    topPosition: "2334px",
    leftPosition: "975px",
  },
  {
    id: 4,
    icon: "/img/plans-planning-svgrepo-com-1.svg",
    iconType: "image",
    title: "Personalized Plans",
    description: "Custom training programs tailored to your goals",
    topPosition: "2404px",
    leftPosition: "1282px",
  },
];

const navigationLinks = [
  { label: "Home", path: "/home", isActive: true },
  { label: "Personal Training", path: "#", isActive: false },
  { label: "Memberships", path: "#", isActive: false },
  { label: "Group Sessions", path: "#", isActive: false },
  { label: "Virtual Tour", path: "#", isActive: false },
];

export const Home = (): JSX.Element => {
  return (
    <div
      className="bg-black overflow-hidden w-full min-w-[1920px] min-h-[8381px] relative"
      data-model-id="1:24"
    >
      <img
        className="top-[2772px] h-[1418px] absolute left-0 w-[1920px]"
        alt="Union"
        src="/img/union.svg"
      />

      <img
        className="top-[5881px] h-[904px] absolute left-0 w-[1920px]"
        alt="Union"
        src="/img/union-1.svg"
      />

      <img
        className="absolute top-0 left-0 w-[1920px] h-[1011px] object-cover"
        alt="Image"
        src="/img/image.png"
      />

      <div className="absolute top-[166px] left-[314px] w-[817px] h-[522px] bg-[#000000b2] rounded-[408.5px/261px] blur-[107px]" />

      <img
        className="absolute top-11 left-[538px] w-px h-[33px]"
        alt="Line"
        src="/img/line-217.svg"
      />

      <nav className="inline-flex items-start gap-[221px] absolute top-[15px] left-[360px]">
        <img
          className="relative w-[95px] h-[102.62px] aspect-[0.93] object-cover"
          alt="Image"
          src="/img/image-3-2.png"
        />

        <div className="inline-flex items-center justify-end gap-10 relative flex-[0_0_auto]">
          <div className="inline-flex gap-[30px] flex-[0_0_auto] items-center relative">
            {navigationLinks.map((link, index) =>
              link.isActive ? (
                <Link
                  key={index}
                  className="relative flex items-center justify-center w-fit mt-[-1.03px] [font-family:'Inter',Helvetica] font-medium text-variable-collection-coloryellow text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap"
                  to={link.path}
                >
                  {link.label}
                </Link>
              ) : (
                <div
                  key={index}
                  className="flex justify-center w-fit mt-[-1.03px] [font-family:'Inter',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap items-center relative"
                >
                  {link.label}
                </div>
              ),
            )}
          </div>

          <button className="inline-flex items-center justify-center gap-[10.33px] px-[23px] py-[15.49px] relative flex-[0_0_auto] bg-variable-collection-coloryellow rounded-[12.39px]">
            <span className="relative flex items-center justify-center w-fit mt-[-1.55px] font-16-medium font-[number:var(--16-medium-font-weight)] text-variable-collection-colorpriamry text-[length:var(--16-medium-font-size)] text-center tracking-[var(--16-medium-letter-spacing)] leading-[var(--16-medium-line-height)] whitespace-nowrap [font-style:var(--16-medium-font-style)]">
              Get in Touch
            </span>

            <img
              className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
              alt="Line"
              src="/img/line-108-1.svg"
            />
          </button>
        </div>
      </nav>

      <HeroSection />
      <NewsletterSection />
      <HeaderSection />

      <section className="flex flex-col w-[559px] items-center gap-2.5 absolute top-[2206px] left-[calc(50.00%_-_279px)]">
        <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-[15px] text-center tracking-[0.45px] leading-[24.0px] whitespace-nowrap">
            Our Unique Edge
          </h3>

          <img
            className="relative w-[110.67px] h-[2.97px]"
            alt="Rectangle"
            src="/img/rectangle-5-4.svg"
          />
        </div>

        <h2 className="relative self-stretch [font-family:'Montserrat',Helvetica] font-semibold text-white text-[45px] text-center tracking-[0] leading-[54.0px]">
          Why Choose Us
        </h2>
      </section>

      {whyChooseUsFeatures.map((feature) => (
        <article
          key={feature.id}
          className="flex flex-col w-[277.5px] h-[238px] items-center gap-[30px] p-[25px] absolute bg-[#191919] rounded-xl"
          style={{ top: feature.topPosition, left: feature.leftPosition }}
        >
          {feature.iconType === "vector" ? (
            <div className="relative w-[50px] h-[50px] aspect-[1]">
              <img
                className="absolute w-[94.34%] h-[94.34%] top-[2.83%] left-[2.83%]"
                alt={feature.title}
                src={feature.icon}
              />
            </div>
          ) : (
            <img
              className="relative w-[50px] h-[50px] aspect-[1]"
              alt={feature.title}
              src={feature.icon}
            />
          )}

          <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-[#e4e4e4] text-[21px] text-center tracking-[0] leading-[31.5px]">
              {feature.title}
            </h4>

            <p className="relative self-stretch opacity-80 [font-family:'Montserrat',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6">
              {feature.description}
            </p>
          </div>
        </article>
      ))}

      <WhyChooseUsSection />
      <ClientTransformationsSection />
      <FeatureProductsSection />
      <TestimonialsSection />
      <FindUsNearYouSection />
      <FooterSection />
    </div>
  );
};
