import React from "react";

interface BenefitCard {
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

export const MembershipBenefitsSection = (): JSX.Element => {
  const benefitsRow1: BenefitCard[] = [
    {
      icon: {
        images: [
          {
            src: "/img/vector-6.svg",
            alt: "Clock icon",
            className:
              "absolute w-[83.33%] h-[83.33%] top-[4.17%] left-[4.17%]",
          },
          {
            src: "/img/vector-1.svg",
            alt: "Clock hand",
            className:
              "absolute w-[16.67%] h-[33.33%] top-[20.83%] left-[45.83%]",
          },
        ],
      },
      title: "24/7 Access",
      description: "Train whenever it fits your schedule,\nday or night",
    },
    {
      icon: {
        images: [
          {
            src: "/img/vector-2.svg",
            alt: "People base",
            className:
              "absolute w-[58.33%] h-[25.00%] top-[58.33%] left-[4.17%]",
          },
          {
            src: "/img/vector-3.svg",
            alt: "Person left",
            className:
              "absolute w-[33.33%] h-[33.33%] top-[8.33%] left-[16.67%]",
          },
          {
            src: "/img/vector-4.svg",
            alt: "Person right small",
            className:
              "absolute w-[12.50%] h-[24.46%] top-[58.87%] left-[75.00%]",
          },
          {
            src: "/img/vector-5.svg",
            alt: "Person right large",
            className:
              "absolute w-[12.53%] h-[32.29%] top-[8.87%] left-[62.50%]",
          },
        ],
      },
      title: "Limited Spots",
      description: "Exclusive membership ensures it's\nnever crowded",
    },
    {
      icon: {
        images: [
          {
            src: "/img/vector-6.svg",
            alt: "Face circle",
            className:
              "absolute w-[83.33%] h-[83.33%] top-[4.17%] left-[4.17%]",
          },
          {
            src: "/img/vector-7.svg",
            alt: "Smile",
            className:
              "absolute w-[33.33%] h-[8.33%] top-[54.17%] left-[29.17%]",
          },
          {
            src: "/img/vector-9.svg",
            alt: "Eye left",
            className: "absolute w-0 h-0 top-[33.33%] left-[33.33%]",
          },
          {
            src: "/img/vector-9.svg",
            alt: "Eye right",
            className: "absolute w-0 h-0 top-[33.33%] left-[58.33%]",
          },
        ],
      },
      title: "Non-Intimidating",
      description: "Welcoming environment for all\nfitness levels",
    },
  ];

  const benefitsRow2: BenefitCard[] = [
    {
      icon: {
        images: [
          {
            src: "/img/vector-10.svg",
            alt: "Document with X",
            className:
              "absolute w-[66.67%] h-[83.35%] top-[4.16%] left-[12.50%]",
          },
        ],
      },
      title: "No Contracts",
      description: "Month-to-month flexibility, cancel\nanytime",
    },
    {
      icon: {
        images: [
          {
            src: "/img/vector-11.svg",
            alt: "Dollar sign line",
            className: "absolute w-0 h-[83.33%] top-[4.17%] left-[45.83%]",
          },
          {
            src: "/img/vector-12.svg",
            alt: "Dollar sign S",
            className:
              "absolute w-[50.00%] h-[58.33%] top-[16.67%] left-[20.83%]",
          },
        ],
      },
      title: "No Hidden Fees",
      description: "Simple, transparent pricing with\neverything included",
    },
    {
      icon: {
        images: [
          {
            src: "/img/vector-13.svg",
            alt: "Star decoration",
            className:
              "absolute w-[25.36%] h-[25.36%] top-[12.50%] left-[60.42%]",
          },
          {
            src: "/img/vector-14.svg",
            alt: "Key head",
            className:
              "absolute w-[40.00%] h-[40.00%] top-[4.17%] left-[43.33%]",
          },
          {
            src: "/img/vector-15.svg",
            alt: "Key body",
            className:
              "absolute w-[45.83%] h-[45.83%] top-[37.50%] left-[4.17%]",
          },
        ],
      },
      title: "Private Facility",
      description: "Secure access to a clean, well-\nmaintained space",
    },
  ];

  const renderBenefitCard = (benefit: BenefitCard, index: number) => (
    <article
      key={index}
      className="flex flex-col items-center gap-[22px] p-[33px] relative flex-1 grow bg-[#191919] rounded-xl shadow-[0px_1px_2px_#0000000d]"
    >
      <div className="relative w-12 h-12" role="img" aria-label={benefit.title}>
        {benefit.icon.images.map((image, imgIndex) => (
          <img
            key={imgIndex}
            className={image.className}
            alt={image.alt}
            src={image.src}
          />
        ))}
      </div>

      <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <h3 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-neutral-50 text-2xl text-center tracking-[0] leading-6 whitespace-nowrap">
          {benefit.title}
        </h3>
      </div>

      <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-[#b3b3b3] text-center tracking-[0] leading-7 whitespace-pre-line">
          {benefit.description}
        </p>
      </div>
    </article>
  );

  return (
    <section className="flex flex-col w-[1194px] items-start gap-[30px] absolute top-[554px] left-[360px]">
      <div className="flex items-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
        {benefitsRow1.map((benefit, index) =>
          renderBenefitCard(benefit, index),
        )}
      </div>

      <div className="flex items-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
        {benefitsRow2.map((benefit, index) =>
          renderBenefitCard(benefit, index),
        )}
      </div>
    </section>
  );
};
