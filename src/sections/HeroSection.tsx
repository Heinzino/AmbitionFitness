import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full lg:w-[783px] items-start justify-center gap-6 md:gap-10 px-4 md:px-8 lg:px-0 pt-24 pb-12 md:py-16 lg:py-0 relative lg:absolute lg:top-[272px] lg:left-[357px] z-10">
      <header className="flex flex-col items-start gap-4 md:gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-6 md:gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-[65px] tracking-[0] leading-tight md:leading-tight lg:leading-[78.7px]">
              <span className="text-[#f0f0f0]">Calgary's Elite </span>
              <span className="text-[#fedf41]">Personal Training</span>
              <span className="text-[#f0f0f0]"> Services</span>
            </h1>
          </div>

          <p className="relative self-stretch lg:h-[87px] opacity-[0.99] [font-family:'Montserrat',Helvetica] font-medium text-white text-lg md:text-xl lg:text-[22px] tracking-[0] leading-relaxed md:leading-[35.2px]">
            If you GUARANTEE your COMMITMENT,
            <br />
            we GUARANTEE your RESULTS!
          </p>
        </div>
      </header>

      <button
        className="flex-[0_0_auto] bg-variable-collection-coloryellow inline-flex items-center justify-center gap-2.5 px-6 md:px-[35px] py-3 md:py-[15px] relative rounded-[1000px] cursor-pointer transition-transform hover:scale-105 active:scale-95 w-full md:w-auto"
        type="button"
        aria-label="Book a FREE Consultation"
      >
        <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorpriamry text-sm md:text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
          Book a FREE Consultation!
        </span>

        <img
          className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
          alt=""
          src="/img/line-108-1.svg"
          aria-hidden="true"
        />
      </button>
    </section>
  );
};
