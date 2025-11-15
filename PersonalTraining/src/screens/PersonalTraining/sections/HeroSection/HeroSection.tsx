import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[780px] items-center justify-center gap-10 px-[60px] py-[50px] absolute top-[188px] left-[calc(50.00%_-_390px)] bg-[#0000000f] rounded-xl backdrop-blur-[17px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17px)_brightness(100%)]">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-transparent text-[65px] text-center tracking-[0] leading-[78.7px]">
              <span className="text-[#f0f0f0]">Unlock Your </span>
              <span className="text-[#fedf41]">Strongest</span>
              <span className="text-[#f0f0f0]"> Self</span>
            </h1>
          </div>

          <p className="relative self-stretch opacity-[0.99] [font-family:'Montserrat',Helvetica] font-medium text-white text-[22px] text-center tracking-[0] leading-[35.2px]">
            Transform your body and mind with personalized training built around
            you. Move better, feel stronger, and reach your goals faster.
          </p>
        </div>
      </div>

      <button
        className="inline-flex items-center justify-center gap-2.5 px-[35px] py-[15px] relative flex-[0_0_auto] bg-variable-collection-coloryellow rounded-[1000px] cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-variable-collection-coloryellow focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label="Start your transformation today"
      >
        <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorpriamry text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
          Start your transformation today
        </span>

        <img
          className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
          alt=""
          src="/img/line-108-3.svg"
          aria-hidden="true"
        />
      </button>
    </section>
  );
};
