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
    <section className="flex flex-col w-[1203px] items-center gap-[50px] absolute top-[2981px] left-[calc(50.00%_-_601px)]">
      <header className="flex flex-col items-start gap-[25px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorpriamry text-[15px] text-center tracking-[0.45px] leading-[24.0px] whitespace-nowrap">
            Real people. Real results. Real commitment.
          </p>

          <img
            className="relative w-[110.67px] h-[2.97px]"
            alt=""
            src="/img/rectangle-5-1.svg"
            aria-hidden="true"
          />
        </div>

        <h2 className="relative flex items-center justify-center self-stretch [font-family:'Montserrat',Helvetica] font-semibold text-[#0f1131] text-[45px] tracking-[0] leading-[45px]">
          Client Transformations
        </h2>
      </header>

      <div className="flex flex-col w-[1194px] items-start gap-[30px] relative flex-[0_0_auto]">
        <div className="flex items-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          {transformationData.slice(0, 3).map((client, index) => (
            <article
              key={index}
              className="flex flex-col w-[378px] h-[382px] items-start justify-end gap-2.5 px-[25px] py-[22px] relative rounded-xl overflow-hidden border-2 border-solid border-[#2e2e2e] bg-cover bg-[50%_50%]"
              style={{ backgroundImage: `url(${client.backgroundImage})` }}
            >
              {client.image && (
                <img
                  className="absolute top-[calc(50.00%_-_191px)] left-[calc(50.00%_-_185px)] w-[370px] h-[382px] aspect-[0.77] object-cover"
                  alt={`${client.name} transformation`}
                  src={client.image}
                />
              )}

              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start justify-center gap-[7px] relative flex-[0_0_auto]">
                  <h3 className="w-fit leading-[28.8px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-lg tracking-[0]">
                    {client.name}
                  </h3>

                  <div className="flex w-[122px] items-center gap-2.5 relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                      Before
                    </span>

                    <img
                      className="relative w-[13.5px] h-[7.36px] object-cover"
                      alt=""
                      src="/img/line-218-5.svg"
                      aria-hidden="true"
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
          ))}
        </div>

        <div className="flex items-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          {transformationData.slice(3, 6).map((client, index) => (
            <article
              key={index}
              className="flex flex-col w-[378px] h-[382px] items-start justify-end gap-2.5 px-[25px] py-[22px] relative rounded-xl overflow-hidden border-2 border-solid border-[#2e2e2e] bg-cover bg-[50%_50%]"
              style={{ backgroundImage: `url(${client.backgroundImage})` }}
            >
              {client.image && (
                <img
                  className="absolute top-[calc(50.00%_-_191px)] left-[calc(50.00%_-_185px)] w-[370px] h-[382px] aspect-[0.77] object-cover"
                  alt={`${client.name} transformation`}
                  src={client.image}
                />
              )}

              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start justify-center gap-[7px] relative flex-[0_0_auto]">
                  <h3 className="w-fit leading-[28.8px] whitespace-nowrap relative mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-lg tracking-[0]">
                    {client.name}
                  </h3>

                  <div className="flex w-[122px] items-center gap-2.5 relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                      Before
                    </span>

                    <img
                      className="relative w-[13.5px] h-[7.36px] object-cover"
                      alt=""
                      src="/img/line-218-5.svg"
                      aria-hidden="true"
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
          ))}
        </div>
      </div>

      <button className="h-14 bg-variable-collection-colorpriamry inline-flex items-center justify-center gap-2.5 px-[35px] py-[15px] relative rounded-[1000px]">
        <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
          See More
        </span>

        <img
          className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
          alt=""
          src="/img/line-108-5.svg"
          aria-hidden="true"
        />
      </button>
    </section>
  );
};
