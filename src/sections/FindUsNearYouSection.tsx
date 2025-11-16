import React from "react";

export const FindUsNearYouSection = (): JSX.Element => {
  const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;
  const placeId = "ChIJkVH-mdV6cVMR4AVhyOPuTYw";

  return (
    <section className="flex flex-col w-[1200px] items-center gap-12 absolute top-[6903px] left-[calc(50.00%_-_600px)]">
      <header className="flex flex-col w-[1010px] items-start justify-center gap-5 relative flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Prompt',Helvetica] font-medium text-white text-5xl text-center tracking-[0] leading-[53.3px]">
          Train With the Best—Right Here in Calgary
        </h2>

        <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#ffffffcc] text-[21px] text-center tracking-[0] leading-[31.5px]">
          Explore our studio location on the map below.
        </p>
      </header>

      <iframe
        className="relative self-stretch w-full h-[494px] rounded-xl"
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
