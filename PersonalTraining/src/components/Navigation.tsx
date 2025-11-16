import React, { useState } from "react";
import { Link } from "react-router-dom";

const navigationItems = [
  { label: "Home", href: "/", isActive: false },
  { label: "Personal Training", href: "/personal-training", isActive: true },
  { label: "Memberships", href: "/memberships", isActive: false },
  { label: "Group Sessions", href: "/group-sessions", isActive: false },
  { label: "Virtual Tour", href: "/virtual-tour", isActive: false },
];

export const Navigation = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <header className="hidden lg:inline-flex items-start gap-[221px] absolute top-[15px] left-[360px]">
        <img
          className="relative w-[95px] h-[102.62px] aspect-[0.93] object-cover"
          alt="Ambition Fitness Logo"
          src="/img/image-3-2-1.png"
        />

        <nav className="inline-flex items-center justify-end gap-10 relative flex-[0_0_auto]">
          <ul className="inline-flex items-center gap-[30px] relative flex-[0_0_auto]">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  className={`relative flex items-center justify-center w-fit mt-[-1.03px] [font-family:'Inter',Helvetica] font-medium ${
                    item.isActive ? "text-variable-collection-coloryellow" : "text-white"
                  } text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap`}
                  to={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="inline-flex items-center justify-center gap-[10.33px] px-[23px] py-[15.49px] relative flex-[0_0_auto] bg-variable-collection-coloryellow rounded-[12.39px]">
            <span className="relative flex items-center justify-center w-fit mt-[-1.55px] font-16-medium font-[number:var(--16-medium-font-weight)] text-variable-collection-colorpriamry text-[length:var(--16-medium-font-size)] text-center tracking-[var(--16-medium-letter-spacing)] leading-[var(--16-medium-line-height)] whitespace-nowrap [font-style:var(--16-medium-font-style)]">
              Get in Touch
            </span>

            <img
              className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
              alt=""
              src="/img/line-108-3.svg"
            />
          </button>
        </nav>
      </header>

      {/* Mobile Navigation - Hidden on desktop */}
      <header className="lg:hidden fixed top-0 left-0 w-full bg-black z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <img
            className="w-[60px] h-[65px] object-cover"
            alt="Ambition Fitness Logo"
            src="/img/image-3-2-1.png"
          />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[80px] bg-black z-40">
            <div className="flex flex-col items-center justify-center h-full px-4">
              <div className="flex flex-col items-center gap-8 w-full max-w-sm">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    className={`[font-family:'Inter',Helvetica] font-medium ${
                      item.isActive ? "text-variable-collection-coloryellow" : "text-white"
                    } text-xl text-center tracking-[0] leading-[27px] whitespace-nowrap`}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <button className="inline-flex items-center justify-center gap-[10.33px] px-[23px] py-[15.49px] bg-variable-collection-coloryellow rounded-[12.39px] mt-4">
                  <span className="font-16-medium font-[number:var(--16-medium-font-weight)] text-variable-collection-colorpriamry text-[length:var(--16-medium-font-size)] text-center tracking-[var(--16-medium-letter-spacing)] leading-[var(--16-medium-line-height)] whitespace-nowrap [font-style:var(--16-medium-font-style)]">
                    Get in Touch
                  </span>

                  <img
                    className="w-[18.33px] h-[11.41px]"
                    alt=""
                    src="/img/line-108-3.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header on mobile */}
      <div className="lg:hidden h-[80px]" />
    </>
  );
};