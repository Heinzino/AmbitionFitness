import React from "react";

interface FeatureItem {
  id: string;
  icon: {
    primary: string;
    secondary?: string;
    primaryStyle: {
      width: string;
      height: string;
      top: string;
      left: string;
    };
    secondaryStyle?: {
      width: string;
      height: string;
      top: string;
      left: string;
    };
  };
  title: string;
  description?: string;
}

export const TestimonialsSection = (): JSX.Element => {
  const features: FeatureItem[] = [
    {
      id: "expertise",
      icon: {
        primary: "/img/vector.svg",
        primaryStyle: {
          width: "91.67%",
          height: "91.67%",
          top: "0",
          left: "0",
        },
      },
      title: "Our expertise",
      description:
        "Our trainers design transformations, not just workouts. Each session is tailored to your body, goals, and lifestyle for results that last.",
    },
    {
      id: "results",
      icon: {
        primary: "/img/vector-1.svg",
        secondary: "/img/vector-2.svg",
        primaryStyle: {
          width: "37.50%",
          height: "37.50%",
          top: "40.62%",
          left: "31.25%",
        },
        secondaryStyle: {
          width: "68.75%",
          height: "87.50%",
          top: "6.25%",
          left: "15.62%",
        },
      },
      title: "Lasting Results",
    },
    {
      id: "accountability",
      icon: {
        primary: "/img/vector-3.svg",
        primaryStyle: {
          width: "83.33%",
          height: "83.33%",
          top: "8.33%",
          left: "8.33%",
        },
      },
      title: "Accountability",
    },
  ];

  return (
    <section className="flex flex-col w-[1192px] items-center gap-[83px] absolute top-[1878px] left-[calc(50.00%_-_596px)]">
      <h2 className="self-stretch font-semibold text-[45px] text-center leading-[72.0px] relative mt-[-1.00px] [font-family:'Montserrat',Helvetica] text-white tracking-[0]">
        Personal Training
      </h2>

      <div className="flex items-start gap-[117px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[466.94px] h-[427.21px] items-start gap-[55px] relative">
          <article className="flex flex-col items-start gap-[16.21px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
              <div
                className="relative w-[30px] h-[30px] aspect-[1]"
                aria-hidden="true"
              >
                <img
                  className="absolute w-[91.67%] h-[91.67%] top-0 left-0"
                  alt=""
                  src={features[0].icon.primary}
                />
              </div>

              <h3 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[26.6px] whitespace-nowrap">
                {features[0].title}
              </h3>
            </div>

            <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-medium text-white text-[19.5px] tracking-[0] leading-[29.2px]">
              {features[0].description}
            </p>
          </article>

          <div className="flex flex-col items-start gap-[55px] relative self-stretch w-full flex-[0_0_auto]">
            <hr
              className="relative self-stretch w-full h-px mt-[-1.00px] border-0 bg-[url(/img/line-225.svg)] bg-cover"
              aria-hidden="true"
            />

            <article className="flex flex-col items-start gap-[22.7px] relative self-stretch w-full flex-[0_0_auto] rounded-[6.49px]">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div
                  className="relative w-[30px] h-[30px] aspect-[1]"
                  aria-hidden="true"
                >
                  <img
                    className="absolute w-[37.50%] h-[37.50%] top-[40.62%] left-[31.25%]"
                    alt=""
                    src={features[1].icon.primary}
                  />

                  <img
                    className="absolute w-[68.75%] h-[87.50%] top-[6.25%] left-[15.62%]"
                    alt=""
                    src={features[1].icon.secondary}
                  />
                </div>

                <h3 className="relative w-fit mt-[-0.58px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorwhilte text-2xl tracking-[0] leading-[normal]">
                  {features[1].title}
                </h3>
              </div>
            </article>

            <hr
              className="relative self-stretch w-full h-px border-0 bg-[url(/img/line-225.svg)] bg-cover"
              aria-hidden="true"
            />

            <article className="flex items-center justify-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <div
                className="relative w-[30px] h-[30px] aspect-[1]"
                aria-hidden="true"
              >
                <img
                  className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
                  alt=""
                  src={features[2].icon.primary}
                />
              </div>

              <h3 className="relative flex-1 mt-[-1.08px] [font-family:'Montserrat',Helvetica] font-medium text-white text-2xl tracking-[0] leading-9">
                {features[2].title}
              </h3>
            </article>
          </div>
        </div>

        <div
          className="relative w-[608px] h-[526px] rounded-[12.97px] bg-[url(/img/frame-1984077981.png)] bg-cover bg-[50%_50%]"
          role="img"
          aria-label="Personal training session"
        />
      </div>
    </section>
  );
};
