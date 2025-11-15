import React from "react";

interface FeatureItem {
  text: string;
  fontSize: string;
}

export const VirtualTourSection = (): JSX.Element => {
  const features: FeatureItem[] = [
    { text: "State-of-the-art cardio equipment", fontSize: "text-[16.2px]" },
    {
      text: "Full range of free weights and machines",
      fontSize: "text-[16.7px]",
    },
    {
      text: "Dedicated stretching and mobility area",
      fontSize: "text-[16.6px]",
    },
    { text: "Clean, well-maintained locker rooms", fontSize: "text-[16.7px]" },
    { text: "Climate-controlled environment", fontSize: "text-[16.6px]" },
    { text: "Private training areas", fontSize: "text-[16.9px]" },
    { text: "Ample parking", fontSize: "text-[17px]" },
    { text: "24/7 secure access", fontSize: "text-[16.7px]" },
  ];

  return (
    <section className="flex w-[1201px] top-[1737px] left-[calc(50.00%_-_601px)] flex-col items-center absolute">
      <div className="flex flex-col max-w-4xl items-start gap-12 relative w-full flex-[0_0_auto]">
        <header className="items-center flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="self-stretch text-[45px] text-center leading-[60px] relative flex items-center justify-center mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-neutral-50 tracking-[0]">
            Facility Features
          </h2>
        </header>

        <div className="relative self-stretch w-full h-96">
          {features.map((feature, index) => {
            const row = Math.floor(index / 2);
            const col = index % 2;
            const topPosition = row * 102;
            const leftPosition = col === 0 ? 0 : 460;

            return (
              <div
                key={index}
                className="w-[calc(100%_-_460px)] items-start gap-4 p-[25px] absolute bg-black flex rounded-xl shadow-[0px_1px_2px_#0000000d]"
                style={{
                  top: `${topPosition}px`,
                  left: `${leftPosition}px`,
                }}
              >
                <div className="flex flex-col w-6 h-7 items-start pt-1 pb-0 px-0 relative">
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[66.67%] h-[45.83%] top-[20.83%] left-[12.50%]"
                      alt=""
                      src="/img/vector-15.svg"
                    />
                  </div>
                </div>

                <p
                  className={`relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-white ${feature.fontSize} tracking-[0] leading-7 whitespace-nowrap`}
                >
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
