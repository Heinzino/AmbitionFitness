import React from "react";
import { Link } from "react-router-dom";

const navigationItems = [
  { label: "Home", href: "/", isActive: false },
  { label: "Personal Training", href: "/personal-training", isActive: false },
  { label: "Memberships", href: "/memberships", isActive: false },
  { label: "Group Sessions", href: "/group-sessions", isActive: true },
  { label: "Virtual Tour", href: "/virtual-tour", isActive: false },
];

export const SeniorFitnessSection = (): JSX.Element => {
  return (
    <header className="inline-flex items-start gap-[221px] absolute top-[15px] left-[360px]">
      <Link to="/" aria-label="Home">
        <img
          className="relative w-[95px] h-[102.62px] aspect-[0.93] object-cover"
          alt="Company Logo"
          src="/img/image-3-2-1.png"
        />
      </Link>

      <div className="inline-flex items-center justify-end gap-10 relative flex-[0_0_auto]">
        <nav
          className="inline-flex items-center gap-[30px] relative flex-[0_0_auto]"
          aria-label="Main navigation"
        >
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`relative flex items-center justify-center w-fit mt-[-1.03px] [font-family:'Inter',Helvetica] font-medium text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap ${
                item.isActive
                  ? "text-variable-collection-coloryellow"
                  : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-[10.33px] px-[23px] py-[15.49px] relative flex-[0_0_auto] bg-variable-collection-coloryellow rounded-[12.39px] hover:opacity-90 transition-opacity"
          aria-label="Contact us"
        >
          <span className="relative flex items-center justify-center w-fit mt-[-1.55px] font-16-medium font-[number:var(--16-medium-font-weight)] text-variable-collection-colorpriamry text-[length:var(--16-medium-font-size)] text-center tracking-[var(--16-medium-letter-spacing)] leading-[var(--16-medium-line-height)] whitespace-nowrap [font-style:var(--16-medium-font-style)]">
            Get in Touch
          </span>

          <img
            className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
            alt=""
            src="/img/line-108-1.svg"
            aria-hidden="true"
          />
        </Link>
      </div>
    </header>
  );
};
