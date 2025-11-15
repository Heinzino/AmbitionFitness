import React from "react";

interface Benefit {
  text: string;
}

interface GroupSession {
  icon: string;
  iconAlt: string;
  iconStyles: string;
  title: string;
  description: string;
  benefits: Benefit[];
  image: string;
  imageAlt: string;
}

const groupSessionsData: GroupSession[] = [
  {
    icon: "/img/vector-13.svg",
    iconAlt: "Senior Fitness Icon",
    iconStyles: "absolute w-[83.33%] h-[75.00%] top-[5.83%] left-0",
    title: "Senior Fitness",
    description:
      "Low-impact exercises designed specifically for seniors to improve mobility, strength, and balance in a supportive group setting.",
    benefits: [
      { text: "Improves balance and coordination" },
      { text: "Builds strength safely" },
      { text: "Social and supportive atmosphere" },
      { text: "Modified exercises for all abilities" },
    ],
    image: "/img/rectangle-6547.png",
    imageAlt: "Senior Fitness Class",
  },
  {
    icon: "/img/vector-18.svg",
    iconAlt: "Boot Camp Icon",
    iconStyles: "absolute w-[75.03%] h-[83.36%] top-0 left-[5.82%]",
    title: "Boot Camp",
    description:
      "High-energy group training combining cardio and strength for all fitness levels. Challenge yourself in a motivating team environment.",
    benefits: [
      { text: "Full-body workouts" },
      { text: "Burn calories efficiently" },
      { text: "Motivating group energy" },
      { text: "Scalable to your fitness level" },
    ],
    image: "/img/rectangle-6546.png",
    imageAlt: "Boot Camp Class",
  },
];

export const GroupSessionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[1200px] items-start gap-[30px] absolute top-[612px] left-[360px]">
      {groupSessionsData.map((session, index) => (
        <article
          key={index}
          className="flex items-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="inline-flex flex-col items-start p-[30px] relative flex-[0_0_auto] bg-[#191919] rounded-xl">
            <div className="inline-flex flex-col items-start justify-center gap-8 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[511px] items-start gap-[26px] relative flex-[0_0_auto]">
                <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="relative w-[30px] h-[30px] aspect-[1]"
                      aria-hidden="true"
                    >
                      <img
                        className={session.iconStyles}
                        alt={session.iconAlt}
                        src={session.icon}
                      />
                    </div>

                    <div className="inline-flex items-start flex-col relative flex-[0_0_auto]">
                      <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-[60px] whitespace-nowrap">
                        {session.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-col items-start pt-0 pb-2 px-0 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                      {session.description.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < session.description.split("\n").length - 1 && (
                            <br />
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </header>

                <button
                  className="inline-flex items-center justify-center gap-2.5 px-[29px] py-3 relative flex-[0_0_auto] bg-variable-collection-coloryellow rounded-[1000px] hover:opacity-90 transition-opacity"
                  aria-label={`Join ${session.title} class`}
                >
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorpriamry text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                    Join This Class
                  </span>

                  <div className="relative w-4 h-4" aria-hidden="true">
                    <img
                      className="absolute w-0 h-[16.67%] top-[4.17%] left-[29.16%]"
                      alt=""
                      src="/img/vector-20.svg"
                    />

                    <img
                      className="absolute w-0 h-[16.67%] top-[4.17%] left-[62.51%]"
                      alt=""
                      src="/img/vector-20.svg"
                    />

                    <img
                      className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[8.33%]"
                      alt=""
                      src="/img/vector-21.svg"
                    />

                    <img
                      className="absolute w-[75.00%] h-0 top-[37.50%] left-[8.33%]"
                      alt=""
                      src="/img/vector-22.svg"
                    />
                  </div>
                </button>
              </div>

              <div className="flex flex-col w-[511px] items-start gap-4 relative flex-[0_0_auto]">
                <div className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-neutral-50 text-2xl tracking-[0] leading-10">
                    Benefits:
                  </h3>
                </div>

                <ul className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  {session.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
                    >
                      <div className="flex flex-col w-6 h-7 items-start pt-1 pb-0 px-0 relative">
                        <div className="flex w-6 h-6 items-center justify-center relative bg-[#e2b91233] rounded-full">
                          <div className="relative w-3 h-3 bg-[#e2b912] rounded-full" />
                        </div>
                      </div>

                      <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                        {benefit.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <img
            className="relative w-[600px] h-[512px] mr-[-1.00px] object-cover"
            alt={session.imageAlt}
            src={session.image}
          />
        </article>
      ))}
    </section>
  );
};
