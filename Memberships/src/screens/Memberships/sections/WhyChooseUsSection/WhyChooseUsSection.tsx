import React from "react";

const MEMBERSHIP_BENEFITS = [
  "Full access to all equipment and facilities",
  "Free initial fitness assessment",
  "Personalized workout program setup",
  "Member-only events and challenges",
  "Complimentary guest passes",
  "Online member portal and app",
  "Clean, sanitized equipment daily",
  "Free parking and secure entry",
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col w-[734px] items-start gap-12 absolute top-[2032px] left-[calc(50.00%_-_367px)]"
      aria-labelledby="whats-included-heading"
    >
      <div className="flex flex-col w-[781px] items-center relative flex-[0_0_auto] mr-[-47.00px]">
        <h2
          id="whats-included-heading"
          className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-neutral-50 text-[45px] text-center tracking-[0] leading-[60px]"
        >
          What&#39;s Included
        </h2>
      </div>

      <ul
        className="grid grid-cols-2 grid-rows-4 w-[calc(100%_+_47px)] h-[184px] gap-[24px_0px] absolute top-[108px] left-0"
        role="list"
      >
        {MEMBERSHIP_BENEFITS.map((benefit, index) => (
          <li
            key={index}
            className={`relative row-[${Math.floor(index / 2) + 1}_/_${Math.floor(index / 2) + 2}] col-[${(index % 2) + 1}_/_${(index % 2) + 2}] w-[343px] h-fit flex items-start gap-3`}
          >
            <div
              className="flex flex-col w-6 h-7 items-start pt-1 pb-0 px-0 relative"
              aria-hidden="true"
            >
              <div className="flex w-6 h-6 items-center justify-center relative bg-[#e2b91233] rounded-full">
                <div className="relative w-3 h-3 bg-[#e2b912] rounded-full" />
              </div>
            </div>

            <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-neutral-50 text-base tracking-[0] leading-7 whitespace-nowrap">
              {benefit}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
