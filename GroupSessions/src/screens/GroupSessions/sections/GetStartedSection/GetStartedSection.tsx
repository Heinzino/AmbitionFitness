import React from "react";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialIcon {
  name: string;
  icon: string;
  href: string;
}

export const GetStartedSection = (): JSX.Element => {
  const footerColumns: FooterColumn[] = [
    {
      title: "Services",
      links: [
        { text: "Personal Training", href: "#personal-training" },
        { text: "Group Classes", href: "#group-classes" },
        { text: "Online Training", href: "#online-training" },
      ],
    },
    {
      title: "Service Area",
      links: [
        { text: "Mayland Heights", href: "#mayland-heights" },
        { text: "Meridian", href: "#meridian" },
        { text: "Raddison Heights", href: "#raddison-heights" },
        { text: "Bridgeland-Riverside", href: "#bridgeland-riverside" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "Home", href: "#home" },
        { text: "Blog", href: "#blog" },
        { text: "Contact Us", href: "#contact-us" },
      ],
    },
  ];

  const socialIcons: SocialIcon[] = [
    {
      name: "Instagram",
      icon: "/img/subtract.svg",
      href: "#instagram",
    },
    {
      name: "Twitter",
      icon: "/img/image.svg",
      href: "#twitter",
    },
    {
      name: "Facebook",
      icon: "/img/facebook.png",
      href: "#facebook",
    },
  ];

  return (
    <footer className="flex flex-col w-[1920px] items-start justify-center gap-[30px] pt-[110px] pb-[30px] px-[360px] absolute left-[calc(50.00%_-_960px)] bottom-[-135px]">
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

              <a href="#read-more" className="text-[#fedf41] hover:underline">
                Read More
              </a>
            </p>
          </div>

          {footerColumns.map((column, columnIndex) => (
            <nav
              key={columnIndex}
              className="flex flex-col items-start gap-[13px] relative flex-1 grow"
              aria-label={column.title}
            >
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-base tracking-[0] leading-[26px]">
                {column.title}
              </h3>

              <ul className="flex flex-col items-start justify-center gap-1 relative self-stretch w-full flex-[0_0_auto] opacity-80">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="relative w-fit">
                    <a
                      href={link.href}
                      className={`${
                        linkIndex === 0 ? "mt-[-1.00px]" : ""
                      } [font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[26px] whitespace-nowrap hover:text-variable-collection-coloryellow transition-colors`}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <hr
          className="relative self-stretch w-full h-px mt-[-16662.89px] ml-[-8664.00px] object-cover border-0"
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
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="inline-flex items-center gap-[7.89px] p-[7.89px] relative flex-[0_0_auto] bg-[#384254] rounded-[78.95px] hover:bg-[#4a5568] transition-colors"
              aria-label={social.name}
              role="listitem"
            >
              {index === 0 && (
                <div className="relative w-[18.95px] h-[18.95px] overflow-hidden">
                  <img
                    className="absolute w-[83.33%] h-[83.33%] top-[-90795.27%] left-[-51460.00%]"
                    alt=""
                    src={social.icon}
                  />
                </div>
              )}
              {index === 1 && (
                <div className="relative w-[18.95px] h-[18.95px]">
                  <img
                    className="absolute w-[100.00%] h-[70.02%] top-[-90788.61%] left-[-51693.33%]"
                    alt=""
                    src={social.icon}
                  />
                </div>
              )}
              {index === 2 && (
                <img
                  className="relative w-[18.95px] h-[18.95px] mt-[-17197.00px] ml-[-9829.26px]"
                  alt=""
                  src={social.icon}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
