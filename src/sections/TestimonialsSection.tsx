import React from "react";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[1200px] items-center gap-12 absolute top-[6903px] left-[calc(50.00%_-_600px)]">
      <header className="flex flex-col w-[1010px] items-start justify-center gap-5 relative flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Prompt',Helvetica] font-medium text-white text-5xl text-center tracking-[0] leading-[53.3px]">
          Find Us Near You
        </h2>

        <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#ffffffcc] text-[21px] text-center tracking-[0] leading-[31.5px]">
          Discover expert trainers and partners available in your area.
        </p>
      </header>

      <img
        className="relative self-stretch w-full h-[494px] object-cover"
        alt="Map showing locations of trainers and partners near you"
        src="/img/rectangle-6541.png"
      />
    </section>
  );
};
