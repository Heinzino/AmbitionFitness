import React from "react";

interface TransformationCard {
  name: string;
  image?: string;
  hasImage: boolean;
}

const transformationData: TransformationCard[] = [
  { name: "Justin", hasImage: false },
  { name: "Sara", image: "/img/image-11-6.png", hasImage: true },
  { name: "Jennifer", image: "/img/image-11-7.png", hasImage: true },
  { name: "Justin", hasImage: false },
  { name: "Sara", image: "/img/image-11-6.png", hasImage: true },
  { name: "Jennifer", image: "/img/image-11-7.png", hasImage: true },
  { name: "Justin", hasImage: false },
  { name: "Sara", image: "/img/image-11-6.png", hasImage: true },
  { name: "Jennifer", image: "/img/image-11-7.png", hasImage: true },
  { name: "Justin", hasImage: false },
  { name: "Sara", image: "/img/image-11-6.png", hasImage: true },
  { name: "Jennifer", image: "/img/image-11-7.png", hasImage: true },
];

const TransformationCard: React.FC<{ card: TransformationCard }> = ({
  card,
}) => {
  return (
    <article
      className={`flex flex-col w-[378px] items-start justify-end gap-2.5 px-[25px] py-[22px] bg-[url(/img/frame-1984077586-4.png)] h-[382px] relative rounded-xl border-2 border-solid border-[#2e2e2e] bg-cover bg-[50%_50%] ${
        card.hasImage ? "overflow-hidden" : ""
      }`}
    >
      {card.hasImage && card.image && (
        <img
          className="absolute top-[calc(50.00%_-_191px)] left-[calc(50.00%_-_185px)] w-[370px] h-[382px] aspect-[0.77] object-cover"
          alt={`${card.name} transformation`}
          src={card.image}
        />
      )}

      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start justify-center gap-[7px] relative flex-[0_0_auto]">
          <h3 className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-lg tracking-[0] leading-[28.8px] whitespace-nowrap">
            {card.name}
          </h3>

          <div className="flex w-[122px] items-center gap-2.5 relative flex-[0_0_auto]">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              Before
            </span>

            <img
              className="relative w-[13.5px] h-[7.36px] object-cover"
              alt="Arrow"
              src="/img/line-218-11.svg"
            />

            <span className="relative w-fit mt-[-1.00px] mr-[-6.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              After
            </span>
          </div>
        </div>

        <div
          className="relative w-[7px] h-[7px] bg-variable-collection-coloryellow rounded-[3.5px]"
          aria-hidden="true"
        />
      </div>
    </article>
  );
};

export const AboutUsSection = (): JSX.Element => {
  const rows = [
    transformationData.slice(0, 3),
    transformationData.slice(3, 6),
    transformationData.slice(6, 9),
    transformationData.slice(9, 12),
  ];

  return (
    <section className="flex flex-col w-[1203px] items-center gap-[50px] absolute top-[4159px] left-[calc(50.00%_-_601px)]">
      <header className="flex flex-col items-start gap-[25px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-[15px] text-center tracking-[0.45px] leading-[24.0px] whitespace-nowrap">
            Real people. Real results. Real commitment.
          </p>

          <img
            className="relative w-[110.67px] h-[2.97px]"
            alt=""
            src="/img/rectangle-5.svg"
            aria-hidden="true"
          />
        </div>

        <h2 className="relative flex items-center justify-center self-stretch [font-family:'Montserrat',Helvetica] font-semibold text-white text-[45px] tracking-[0] leading-[45px]">
          Client Transformations
        </h2>
      </header>

      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-col w-[1194px] items-start gap-[30px] relative flex-[0_0_auto]"
        >
          <div className="flex items-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
            {row.map((card, cardIndex) => (
              <TransformationCard
                key={`${rowIndex}-${cardIndex}`}
                card={card}
              />
            ))}
          </div>
        </div>
      ))}

      <button
        className="inline-flex items-center justify-center gap-2.5 px-[35px] py-[15px] relative flex-[0_0_auto] bg-variable-collection-coloryellow rounded-[1000px]"
        aria-label="Load more transformations"
      >
        <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorpriamry text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
          Load More
        </span>

        <img
          className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
          alt=""
          src="/img/line-108-2.svg"
          aria-hidden="true"
        />
      </button>
    </section>
  );
};
