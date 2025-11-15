import React from "react";

const features = [
  {
    id: 1,
    title: "Never Crowded",
    description:
      "Our limited membership model ensures you always have access to the equipment you need, when you need it. No more waiting, no more frustration.",
  },
  {
    id: 2,
    title: "Always Clean",
    description:
      "We take pride in maintaining a spotless facility. Equipment is sanitized daily, and our space is always ready for your workout.",
  },
  {
    id: 3,
    title: "Non-Intimidating",
    description:
      "We've created a welcoming environment where everyone feels comfortable, regardless of fitness level or experience. This is your space to grow.",
  },
  {
    id: 4,
    title: "Private Access",
    description:
      "Secure 24/7 access means you can train on your schedule. Early morning or late night, we're here when you need us.",
  },
];

export const FacilityGallerySection = (): JSX.Element => {
  return (
    <section className="inline-flex justify-center top-[3551px] left-[calc(50.00%_-_598px)] flex-col items-center absolute">
      <div className="flex flex-col max-w-[1196px] w-[1196px] items-start gap-12 relative flex-[0_0_auto]">
        <header className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-neutral-50 text-[45px] text-center tracking-[0] leading-[60px]">
            What Makes Us Different
          </h2>
        </header>

        <div className="flex flex-col items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
            {features.slice(0, 2).map((feature) => (
              <article
                key={feature.id}
                className="flex flex-col items-start gap-1.5 p-[33px] relative flex-1 self-stretch grow bg-black rounded-xl shadow-[0px_1px_2px_#0000000d]"
              >
                <div className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-10">
                    {feature.title}
                  </h3>
                </div>

                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-[#eeeeee] text-[16.7px] tracking-[0] leading-7">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            {features.slice(2, 4).map((feature) => (
              <article
                key={feature.id}
                className="flex flex-col items-start gap-1.5 p-[33px] relative flex-1 self-stretch grow bg-black rounded-xl shadow-[0px_1px_2px_#0000000d]"
              >
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-10">
                    {feature.title}
                  </h3>
                </div>

                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-[#eeeeee] text-[17px] tracking-[0] leading-7">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
