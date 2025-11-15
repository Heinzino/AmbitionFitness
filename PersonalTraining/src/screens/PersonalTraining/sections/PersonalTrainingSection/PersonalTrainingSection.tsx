import React from "react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  imageAlt: string;
  testimonial: string;
  backgroundImage: string;
  hasOverlay?: boolean;
}

export const PersonalTrainingSection = (): JSX.Element => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jameela D",
      image: "",
      imageAlt: "Jameela D testimonial",
      backgroundImage: "/img/frame-1984077583-4.png",
      testimonial:
        "\"It has been a lil over a year since I started training with Guil at Ambition Fitness . My friend had amazing results and had nothing but good things to say so I took a shot. First off his results have been insanely incredible . I've struggled with weight and diet for over a decade and being able to look at myself in the mirror and be happy has been a massive accomplishment. That being said none of this would've been possible without Guil. He has a great work ethic , is quite knowledgeable ; any question you may have he will have an answer to , Google generally confirms he's correct but the thing that helps me is he never makes you feel like you're going through your fitness journey alone . When he says 24/7 support, he means it . With Ambitions Academy the amount of time , effort and energy you put into it , is exactly what you get back & the results are priceless.\"",
    },
    {
      id: 2,
      name: "Kelly Heath",
      image: "/img/image-11-8.png",
      imageAlt: "Kelly Heath testimonial",
      backgroundImage: "/img/frame-1984077586-4.png",
      hasOverlay: true,
      testimonial:
        '"Ambition Fitness Weight Loss Program has delivered outstanding results. To my surprise I found the Ideal Fitness Routine for my lifestyle. The progress that is visible on a weekly basis provides me great motivation to continue on and achieve my weight loss goal. The success I had with Ambition Fitness program has improved my life quality, and I am committed to living a healthier lifestyle."',
    },
    {
      id: 3,
      name: "Kelly Heath",
      image: "/img/image-11-9.png",
      imageAlt: "Kelly Heath testimonial",
      backgroundImage: "/img/frame-1984077586-4.png",
      hasOverlay: true,
      testimonial:
        '"Ambition Fitness Weight Loss Program has delivered outstanding results. To my surprise I found the Ideal Fitness Routine for my lifestyle. The progress that is visible on a weekly basis provides me great motivation to continue on and achieve my weight loss goal. The success I had with Ambition Fitness program has improved my life quality, and I am committed to living a healthier lifestyle."',
    },
  ];

  return (
    <section className="flex flex-col w-[1194px] items-start gap-[50px] absolute top-[2862px] left-[calc(50.00%_-_597px)]">
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

      <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto] mr-[-2.00px]">
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.id}
            className={`flex flex-col ${index === 1 ? "w-[380px]" : "w-[378px]"} items-start gap-[30px] relative`}
          >
            <div
              className={`${index === 0 ? "bg-[url(/img/frame-1984077583-4.png)] w-[378px]" : "self-stretch w-full bg-[url(/img/frame-1984077586-4.png)]"} h-[382px] relative rounded-xl ${index === 0 ? "" : "overflow-hidden"} border-2 border-solid border-[#2e2e2e] bg-cover bg-[50%_50%]`}
              role="img"
              aria-label={testimonial.imageAlt}
            >
              {testimonial.hasOverlay && testimonial.image && (
                <img
                  className="absolute top-[calc(50.00%_-_191px)] left-[calc(50.00%_-_185px)] w-[370px] h-[382px] aspect-[0.77] object-cover"
                  alt=""
                  src={testimonial.image}
                  role="presentation"
                />
              )}
            </div>

            <div className="flex flex-col items-start gap-[11.29px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <h3
                  className={`${index === 0 ? "relative self-stretch" : ""} h-[38px] mt-[-0.81px] [font-family:'Montserrat',Helvetica] ${index === 0 ? "" : "text-2xl tracking-[0.48px] leading-6"} ${index === 0 ? "text-2xl tracking-[0.48px] leading-6" : "relative self-stretch"} font-semibold text-white`}
                >
                  {testimonial.name}
                </h3>

                <blockquote className="relative flex items-center justify-center self-stretch opacity-80 [font-family:'Montserrat',Helvetica] font-normal text-white text-lg tracking-[0] leading-[27px]">
                  {testimonial.testimonial}
                </blockquote>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
