import React from "react";

export const FindUsNearYouSection = (): JSX.Element => {
  const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;
  const placeId = "ChIJkVH-mdV6cVMR4AVhyOPuTYw";

  return (
    <section className="flex flex-col w-full lg:w-[1200px] mx-auto lg:mx-0 items-center gap-8 md:gap-12 px-4 md:px-8 py-12 md:py-16 lg:py-0 relative lg:absolute lg:top-[6903px] lg:left-[calc(50.00%_-_600px)]">
      <header className="flex flex-col w-full max-w-[1010px] items-start justify-center gap-4 md:gap-5">
        <h2 className="flex items-center justify-center self-stretch [font-family:'Prompt',Helvetica] font-medium text-white text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight md:leading-[53.3px]">
          Train With the Best—Right Here in Calgary
        </h2>

        <p className="self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#ffffffcc] text-base md:text-lg lg:text-[21px] text-center tracking-[0] leading-[28px] md:leading-[31.5px]">
          Explore our studio location on the map below.
        </p>
      </header>

      <iframe
        className="self-stretch w-full h-[300px] md:h-[400px] lg:h-[494px] rounded-xl"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}`}
        title="Ambition Fitness Location"
      />
    </section>
  );
};
