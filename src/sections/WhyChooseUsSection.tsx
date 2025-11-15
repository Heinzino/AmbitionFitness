import React from "react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

export const WhyChooseUsSection = (): JSX.Element => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Personal Training",
      description:
        "Unlock customized 1-on-1 training built around your goals, schedule, and fitness level. Real results, no guesswork.",
      image: "/img/image-1.png",
      imageAlt: "Personal Training",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Memberships",
      description:
        "Choose the plan that fits your lifestyle and stay consistent with full access, support, and a community that keeps you motivated.",
      image: "/img/rectangle-6538.png",
      imageAlt: "Memberships",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "Group Sessions",
      description:
        "Train with others, stay energized, and push harder with fun, instructor-led group workouts for every fitness level.",
      image: "/img/rectangle-6538-1.png",
      imageAlt: "Group Sessions",
      imagePosition: "left",
    },
  ];

  return (
    <section className="flex flex-col w-[1203px] items-center gap-[50px] absolute top-[4290px] left-[calc(50.00%_-_601px)]">
      <header className="flex flex-col items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-[15px] text-center tracking-[0.45px] leading-[24.0px] whitespace-nowrap">
            Our Services
          </p>

          <img
            className="relative w-[110.67px] h-[2.97px]"
            alt=""
            src="/img/rectangle-5-4.svg"
            aria-hidden="true"
          />
        </div>

        <h2 className="relative flex items-center justify-center self-stretch h-[57.36px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[45px] text-center tracking-[0] leading-[45px]">
          Feature Products
        </h2>
      </header>

      <div className="flex flex-col items-end gap-[70px] relative self-stretch w-full flex-[0_0_auto]">
        {services.map((service) => (
          <article
            key={service.id}
            className="flex items-center gap-[50px] relative self-stretch w-full flex-[0_0_auto] shadow-[0px_3.22px_40.31px_#0000000d]"
          >
            {service.imagePosition === "left" && (
              <img
                className="relative flex-1 grow h-[395.85px] object-cover"
                alt={service.imageAlt}
                src={service.image}
              />
            )}

            <div className="flex flex-col items-start gap-[11.29px] p-5 relative flex-1 grow">
              <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="relative self-stretch h-[38px] mt-[-0.81px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-3xl tracking-[0.60px] leading-[30px]">
                  {service.title}
                </h3>

                <p className="relative flex items-center justify-center self-stretch opacity-80 [font-family:'Montserrat',Helvetica] font-normal text-white text-lg tracking-[0] leading-[27px]">
                  {service.description}
                </p>

                <button
                  className="inline-flex h-14 items-center justify-center gap-2.5 px-[35px] py-[15px] relative rounded-[1000px] border border-solid border-variable-collection-coloryellow cursor-pointer transition-transform hover:scale-105 active:scale-95"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                    Learn More
                  </span>

                  <img
                    className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
                    alt=""
                    src="/img/line-108-4.svg"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            {service.imagePosition === "right" && (
              <img
                className="relative flex-1 grow h-[395.85px] object-cover"
                alt={service.imageAlt}
                src={service.image}
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
