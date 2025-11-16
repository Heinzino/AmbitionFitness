'use client';
import React, { useState, useEffect } from "react";

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    name: "Alex Dugas",
    rating: 5,
    date: "3 months ago",
    text: "Absolutely awesome gym 10/10. Guil is super super easy to work with highly highly recommend. Gym is also super clean tons of updated machines and also quiet most times of the day.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWsrtfYlLRGVZC5LcP9hTEXOK9ZDtloLKwAJ--lxGJxMvBmBqxR=s120-c-rp-mo-br100"
  },
  {
    name: "Luz Alvizurez",
    rating: 5,
    date: "3 years ago",
    text: "I can't fully express how happy I am to have discovered this gym. It took me many many years and many attempts at going to the gym before finding Ambition Fitness. I've been training with Guil for a few months and he's incredible. I've tried personal training before but Guil is kind, approachable, but pushes you beyond what you thought was possible.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLsb_gkbRCyeyWjli22UUsJN9xlBDlGyLAyzkVJlslv419ptA=s120-c-rp-mo-br100"
  },
  {
    name: "Rebecca Rosaasen",
    rating: 5,
    date: "6 years ago",
    text: "I've been training on and off with Guil for almost 2 years. He is amazing! He helped me reach my goals and up my self esteem, to the point I didn't know originally existed!! He is very flexible with scheduling, and always has a smiling face when you walk through the door!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIQ-uXuMUKKCWpxth9yVqDKb-ckdqk5SZGEb6MHLo67AczY6A=s120-c-rp-mo-br100"
  },
  {
    name: "Anthony Hyde",
    rating: 5,
    date: "7 years ago",
    text: "In my opinion, Guil is the best personal trainer around. I couldn't have asked for a more professional, courteous, and friendly person to help me achieve my fitness goals. He constantly challenges me, but still makes every workout enjoyable.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocL4ZpaBOtJMSYHZ6xNS2kw3OKXwo1SeUUwbWCysWjm-FTrSLA=s120-c-rp-mo-br100"
  },
  {
    name: "Vishnu Reddy",
    rating: 5,
    date: "7 years ago",
    text: "Before that I was never a gym body but after meeting Guil, he helped me transform me physically and mentally. He pushes you and very flexible with schedule. I would absolutely recommend to try training with Guil, just blindly follow him and you will start seeing results in no time.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW0iai2cXWZMuWyIR7OZyst2iyN_l6Fu1-1yvIASi_hwGUNZMnQdw=s120-c-rp-mo-br100"
  },
  {
    name: "Nikki D",
    rating: 5,
    date: "3 years ago",
    text: "Did I die and go to gym heaven??? This is hands down the nicest facility in Calgary. Very clean, quality equipment, great layout and fantastic owners. Guil is awesome. He's very helpful and accommodating, makes you really feel welcome.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKIch6YglOf2v2s013sMBgywOToYRZnMg3z9-XWbBxXz3iuJfA=s120-c-rp-mo-ba4-br100"
  },
  {
    name: "Brandy Stgelais",
    rating: 5,
    date: "6 years ago",
    text: "Guil and Stella are amazing!!!!! I personally have been training with guil for two years now, and the dedication and passion he genuinely has for helping people reach their goals, is inspiring. Guils helped me to lose over 75 pounds and counting. Super flexible, always challenging, and a ton of fun.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW4p4EoPaeTqaboWKRfxlgSLUQdHPXOVUZQgbgH9DtqF67H9NBZ=s120-c-rp-mo-br100"
  },
  {
    name: "Mona Rehan",
    rating: 5,
    date: "7 years ago",
    text: "I've been training with Guil for the past few years! He is a very professional and excellent trainer! Guil motivates you when you need it the most! He's super flexible and makes our sessions an absolute delight!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVA2tKWFbiyDPPHhYr70l04jZAhJYgEz_5oB3S0h-9Av5UZLziGzg=s120-c-rp-mo-ba2-br100"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-variable-collection-coloryellow' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export const TestimonialsSection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 15000); // 15 seconds per review

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  return (
    <section
      className="flex flex-col w-[1200px] items-center gap-12 absolute top-[5950px] left-[calc(50.00%_-_600px)]"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="Ambition Fitness" />
      <meta itemProp="image" content="https://ambitionfitness.ca/img/image-3-2.png" />
      <meta itemProp="telephone" content="+1-403-XXX-XXXX" />
      <meta itemProp="address" content="2421 Centre Ave #4, Calgary, AB T2E 0A9, Canada" />
      <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
        <meta itemProp="ratingValue" content="4.7" />
        <meta itemProp="reviewCount" content="48" />
      </div>

      <header className="flex flex-col items-center gap-[25px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-coloryellow text-[15px] text-center tracking-[0.45px] leading-[24.0px] whitespace-nowrap">
            What Our Clients Say
          </p>

          <img
            className="relative w-[110.67px] h-[2.97px]"
            alt=""
            src="/img/rectangle-5-1.svg"
            aria-hidden="true"
          />
        </div>

        <h2 className="relative flex items-center justify-center self-stretch [font-family:'Montserrat',Helvetica] font-semibold text-white text-[45px] tracking-[0] leading-[45px]">
          Client Reviews
        </h2>

        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-variable-collection-coloryellow"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xl">
            4.7 out of 5 <span className="opacity-60">• 48 Google Reviews</span>
          </p>
        </div>
      </header>

      <div className="relative w-full max-w-[900px]">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <article
                key={index}
                className="min-w-full flex flex-col items-center gap-6 px-8"
                itemProp="review"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={review.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                </div>

                <div className="flex flex-col items-center gap-4">
                  {review.avatar && (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                      itemProp="author"
                    />
                  )}
                  <div className="flex flex-col items-center gap-2">
                    <h3
                      className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-xl"
                      itemProp="author"
                    >
                      {review.name}
                    </h3>
                    <StarRating rating={review.rating} />
                    <time
                      className="[font-family:'Montserrat',Helvetica] font-normal text-white/60 text-sm"
                      itemProp="datePublished"
                    >
                      {review.date}
                    </time>
                  </div>
                </div>

                <blockquote
                  className="[font-family:'Montserrat',Helvetica] font-normal text-white/90 text-lg text-center leading-[27px] max-w-[700px]"
                  itemProp="reviewBody"
                >
                  "{review.text}"
                </blockquote>
              </article>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer"
          aria-label="Previous review"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer"
          aria-label="Next review"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              index === currentIndex
                ? 'bg-variable-collection-coloryellow w-8'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>

      <a
        href="https://www.google.com/maps/place/Ambition+Fitness/@51.0499657,-113.9887337,17z/data=!4m8!3m7!1s0x53717ad599fe5191:0x8c4deee3c86105e0!8m2!3d51.0499657!4d-113.9861588!9m1!1b1!16s%2Fg%2F11c1q9zv0k"
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 bg-variable-collection-colorpriamry inline-flex items-center justify-center gap-2.5 px-[35px] py-[15px] relative rounded-[1000px] cursor-pointer transition-transform hover:scale-105 active:scale-95"
      >
        <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
          Read All Reviews on Google
        </span>

        <img
          className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
          alt=""
          src="/img/line-108-5.svg"
          aria-hidden="true"
        />
      </a>
    </section>
  );
};
