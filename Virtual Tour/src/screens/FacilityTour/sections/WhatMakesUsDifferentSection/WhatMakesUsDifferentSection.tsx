import React from "react";

export const WhatMakesUsDifferentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[780px] items-center justify-center gap-[30px] absolute top-[181px] left-[calc(50.00%_-_390px)] rounded-xl">
      <div className="flex flex-col items-center gap-11 relative self-stretch w-full flex-[0_0_auto]">
        <header className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-transparent text-[65px] text-center tracking-[0] leading-[78.7px]">
              <span className="text-[#fedf41]">Tour</span>
              <span className="text-[#f0f0f0]"> Our Facility</span>
            </h1>
          </div>

          <p className="relative self-stretch opacity-[0.99] [font-family:'Montserrat',Helvetica] font-medium text-white text-[22px] text-center tracking-[0] leading-[35.2px]">
            A private, premium fitness space designed for your success
          </p>
        </header>

        <button
          className="inline-flex items-center justify-center gap-2.5 px-[29px] py-3 relative flex-[0_0_auto] bg-variable-collection-coloryellow rounded-[1000px] cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-variable-collection-coloryellow focus:ring-offset-2 focus:ring-offset-transparent"
          type="button"
          aria-label="Book In-Person Tour"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorpriamry text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
            Book In-Person Tour
          </span>

          <svg
            className="relative w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 0.666667H0V0.666667H0Z"
              stroke="currentColor"
              strokeWidth="1"
              className="text-variable-collection-colorpriamry"
            />
            <path
              d="M10.0013 0.666667H10.0013V0.666667H10.0013Z"
              stroke="currentColor"
              strokeWidth="1"
              className="text-variable-collection-colorpriamry"
            />
            <path
              d="M1.33333 2V14H13.3333V2H1.33333Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-variable-collection-colorpriamry"
            />
            <path
              d="M1.33333 6H13.3333"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-variable-collection-colorpriamry"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
