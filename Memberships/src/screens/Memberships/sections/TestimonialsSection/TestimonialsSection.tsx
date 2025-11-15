import React from "react";

interface ButtonData {
  text: string;
  icon: {
    type: "calendar" | "message";
  };
}

export const TestimonialsSection = (): JSX.Element => {
  const buttons: ButtonData[] = [
    {
      text: "Book a Tour",
      icon: { type: "calendar" },
    },
    {
      text: "Ask about Membership",
      icon: { type: "message" },
    },
  ];

  const renderIcon = (type: "calendar" | "message") => {
    if (type === "calendar") {
      return (
        <div className="relative w-4 h-4">
          <img
            className="absolute w-0 h-[16.67%] top-[4.16%] left-[29.17%]"
            alt=""
            src="/img/vector-17.svg"
          />
          <img
            className="absolute w-0 h-[16.67%] top-[4.16%] left-[62.50%]"
            alt=""
            src="/img/vector-17.svg"
          />
          <img
            className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[8.33%]"
            alt=""
            src="/img/vector-18.svg"
          />
          <img
            className="absolute w-[75.00%] h-0 top-[37.50%] left-[8.33%]"
            alt=""
            src="/img/vector-19.svg"
          />
        </div>
      );
    } else {
      return (
        <div className="relative w-4 h-4">
          <img
            className="absolute w-[82.87%] h-[83.03%] top-[4.16%] left-[4.64%]"
            alt=""
            src="/img/vector-20.svg"
          />
        </div>
      );
    }
  };

  return (
    <section
      className="flex flex-col w-[748px] items-start gap-11 px-[49px] py-10 absolute top-[1416px] left-[calc(50.00%_-_595px)] bg-black rounded-xl border border-solid border-[#363d49] shadow-[0px_1px_2px_#0000000d]"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          <h2
            id="testimonials-heading"
            className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-neutral-50 text-[45px] text-center tracking-[0] leading-[60px]"
          >
            Why Ambition Fitness?
          </h2>
        </div>

        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6">
            We&#39;re not your typical gym. Our limited membership model ensures
            you&#39;ll never fight for
            <br />
            equipment or feel lost in the crowd. <br />
            <br />
            With 24/7 access, no contracts, and a supportive
            <br />
            environment, you can focus on what matters most - your fitness
            journey.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="inline-flex items-center justify-center gap-2.5 px-[35px] py-[15px] relative flex-[0_0_auto] bg-variable-collection-coloryellow rounded-[1000px] cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-variable-collection-coloryellow focus:ring-offset-2 focus:ring-offset-black"
            type="button"
            aria-label={button.text}
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorpriamry text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              {button.text}
            </span>
            {renderIcon(button.icon.type)}
          </button>
        ))}
      </div>
    </section>
  );
};
