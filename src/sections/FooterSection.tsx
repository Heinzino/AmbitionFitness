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
        { text: "Personal Training" },
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
      links: [{ text: "Home" }, { text: "Blog" }, { text: "Contact Us" }],
    },
  ];

  const socialLinks: SocialLink[] = [
    { icon: "/img/instagram-icon.svg", alt: "Instagram", href: "https://www.instagram.com/ambitionfitness.ca" },
  ];

  return (
    <footer className="flex flex-col w-[1920px] items-start justify-center gap-[30px] pt-[110px] pb-[30px] px-[360px] absolute top-[8050px] left-[calc(50.00%_-_960px)]">
      <div className="flex flex-col items-start gap-20 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start gap-[31px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[414px] items-start justify-center gap-4 pl-0 pr-5 py-0 relative">
            <img
              className="relative w-[63px] h-[68.05px] aspect-[0.93] object-cover"
              alt="Ambition Fitness Logo"
              src="/img/image-3-2-1.png"
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

          {footerColumns.map((column, index) => (
            <nav
              key={index}
              className="flex flex-col items-start gap-[13px] relative flex-1 grow"
              aria-label={column.title}
            >
              <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-base tracking-[0] leading-[26px]">
                {column.title}
              </h3>

              <ul className="flex flex-col items-start justify-center gap-1 relative self-stretch w-full flex-[0_0_auto] opacity-80">
                {column.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className={`relative w-fit ${
                      linkIndex === 0 ? "mt-[-1.00px]" : ""
                    } [font-family:'Montserrat',Helvetica] font-normal text-white text-sm tracking-[0] leading-[26px] whitespace-nowrap`}
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

        <hr
          className="relative self-stretch w-full h-px border-0 bg-white opacity-20"
          aria-hidden="true"
        />
      </div>

      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-[#e4e4e4] text-base text-center tracking-[0] leading-[normal]">
          Copyright © 2025 Ambition Fitness - All Rights Reserved.
        </p>

        <div className="inline-flex items-start gap-[7.89px] relative flex-[0_0_auto] opacity-60">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-[10px] relative flex-[0_0_auto] bg-[#384254] rounded-full hover:bg-[#4a5568] transition-colors"
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
