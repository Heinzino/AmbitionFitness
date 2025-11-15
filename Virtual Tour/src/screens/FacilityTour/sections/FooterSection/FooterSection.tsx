import React from "react";

interface FacilityCard {
  id: number;
  image: string;
  title: string;
  position: {
    top: number;
    left: number;
  };
}

export const FooterSection = (): JSX.Element => {
  const facilityCards: FacilityCard[] = [
    {
      id: 1,
      image: "/img/overlay-1.png",
      title: "Facility Area 1",
      position: { top: 0, left: 0 },
    },
    {
      id: 2,
      image: "/img/overlay-2.png",
      title: "Facility Area 2",
      position: { top: 0, left: 392 },
    },
    {
      id: 3,
      image: "/img/overlay-3.png",
      title: "Facility Area 3",
      position: { top: 0, left: 784 },
    },
    {
      id: 4,
      image: "/img/overlay-4.png",
      title: "Facility Area 4",
      position: { top: 294, left: 0 },
    },
    {
      id: 5,
      image: "/img/overlay-5.png",
      title: "Facility Area 5",
      position: { top: 294, left: 392 },
    },
    {
      id: 6,
      image: "/img/overlay-6.png",
      title: "Facility Area 6",
      position: { top: 294, left: 784 },
    },
  ];

  return (
    <section className="flex w-[1400px] gap-12 px-4 py-0 top-[2509px] left-[calc(50.00%_-_700px)] flex-col items-center absolute">
      <header className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="self-stretch text-[45px] text-center leading-[60px] relative flex items-center justify-center mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-neutral-50 tracking-[0]">
          Facility Gallery
        </h2>
      </header>

      <div
        className="relative w-[1152px] h-[564.94px]"
        role="list"
        aria-label="Facility gallery"
      >
        {facilityCards.map((card) => (
          <article
            key={card.id}
            className="flex-col w-[calc(100%_-_784px)] items-center pt-px px-px absolute bg-[#161616] overflow-hidden border border-solid border-[#363d49] flex rounded-xl shadow-[0px_1px_2px_#0000000d]"
            style={{
              top: `${card.position.top}px`,
              left: `${card.position.left}px`,
              gap: card.id <= 3 ? "15.99px" : "16px",
              paddingBottom: card.id <= 3 ? "17.01px" : "17px",
            }}
            role="listitem"
          >
            {card.id <= 2 ? (
              <img
                className="relative self-stretch w-full flex-[0_0_auto] object-cover"
                alt={card.title}
                src={card.image}
              />
            ) : (
              <div
                className="h-[205.88px] relative self-stretch w-full bg-cover bg-[50%_50%]"
                style={{ backgroundImage: `url(${card.image})` }}
                role="img"
                aria-label={card.title}
              />
            )}

            <div className="flex flex-col w-[334px] items-start relative flex-[0_0_auto]">
              <h3
                className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-neutral-50 tracking-[0] leading-[30.6px] whitespace-nowrap"
                style={{
                  fontSize:
                    card.id === 1
                      ? "18px"
                      : card.id === 2 || card.id === 5
                        ? "17.6px"
                        : "17.4px",
                }}
              >
                {card.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
