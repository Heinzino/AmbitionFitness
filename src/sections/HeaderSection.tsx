import React from "react";

const features = [
  {
    icon: "/img/frame-1984077927.svg",
    title: "Expert Training, Lasting Results",
    description:
      "Certified trainers, personalized plans, real results. We guide your fitness journey with expert support and motivation.",
  },
  {
    icon: "/img/frame-1984077928.svg",
    title: "Your Success, Our Commitment",
    description:
      "Adapting new fitness habits is hard. We make fitness a lifestyle, helping you build healthy habits for lasting results.",
  },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <>
      {/* Desktop Version - Hidden on mobile/tablet */}
      <section className="hidden lg:inline-flex items-center gap-[50px] absolute top-[1336px] left-[calc(50.00%_-_600px)]">
        <img
          className="relative w-[520px] h-[688px] object-cover"
          alt="Fitness trainer working with client"
          src="/img/rectangle-6540.webp"
          width={520}
          height={688}
          loading="lazy"
        />

        <div className="flex flex-col w-[631px] items-start gap-[30px] relative">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <header className="flex flex-col w-[559px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                <h2 className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-[15px] text-center tracking-[0.45px] leading-[24.0px] whitespace-nowrap">
                  Who We Are
                </h2>

                <img
                  className="relative w-[110.67px] h-[2.97px]"
                  alt=""
                  src="/img/rectangle-5-4.svg"
                  aria-hidden="true"
                />
              </div>

              <h3 className="relative self-stretch [font-family:'Montserrat',Helvetica] font-semibold text-white text-[45px] tracking-[0] leading-[54.0px]">
                Personalized Fitness, Real Results
              </h3>
            </header>

            <p className="relative self-stretch h-[77px] opacity-80 [font-family:'Montserrat',Helvetica] font-normal text-[#feffff] text-base tracking-[0] leading-[25.6px]">
              Our trainers take your fitness goals seriously. We assess your body
              type, BMI, and metabolism to create a personalized plan that helps
              you overcome challenges and achieve lasting results.
            </p>
          </div>

          <hr
            className="relative self-stretch w-full h-px object-cover border-0 bg-white opacity-20"
            aria-hidden="true"
          />

          <div className="flex items-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
            {features.map((feature, index) => (
              <article
                key={index}
                className="flex flex-col w-[300.5px] items-start gap-[25px] relative"
              >
                <div className="flex items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative w-11 h-11"
                    alt=""
                    src={feature.icon}
                    aria-hidden="true"
                  />

                  <h4 className="relative w-[184px] mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[17px] tracking-[0.17px] leading-[23.0px]">
                    {feature.title}
                  </h4>
                </div>

                <p className="relative self-stretch opacity-80 [font-family:'Montserrat',Helvetica] font-normal text-[#feffff] text-base tracking-[0] leading-[25.6px]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          <a
            href="/contact"
            className="inline-flex h-14 items-center justify-center gap-2.5 px-[35px] py-[15px] relative rounded-[1000px] border border-solid border-variable-collection-coloryellow bg-transparent cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-variable-collection-coloryellow focus:ring-offset-2 focus:ring-offset-variable-collection-colorpriamry"
            aria-label="Talk to a Trainer"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              Talk to a Trainer
            </span>

            <img
              className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
              alt=""
              src="/img/line-108-6.svg"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>

      {/* Mobile/Tablet Version - Hidden on desktop */}
      <section className="lg:hidden flex flex-col items-center gap-8 md:gap-10 px-4 md:px-8 py-12 md:py-16 w-full">
        <img
          className="w-full max-w-[520px] h-auto object-cover rounded-lg"
          alt="Fitness trainer working with client"
          src="/img/rectangle-6540-sm.webp"
          srcSet="/img/rectangle-6540-sm.webp 380w, /img/rectangle-6540.webp 520w"
          sizes="(max-width: 520px) 100vw, 520px"
          width={520}
          height={688}
          loading="lazy"
        />

        <div className="flex flex-col w-full max-w-[631px] items-start gap-6">
          <div className="flex flex-col items-start gap-5 w-full">
            <header className="flex flex-col w-full items-start gap-2.5">
              <div className="inline-flex items-center gap-1.5">
                <h2 className="[font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-[15px] text-center tracking-[0.45px] leading-[24.0px] whitespace-nowrap">
                  Who We Are
                </h2>

                <img
                  className="w-[110.67px] h-[2.97px]"
                  alt=""
                  src="/img/rectangle-5-4.svg"
                  aria-hidden="true"
                />
              </div>

              <h3 className="w-full [font-family:'Montserrat',Helvetica] font-semibold text-white text-3xl md:text-4xl tracking-[0] leading-tight">
                Personalized Fitness, Real Results
              </h3>
            </header>

            <p className="w-full opacity-80 [font-family:'Montserrat',Helvetica] font-normal text-[#feffff] text-sm md:text-base tracking-[0] leading-[25.6px]">
              Our trainers take your fitness goals seriously. We assess your body
              type, BMI, and metabolism to create a personalized plan that helps
              you overcome challenges and achieve lasting results.
            </p>
          </div>

          <hr
            className="w-full h-px border-0 bg-white opacity-20"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6 w-full">
            {features.map((feature, index) => (
              <article
                key={index}
                className="flex flex-col items-start gap-4 w-full"
              >
                <div className="flex items-center gap-[15px] w-full">
                  <img
                    className="w-11 h-11 flex-shrink-0"
                    alt=""
                    src={feature.icon}
                    aria-hidden="true"
                  />

                  <h4 className="flex-1 [font-family:'Montserrat',Helvetica] font-semibold text-white text-base md:text-[17px] tracking-[0.17px] leading-[23.0px]">
                    {feature.title}
                  </h4>
                </div>

                <p className="w-full opacity-80 [font-family:'Montserrat',Helvetica] font-normal text-[#feffff] text-sm md:text-base tracking-[0] leading-[25.6px]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          <a
            href="/contact"
            className="inline-flex h-14 items-center justify-center gap-2.5 px-6 md:px-[35px] py-3 md:py-[15px] rounded-[1000px] border border-solid border-variable-collection-coloryellow bg-transparent cursor-pointer transition-transform hover:scale-105 active:scale-95 w-full md:w-auto"
            aria-label="Talk to a Trainer"
          >
            <span className="[font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-sm md:text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              Talk to a Trainer
            </span>

            <img
              className="w-[18.33px] h-[11.41px]"
              alt=""
              src="/img/line-108-6.svg"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>
    </>
  );
};
