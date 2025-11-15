import React from "react";

const servicesData = ["Personal Training", "Group Classes", "Online Training"];

const serviceAreaData = [
  "Mayland Heights",
  "Meridian",
  "Raddison Heights",
  "Bridgeland-Riverside",
];

const companyData = ["Home", "Blog", "Contact Us"];

const socialMediaData = [
  {
    id: 1,
    icon: "/img/subtract.svg",
    alt: "Subtract",
    className: "absolute w-[83.33%] h-[83.33%] top-[8.34%] left-[8.33%]",
  },
  {
    id: 2,
    icon: "/img/subtract-1.svg",
    alt: "Subtract",
    className: "absolute w-[100.00%] h-[70.02%] top-[15.00%] left-0",
  },
  {
    id: 3,
    icon: "/img/facebook.svg",
    alt: "Facebook",
    className: "relative w-[18.95px] h-[18.95px]",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-[1920px] items-start justify-center gap-[30px] pt-[110px] pb-[30px] px-[360px] absolute left-0 bottom-px">
      <div className="flex flex-col items-start gap-20 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start gap-[31px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[414px] items-start justify-center gap-4 pl-0 pr-5 py-0 relative">
            <img
              className="relative w-[63px] h-[68.05px] aspect-[0.93] object-cover"
              alt="Ambition Fitness Logo"
              src="/img/image-3-2.png"
            />

            <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[22.4px]">
              <span className="text-[#ebebeb]">
                Transform your body and mind with our world-class personal
                training facility. Expert coaches, cutting-edge equipment,
                proven results. <br />
              </span>

              <a href="#" className="text-[#fedf41] hover:underline">
                Read More
              </a>
            </p>
          </div>

          <nav
            className="flex flex-col items-start gap-[13px] relative flex-1 grow"
            aria-labelledby="services-heading"
          >
            <h2
              id="services-heading"
              className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-base tracking-[0] leading-[26px]"
            >
              Services
            </h2>

            <ul className="flex flex-col items-start justify-center gap-1 relative self-stretch w-full flex-[0_0_auto] opacity-80">
              {servicesData.map((service, index) => (
                <li
                  key={index}
                  className={`w-fit font-normal text-sm leading-[26px] whitespace-nowrap relative ${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Montserrat',Helvetica] text-white tracking-[0]`}
                >
                  <a
                    href="#"
                    className="hover:text-variable-collection-coloryellow transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="flex flex-col items-start gap-[13px] relative flex-1 grow"
            aria-labelledby="service-area-heading"
          >
            <h2
              id="service-area-heading"
              className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-base tracking-[0] leading-[26px]"
            >
              Service Area
            </h2>

            <ul className="flex flex-col items-start justify-center gap-1 relative self-stretch w-full flex-[0_0_auto] opacity-80">
              {serviceAreaData.map((area, index) => (
                <li
                  key={index}
                  className={`relative w-fit ${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[26px] whitespace-nowrap`}
                >
                  <a
                    href="#"
                    className="hover:text-variable-collection-coloryellow transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="flex flex-col items-start gap-[13px] relative flex-1 grow"
            aria-labelledby="company-heading"
          >
            <h2
              id="company-heading"
              className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-base tracking-[0] leading-[26px]"
            >
              Company
            </h2>

            <ul className="flex flex-col items-start justify-center gap-1 relative self-stretch w-full flex-[0_0_auto] opacity-80">
              {companyData.map((item, index) => (
                <li
                  key={index}
                  className={`relative w-fit ${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[26px] whitespace-nowrap`}
                >
                  <a
                    href="#"
                    className="hover:text-variable-collection-coloryellow transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr
          className="relative self-stretch w-full h-px object-cover border-0 bg-white opacity-20"
          aria-hidden="true"
        />
      </div>

      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-[#e4e4e4] text-base text-center tracking-[0] leading-[normal]">
          Copyright © 2025 Ambition Fitness - All Rights Reserved.
        </p>

        <div
          className="inline-flex items-start gap-[7.89px] relative flex-[0_0_auto] opacity-60"
          role="list"
          aria-label="Social media links"
        >
          {socialMediaData.map((social) => (
            <a
              key={social.id}
              href="#"
              className="inline-flex items-center gap-[7.89px] p-[7.89px] relative flex-[0_0_auto] bg-[#384254] rounded-[78.95px] hover:bg-[#4a5568] transition-colors"
              aria-label={social.alt}
            >
              {social.id === 3 ? (
                <img
                  className={social.className}
                  alt={social.alt}
                  src={social.icon}
                />
              ) : (
                <div className="relative w-[18.95px] h-[18.95px]">
                  <img
                    className={social.className}
                    alt={social.alt}
                    src={social.icon}
                  />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
