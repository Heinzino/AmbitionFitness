import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[1010px] items-center justify-center gap-10 p-[60px] absolute top-[6255px] left-[calc(50.00%_-_505px)] bg-variable-collection-coloryellow rounded-xl">
      <div className="flex flex-col items-start justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Prompt',Helvetica] font-medium text-variable-collection-colorpriamry text-5xl text-center tracking-[0] leading-[53.3px]">
          Get Started Today!
        </h2>

        <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#222222] text-[21px] text-center tracking-[0] leading-[31.5px]">
          If you are ready to start living a healthy lifestyle, message me to
          get started! Everyone has a unique situation, and I&#39;ll strive to
          accommodate yours.
        </p>
      </div>

      <button
        className="inline-flex h-14 items-center justify-center gap-[13px] px-6 py-5 relative bg-variable-collection-colorpriamry rounded-xl overflow-hidden cursor-pointer transition-opacity hover:opacity-90"
        aria-label="Get Started Today"
      >
        <span className="relative w-fit mt-[-6.00px] mb-[-2.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
          Get Started Today
        </span>

        <img
          className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
          alt=""
          src="/img/line-108-2.svg"
          aria-hidden="true"
        />
      </button>
    </section>
  );
};
