import React from "react";

interface Benefit {
  icon: {
    images: Array<{
      src: string;
      alt: string;
      className: string;
    }>;
  };
  title: string;
  description: string;
}

export const ClassScheduleSection = (): JSX.Element => {
  const benefits: Benefit[] = [
    {
      icon: {
        images: [
          {
            src: "/img/vector.svg",
            alt: "Community icon part 1",
            className:
              "absolute w-[58.33%] h-[25.00%] top-[58.33%] left-[4.17%]",
          },
          {
            src: "/img/vector-1.svg",
            alt: "Community icon part 2",
            className:
              "absolute w-[33.33%] h-[33.33%] top-[8.33%] left-[16.67%]",
          },
          {
            src: "/img/vector-2.svg",
            alt: "Community icon part 3",
            className:
              "absolute w-[12.50%] h-[24.46%] top-[58.87%] left-[75.00%]",
          },
          {
            src: "/img/vector-3.svg",
            alt: "Community icon part 4",
            className:
              "absolute w-[12.53%] h-[32.29%] top-[8.87%] left-[62.50%]",
          },
        ],
      },
      title: "Community",
      description: "Train with like-minded individuals",
    },
    {
      icon: {
        images: [
          {
            src: "/img/vector-4.svg",
            alt: "Motivation icon",
            className:
              "absolute w-[75.03%] h-[83.36%] top-[4.16%] left-[8.32%]",
          },
        ],
      },
      title: "Motivation",
      description: "Group energy keeps you pushing\nharder",
    },
    {
      icon: {
        images: [
          {
            src: "/img/vector-6.svg",
            alt: "Structure icon part 1",
            className: "absolute w-0 h-[16.67%] top-[4.17%] left-[29.17%]",
          },
          {
            src: "/img/vector-6.svg",
            alt: "Structure icon part 2",
            className: "absolute w-0 h-[16.67%] top-[4.17%] left-[62.50%]",
          },
          {
            src: "/img/vector-7.svg",
            alt: "Structure icon part 3",
            className:
              "absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[8.33%]",
          },
          {
            src: "/img/vector-8.svg",
            alt: "Structure icon part 4",
            className: "absolute w-[75.00%] h-0 top-[37.50%] left-[8.33%]",
          },
        ],
      },
      title: "Structure",
      description: "Scheduled classes keep you\nconsistent",
    },
  ];

  return (
    <section className="flex flex-col w-[calc(100%_-_720px)] items-start gap-[58px] absolute top-[2030px] left-[360px]">
      <header className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[45px] text-center tracking-[0] leading-[60px]">
          Why Choose Group Sessions?
        </h2>
      </header>

      <div className="flex items-start justify-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        {benefits.map((benefit, index) => (
          <article
            key={index}
            className="flex flex-col items-center gap-3.5 relative flex-1 grow"
          >
            <div
              className="relative w-12 h-12"
              role="img"
              aria-label={benefit.title}
            >
              {benefit.icon.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  className={image.className}
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </div>

            <div className="flex items-center self-stretch w-full flex-col relative flex-[0_0_auto]">
              <h3 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-neutral-50 text-2xl text-center tracking-[0] leading-10 whitespace-nowrap">
                {benefit.title}
              </h3>
            </div>

            {index === 0 ? (
              <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  {benefit.description}
                </p>
              </div>
            ) : (
              <div className="flex flex-col w-[calc(100%_+_1px)] items-center absolute top-[116px] left-0">
                <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6">
                  {benefit.description.split("\n").map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex <
                        benefit.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
