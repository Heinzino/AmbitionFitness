import React from "react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  backgroundImage: string;
  profileImage: string;
  playIcon: string;
}

export const ClientTransformationsSection = (): JSX.Element => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emma Johnson",
      title: "Product Manager, Tech Solutions",
      backgroundImage: "/img/review-6.png",
      profileImage: "/img/user-profile-2.png",
      playIcon: "/img/icon-park-solid-play.svg",
    },
    {
      id: 2,
      name: "Owen Parker",
      title: "Gym Member",
      backgroundImage: "/img/review-6.png",
      profileImage: "/img/user-profile-2.png",
      playIcon: "/img/icon-park-solid-play-1.svg",
    },
    {
      id: 3,
      name: "Lucas Hernandez",
      title: "Film Enthusiast",
      backgroundImage: "/img/review-7.png",
      profileImage: "/img/user-profile-2.png",
      playIcon: "/img/icon-park-solid-play-2.svg",
    },
  ];

  return (
    <section className="flex flex-col w-[1194px] items-start gap-[50px] absolute top-[889px] left-[calc(50.00%_-_597px)]">
      <header className="inline-flex flex-col items-start justify-center gap-3 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-[15px] text-center tracking-[0.45px] leading-[24.0px] whitespace-nowrap">
            Hear from our successful clients
          </p>

          <img
            className="relative w-[110.67px] h-[2.97px]"
            alt=""
            src="/img/rectangle-5-2.svg"
            role="presentation"
          />
        </div>

        <h2 className="relative flex items-center justify-center self-stretch [font-family:'Montserrat',Helvetica] font-semibold text-white text-[35px] tracking-[0] leading-[28.8px]">
          Testimonials
        </h2>
      </header>

      <div className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="flex flex-col h-[492px] items-start justify-end gap-[19.68px] p-[29.52px] relative flex-1 grow rounded-[19.68px] border-[0.62px] border-solid border-[#3686f7] shadow-[0px_2.46px_4.92px_#0000001a] bg-cover bg-[50%_50%]"
            style={{ backgroundImage: `url(${testimonial.backgroundImage})` }}
          >
            <div className="flex items-center gap-[19.68px] relative self-stretch w-full flex-[0_0_auto]">
              <div
                className="relative w-[49.2px] h-[49.2px] rounded-[49.2px] border-[0.62px] border-solid border-white aspect-[1] bg-cover bg-[50%_50%]"
                style={{ backgroundImage: `url(${testimonial.profileImage})` }}
                role="img"
                aria-label={`${testimonial.name} profile picture`}
              />

              <div className="flex flex-col items-start gap-[9.84px] relative flex-1 grow">
                <div className="flex flex-col items-start gap-[4.92px] relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="mt-[-1.23px] [font-family:'Inter',Helvetica] text-[19.7px] tracking-[0] leading-[24.6px] relative self-stretch font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-white text-[14.8px] tracking-[0] leading-[18.5px]">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label={`Play video testimonial from ${testimonial.name}`}
                className="relative w-[29.52px] h-[29.52px] aspect-[1] cursor-pointer"
              >
                <img
                  className="w-full h-full"
                  alt=""
                  src={testimonial.playIcon}
                  role="presentation"
                />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
