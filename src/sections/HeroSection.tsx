import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[783px] items-start justify-center gap-10 absolute top-[272px] left-[357px]">
      <header className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-transparent text-[65px] tracking-[0] leading-[78.7px]">
              <span className="text-[#f0f0f0]">Calgary's Elite </span>
              <span className="text-[#fedf41]">Personal Training</span>
              <span className="text-[#f0f0f0]"> Services</span>
            </h1>
          </div>

          <p className="relative self-stretch h-[87px] opacity-[0.99] [font-family:'Montserrat',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-[35.2px]">
            If you GUARANTEE your COMMITMENT,
            <br />
            we GUARANTEE your RESULTS!
          </p>
        </div>
      </header>

      <button
        className="flex-[0_0_auto] bg-variable-collection-coloryellow inline-flex items-center justify-center gap-2.5 px-[35px] py-[15px] relative rounded-[1000px] cursor-pointer transition-transform hover:scale-105 active:scale-95"
        type="button"
        aria-label="Book a FREE Consultation"
      >
        <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorpriamry text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
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
