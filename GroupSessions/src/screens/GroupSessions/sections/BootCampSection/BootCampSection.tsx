import React from "react";

export const BootCampSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[780px] items-center justify-center gap-10 absolute top-[203px] left-[calc(50.00%_-_390px)] rounded-xl">
      <header className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-transparent text-[65px] text-center tracking-[0] leading-[78.7px]">
              <span className="text-[#f0f0f0]">Group </span>
              <span className="text-[#fedf41]">Sessions</span>
            </h1>
          </div>

          <p className="relative self-stretch opacity-[0.99] [font-family:'Montserrat',Helvetica] font-medium text-white text-[22px] text-center tracking-[0] leading-[35.2px]">
            Train together, achieve together in our supportive group classes
          </p>
        </div>
      </header>
    </section>
  );
};
