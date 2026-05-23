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
        { text: "Memberships", href: "/memberships" },
        { text: "Group Classes" },
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
      links: [
        { text: "Home", href: "/" },
        { text: "Blog", href: "/blog" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" },
      ],
    },
  ];

  const socialLinks: SocialLink[] = [
    { icon: "/img/instagram-icon.svg", alt: "Instagram", href: "https://www.instagram.com/ambitionfitness.ca" },
  ];

  return (
    <footer className="flex flex-col w-full lg:w-[1920px] items-start justify-center gap-6 md:gap-[30px] pt-12 md:pt-16 lg:pt-[110px] pb-6 md:pb-8 px-4 md:px-8 lg:px-[360px] relative lg:absolute lg:top-[8050px] lg:left-[calc(50.00%_-_960px)]">
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

            <div className="flex flex-col items-start gap-2 text-sm [font-family:'Montserrat',Helvetica]">
              <a
                href="https://maps.google.com/?q=1440+52+St+NE+%23130,+Calgary,+AB+T2A+4T8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[#ebebeb] hover:text-[#fedf41] transition-colors"
              >
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
                <span>
                  1440 52 St NE #130<br />Calgary, AB T2A 4T8
                </span>
              </a>
              <a
                href="tel:403-507-3099"
                className="flex items-center gap-2 text-[#ebebeb] hover:text-[#fedf41] transition-colors"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>403-507-3099</span>
              </a>
              <a
                href="mailto:info@ambitionfitness.ca"
                className="flex items-center gap-2 text-[#ebebeb] hover:text-[#fedf41] transition-colors break-all"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>info@ambitionfitness.ca</span>
              </a>
            </div>
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
