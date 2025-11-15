import React from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const FooterSection = (): JSX.Element => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ethan Russell",
      role: "Freelancer",
      rating: 5,
      comment:
        '"The equipment quality is outstanding. I can easily switch between workouts without any hassle — perfect for both beginners and serious lifters."',
      avatar: "/img/user-profile-3.png",
    },
    {
      id: 2,
      name: "Sophia Wilson",
      role: "Small Business Owner",
      rating: 5,
      comment:
        '"Professional, patient, and genuinely invested in your progress. The trainers focus on proper form and help you push your limits responsibly."',
      avatar: "/img/user-profile-3.png",
    },
    {
      id: 3,
      name: "Mason Evans",
      role: "Student",
      rating: 3,
      comment:
        '"Everything is well maintained — machines, weights, mats, even the locker area. My trainer keeps track of my progress weekly and adjusts workouts perfectly to my fitness goals. Highly recommend this place!"',
      avatar: "/img/user-profile-3.png",
    },
    {
      id: 4,
      name: "Daniel Scott",
      role: "Small Business Owner",
      rating: 3,
      comment:
        '"Love the variety of equipment here! Each section is well-organized — whether it\'s free weights, resistance machines, or functional training tools, everything works smoothly and feels premium."',
      avatar: "/img/user-profile-3.png",
    },
  ];

  const paginationDots = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <img
        key={index}
        className="relative w-[13.88px] h-[13.25px] aspect-[1]"
        alt="Star"
        src={index < rating ? "/img/star-16-3.svg" : "/img/star-18-3.svg"}
      />
    ));
  };

  return (
    <section className="absolute top-[6159px] left-[319px] w-[1283px] h-[495px]">
      <header className="flex w-[1199px] items-center justify-between absolute top-0 left-[42px]">
        <div className="flex flex-col w-[341px] items-start justify-center gap-3 relative">
          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] mr-[-33.67px]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-[15px] text-center tracking-[0.45px] leading-[24.0px] whitespace-nowrap">
              Hear from our successful clients
            </p>

            <img
              className="relative w-[110.67px] h-[2.97px]"
              alt="Rectangle"
              src="/img/rectangle-5-4.svg"
            />
          </div>

          <h2 className="relative flex items-center justify-center self-stretch [font-family:'Montserrat',Helvetica] font-semibold text-white text-[35px] tracking-[0] leading-[28.8px]">
            Testimonials
          </h2>
        </div>

        <div className="inline-flex flex-col items-start gap-[11px] relative flex-[0_0_auto] rounded-2xl shadow-[0px_18px_40px_#0000001a]">
          <div className="flex items-center gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/img/frame-1984077898.svg"
            />

            <p className="relative flex items-center justify-center w-fit [font-family:'Montserrat',Helvetica] font-medium text-transparent text-base tracking-[0] leading-4 whitespace-nowrap">
              <span className="text-[#ffc107]">4.6 /5</span>

              <span className="text-white"> - from 12k reviews</span>
            </p>
          </div>

          <div className="relative w-[89.86px] h-[29.49px] aspect-[3.05]">
            <img
              className="absolute w-[15.00%] h-[49.50%] top-[28.16%] left-[84.82%]"
              alt="Vector"
              src="/img/vector-1.svg"
            />

            <img
              className="absolute w-[3.50%] h-[72.47%] top-[2.93%] left-[79.57%]"
              alt="Vector"
              src="/img/vector-2.svg"
            />

            <img
              className="absolute w-[15.57%] h-[71.77%] top-[28.12%] left-[61.86%]"
              alt="Vector"
              src="/img/vector-3.svg"
            />

            <img
              className="absolute w-[16.26%] h-[49.54%] top-[28.02%] left-[26.36%]"
              alt="Vector"
              src="/img/vector-4.svg"
            />

            <img
              className="absolute w-[16.26%] h-[49.50%] top-[28.16%] left-[44.12%]"
              alt="Vector"
              src="/img/vector-5.svg"
            />

            <img
              className="absolute w-[24.70%] h-[77.22%] top-0 left-0"
              alt="Vector"
              src="/img/vector-6.svg"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-col w-[1199px] items-center absolute top-[104px] left-[42px]">
        <div className="flex items-start justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-5 relative flex-1 grow">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="items-center flex-1 grow flex flex-col gap-4 p-6 relative self-stretch bg-black rounded-2xl border-[0.5px] border-solid border-[#ffffff33] shadow-[0px_2px_4px_#0000001a]"
              >
                <div className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className="relative w-10 h-10 rounded-[40px] border-[0.5px] border-solid border-white aspect-[1] bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${testimonial.avatar})` }}
                    role="img"
                    aria-label={`${testimonial.name} profile picture`}
                  />

                  <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                    <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="self-stretch leading-5 relative mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-lg tracking-[0]">
                        {testimonial.name}
                      </h3>

                      <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#ffffff80] text-sm tracking-[0] leading-[15px]">
                        {testimonial.role}
                      </p>
                    </div>

                    <div
                      className="inline-flex items-center gap-1 relative flex-[0_0_auto]"
                      role="img"
                      aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
                    >
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative self-stretch mt-[-1.00px] opacity-80 [font-family:'Montserrat',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                    {testimonial.comment}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <nav
        className="inline-flex items-center gap-[5px] absolute top-[483px] left-[calc(50.00%_-_24px)]"
        aria-label="Testimonials pagination"
      >
        {paginationDots.map((dot) => (
          <button
            key={dot.id}
            className={`relative w-3 h-3 bg-variable-collection-coloryellow rounded-md ${
              dot.active ? "" : "opacity-50"
            }`}
            aria-label={`Go to testimonial page ${dot.id}`}
            aria-current={dot.active ? "true" : "false"}
          />
        ))}
      </nav>

      <img
        className="absolute top-[255px] left-[calc(50.00%_-_642px)] w-[1283px] h-[41px]"
        alt="Frame"
        src="/img/frame-2147228986.svg"
      />
    </section>
  );
};
