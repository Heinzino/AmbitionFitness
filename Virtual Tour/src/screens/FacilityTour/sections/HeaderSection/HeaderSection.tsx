import React from "react";

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[1200px] items-start gap-12 absolute top-[574px] left-[calc(50.00%_-_600px)]">
      <header className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <div
          className="relative w-16 h-16"
          role="img"
          aria-label="Virtual tour icon"
        >
          <img
            className="absolute w-[83.33%] h-[66.67%] top-[12.50%] left-[4.17%]"
            alt=""
            src="/img/vector-6.svg"
          />

          <img
            className="absolute w-[25.00%] h-[25.00%] top-[37.50%] left-[33.33%]"
            alt=""
            src="/img/vector-7.svg"
          />
        </div>

        <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-neutral-50 text-[45px] text-center tracking-[0] leading-[60px]">
            Virtual Tour
          </h1>

          <p className="relative flex items-center justify-center self-stretch [font-family:'Montserrat',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-7">
            Explore our facility from the comfort of your home
          </p>
        </div>
      </header>

      <div className="flex-col items-start p-px relative self-stretch w-full flex-[0_0_auto] bg-[#191919] overflow-hidden flex rounded-xl shadow-[0px_1px_2px_#0000000d]">
        <div className="flex-[0_0_auto] rounded-xl backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] bg-[url(/img/overlay.png)] relative self-stretch w-full bg-cover bg-[50%_50%]">
          <div className="absolute right-0 bottom-0 w-[1199px] h-[575px] bg-[#0000004c] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]" />
        </div>

        <div className="inline-flex flex-col items-center gap-4 absolute top-[calc(50.00%_-_54px)] left-[calc(50.00%_-_98px)]">
          <div
            className="relative w-16 h-16"
            role="img"
            aria-label="360 degree tour icon"
          >
            <img
              className="absolute w-[83.33%] h-[66.67%] top-[12.50%] left-[4.17%]"
              alt=""
              src="/img/vector-6.svg"
            />

            <img
              className="absolute w-[25.00%] h-[25.00%] top-[37.50%] left-[33.33%]"
              alt=""
              src="/img/vector-7.svg"
            />
          </div>

          <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-7 whitespace-nowrap">
              360° Virtual Tour Embed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
