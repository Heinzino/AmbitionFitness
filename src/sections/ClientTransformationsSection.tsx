import React from "react";

interface TransformationCard {
  name: string;
  image?: string;
  backgroundImage: string;
}

const transformationData: TransformationCard[] = [
  {
    name: "Justin",
    backgroundImage: "/img/frame-1984077586-1.png",
  },
  {
    name: "Sara",
    image: "/img/image-11.png",
    backgroundImage: "/img/frame-1984077586-1.png",
  },
  {
    name: "Jennifer",
    image: "/img/image-11-1.png",
    backgroundImage: "/img/frame-1984077586-1.png",
  },
  {
    name: "James",
    backgroundImage: "/img/frame-1984077583-1.png",
  },
  {
    name: "Hong",
    image: "/img/image-11-2.png",
    backgroundImage: "/img/frame-1984077586-1.png",
  },
  {
    name: "Rachael",
    image: "/img/image-11-3.png",
    backgroundImage: "/img/frame-1984077586-1.png",
  },
];

export const ClientTransformationsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full lg:w-[1203px] mx-auto lg:mx-0 items-center gap-8 md:gap-12 lg:gap-[50px] px-4 md:px-8 py-12 md:py-16 lg:py-0 relative lg:absolute lg:top-[2981px] lg:left-[calc(50.00%_-_601px)]">
      <header className="flex flex-col items-start gap-4 md:gap-[25px] w-full">
        <div className="inline-flex items-center gap-1.5">
          <p className="w-fit [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorpriamry text-sm md:text-[15px] text-center tracking-[0.45px] leading-[24.0px] whitespace-nowrap">
            Real people. Real results. Real commitment.
          </p>

          <img
            className="w-16 md:w-[110.67px] h-[2.97px]"
            alt=""
            src="/img/rectangle-5-1.svg"
            aria-hidden="true"
          />
        </div>

        <h2 className="flex items-center justify-center self-stretch [font-family:'Montserrat',Helvetica] font-semibold text-[#0f1131] text-3xl md:text-4xl lg:text-[45px] tracking-[0] leading-tight md:leading-[45px]">
          Client Transformations
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[30px] w-full">
        {transformationData.map((client, index) => (
          <article
            key={index}
            className="flex flex-col h-[320px] md:h-[382px] items-start justify-end gap-2.5 px-5 md:px-[25px] py-5 md:py-[22px] relative rounded-xl overflow-hidden border-2 border-solid border-[#2e2e2e]"
            style={{
              backgroundImage: `url(${client.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

            {client.image && (
              <img
                className="absolute inset-0 w-full h-full object-cover z-0"
                alt={`${client.name} transformation`}
                src={client.image}
              />
            )}

            <div className="flex items-center justify-between w-full z-10">
              <div className="inline-flex flex-col items-start justify-center gap-[7px]">
                <h3 className="w-fit leading-[28.8px] whitespace-nowrap [font-family:'Montserrat',Helvetica] font-semibold text-white text-lg tracking-[0]">
                  {client.name}
                </h3>

                <div className="flex items-center gap-2.5">
                  <span className="w-fit [font-family:'Montserrat',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                    Before
                  </span>

                  <img
                    className="w-[13.5px] h-[7.36px] object-cover"
                    alt=""
                    src="/img/line-218-5.svg"
                    aria-hidden="true"
                  />

                  <span className="w-fit [font-family:'Montserrat',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                    After
                  </span>
                </div>
              </div>

              <div
                className="w-[7px] h-[7px] bg-variable-collection-coloryellow rounded-[3.5px]"
                aria-hidden="true"
              />
            </div>
          </article>
        ))}
      </div>

      <button className="h-12 md:h-14 bg-variable-collection-colorpriamry inline-flex items-center justify-center gap-2.5 px-6 md:px-[35px] py-3 md:py-[15px] rounded-[1000px] cursor-pointer transition-transform hover:scale-105 active:scale-95">
        <span className="w-fit [font-family:'Montserrat',Helvetica] font-medium text-white text-sm md:text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
          See More
        </span>

        <img
          className="w-[18.33px] h-[11.41px]"
          alt=""
          src="/img/line-108-5.svg"
          aria-hidden="true"
        />
      </button>
    </section>
  );
};
