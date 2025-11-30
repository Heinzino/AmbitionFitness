import React from "react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageSrcSet: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  link?: string;
}

export const WhyChooseUsSection = (): JSX.Element => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Personal Training",
      description:
        "Unlock customized 1-on-1 training built around your goals, schedule, and fitness level. Real results, no guesswork.",
      image: "/img/personal-training-photo-sm.webp",
      imageSrcSet: "/img/personal-training-photo-xs.webp 380w, /img/personal-training-photo-sm.webp 480w, /img/personal-training-photo-md.webp 768w, /img/personal-training-photo-lg.webp 1200w",
      imageAlt: "Personal Training",
      imagePosition: "left",
      link: "/personal-training",
    },
    {
      id: 2,
      title: "Memberships",
      description:
        "Choose the plan that fits your lifestyle and stay consistent with full access, support, and a community that keeps you motivated.",
      image: "/img/memberships-photo-sm.webp",
      imageSrcSet: "/img/memberships-photo-xs.webp 380w, /img/memberships-photo-sm.webp 480w, /img/memberships-photo-md.webp 768w, /img/memberships-photo-lg.webp 1200w",
      imageAlt: "Memberships",
      imagePosition: "right",
      link: "/memberships",
    },
    {
      id: 3,
      title: "Group Sessions",
      description:
        "Train with others, stay energized, and push harder with fun, instructor-led group workouts for every fitness level.",
      image: "/img/group-sessions-photo-sm.webp",
      imageSrcSet: "/img/group-sessions-photo-xs.webp 380w, /img/group-sessions-photo-sm.webp 480w, /img/group-sessions-photo-md.webp 768w, /img/group-sessions-photo-lg.webp 1200w",
      imageAlt: "Group Sessions",
      imagePosition: "left",
      link: "/group-sessions",
    },
  ];

  return (
    <section className="flex flex-col w-full lg:w-[1203px] items-center gap-8 md:gap-[50px] px-4 md:px-8 py-12 md:py-16 lg:py-0 mx-auto lg:mx-0 relative lg:absolute lg:top-[4290px] lg:left-[calc(50.00%_-_601px)]">
      <header className="flex flex-col items-center gap-1.5 w-full">
        <div className="inline-flex items-center gap-1.5">
          <p className="[font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-[15px] text-center tracking-[0.45px] leading-[24.0px] whitespace-nowrap">
            Our Services
          </p>

          <img
            className="w-[110.67px] h-[2.97px]"
            alt=""
            src="/img/rectangle-5-4.svg"
            aria-hidden="true"
          />
        </div>

        <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-3xl md:text-4xl lg:text-[45px] text-center tracking-[0] leading-tight">
          Feature Products
        </h2>
      </header>

      <div className="flex flex-col items-center gap-10 md:gap-[70px] w-full">
        {services.map((service) => (
          <article
            key={service.id}
            className="flex flex-col lg:flex-row items-center gap-6 md:gap-[50px] w-full shadow-[0px_3.22px_40.31px_#0000000d] rounded-lg lg:rounded-none overflow-hidden lg:overflow-visible"
          >
            {service.imagePosition === "left" && (
              <img
                className="w-full lg:flex-1 h-[250px] md:h-[350px] lg:h-[395.85px] object-cover"
                alt={service.imageAlt}
                src={service.image}
                srcSet={service.imageSrcSet}
                sizes="(max-width: 1024px) 100vw, 50vw"
                width={768}
                height={505}
                loading="lazy"
              />
            )}

            <div className="flex flex-col items-start gap-4 md:gap-[11.29px] p-4 md:p-5 w-full lg:flex-1">
              <div className="flex flex-col items-start gap-[15px] w-full">
                <h3 className="w-full [font-family:'Montserrat',Helvetica] font-semibold text-white text-2xl md:text-3xl tracking-[0.60px] leading-[30px]">
                  {service.title}
                </h3>

                <p className="w-full opacity-80 [font-family:'Montserrat',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[27px]">
                  {service.description}
                </p>

                {service.link && (
                  <a
                    href={service.link}
                    className="inline-flex h-12 md:h-14 items-center justify-center gap-2.5 px-6 md:px-[35px] py-3 md:py-[15px] rounded-[1000px] border border-solid border-variable-collection-coloryellow cursor-pointer transition-transform hover:scale-105 active:scale-95 w-full md:w-auto"
                  >
                    <span className="[font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-sm md:text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                      Explore {service.title}
                    </span>

                    <img
                      className="w-[18.33px] h-[11.41px]"
                      alt=""
                      src="/img/line-108-4.svg"
                      aria-hidden="true"
                    />
                  </a>
                )}
              </div>
            </div>

            {service.imagePosition === "right" && (
              <img
                className="w-full lg:flex-1 h-[250px] md:h-[350px] lg:h-[395.85px] object-cover order-first lg:order-last"
                alt={service.imageAlt}
                src={service.image}
                srcSet={service.imageSrcSet}
                sizes="(max-width: 1024px) 100vw, 50vw"
                width={768}
                height={505}
                loading="lazy"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
