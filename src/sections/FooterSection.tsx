import React from "react";

interface FooterLink {
  text: string;
  href?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: string;
  alt: string;
  href?: string;
}

export const FooterSection = (): JSX.Element => {
  const footerColumns: FooterColumn[] = [
    {
      title: "Services",
      links: [
        { text: "Personal Training", href: "/personal-training" },
        { text: "Group Classes" },
        { text: "Online Training" },
      ],
    },
    {
      title: "Service Area",
      links: [
        { text: "Mayland Heights" },
        { text: "Meridian" },
        { text: "Raddison Heights" },
        { text: "Bridgeland-Riverside" },
      ],
    },
    {
      title: "Company",
      links: [{ text: "Home", href: "/" }, { text: "Blog" }, { text: "Contact Us", href: "/contact" }],
    },
  ];

  const socialLinks: SocialLink[] = [
    { icon: "/img/instagram-icon.svg", alt: "Instagram", href: "https://www.instagram.com/ambitionfitness.ca" },
  ];

  return (
    <footer className="flex flex-col w-full lg:w-[1920px] items-start justify-center gap-6 md:gap-[30px] pt-12 md:pt-16 lg:pt-[110px] pb-6 md:pb-[30px] px-4 md:px-8 lg:px-[360px] relative lg:absolute lg:top-[8050px] lg:left-[calc(50.00%_-_960px)]">
      <div className="flex flex-col items-start gap-12 md:gap-20 self-stretch w-full">
        <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-[31px] self-stretch w-full">
          <div className="flex flex-col w-full lg:w-[414px] items-start justify-center gap-4 pr-0 lg:pr-5">
            <img
              className="w-[50px] md:w-[63px] h-auto aspect-[0.93] object-cover"
              alt="Ambition Fitness Logo"
              src="/img/image-3-2-1.png"
            />

            <p className="self-stretch [font-family:'Montserrat',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[22.4px]">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-[31px] flex-1 w-full">
            {footerColumns.map((column, index) => (
              <nav
                key={index}
                className="flex flex-col items-start gap-[13px]"
                aria-label={column.title}
              >
                <h3 className="self-stretch [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-base tracking-[0] leading-[26px]">
                  {column.title}
                </h3>

                <ul className="flex flex-col items-start justify-center gap-1 self-stretch w-full opacity-80">
                  {column.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="w-fit [font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[26px] whitespace-nowrap"
                    >
                      <a
                        href={link.href || "#"}
                        className="hover:text-[#fedf41] transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <hr
          className="self-stretch w-full h-px border-0 bg-white opacity-20"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 self-stretch w-full">
        <p className="w-fit [font-family:'Montserrat',Helvetica] font-normal text-[#e4e4e4] text-sm md:text-base text-center tracking-[0] leading-[normal]">
          Copyright © 2025 Ambition Fitness - All Rights Reserved.
        </p>

        <div className="inline-flex items-start gap-[7.89px] opacity-60">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-[10px] bg-[#384254] rounded-full hover:bg-[#4a5568] transition-colors"
              aria-label={social.alt}
            >
              <img
                className="w-5 h-5"
                alt={social.alt}
                src={social.icon}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
