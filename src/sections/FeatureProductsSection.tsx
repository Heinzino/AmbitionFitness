'use client';
import React, { useState } from "react";

export const FeatureProductsSection = (): JSX.Element => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
  };

  return (
    <section className="flex flex-col w-full lg:w-[1200px] mx-auto lg:mx-0 items-center gap-10 md:gap-[60px] px-4 md:px-8 py-12 md:py-16 lg:py-0 relative lg:absolute lg:top-[7668px] lg:left-[360px]">
      <header className="flex flex-col w-full max-w-[1010px] items-center justify-center gap-4 md:gap-5">
        <h2 className="flex items-center justify-center self-stretch [font-family:'Prompt',Helvetica] font-medium text-white text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight md:leading-[53.3px]">
          Subscribe to our newsletter
        </h2>

        <p className="self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#ffffffcc] text-base md:text-lg lg:text-[21px] text-center tracking-[0] leading-[28px] md:leading-[31.5px]">
          Get exclusive fitness tips, workout plans, and special offers
          delivered to your inbox
        </p>
      </header>

      <div className="flex flex-col w-full max-w-[771px] items-center gap-6 md:gap-[30px]">
        <form onSubmit={handleSubmit} className="w-full max-w-[529px]">
          <div className="flex flex-col md:flex-row w-full items-stretch md:items-center gap-4 md:gap-0 md:justify-between p-4 md:pl-6 md:pr-0 md:py-3.5 bg-[#1a1a1a] rounded-xl">
            <label htmlFor="email-input" className="sr-only">
              Enter your email address
            </label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full md:w-auto flex-1 [font-family:'Montserrat',Helvetica] font-normal text-neutral-200 text-sm md:text-base text-center md:text-left tracking-[0] leading-[normal] bg-transparent border-0 outline-none placeholder:text-neutral-200 px-2 md:px-0"
              aria-label="Email address"
            />

            <button
              type="submit"
              className="inline-flex h-12 md:h-14 items-center justify-center gap-2 md:gap-[13px] px-5 md:px-6 py-3 md:py-5 bg-variable-collection-coloryellow rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap"
              aria-label="Subscribe"
            >
              <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#2f2f2f] text-sm md:text-base tracking-[0] leading-6 whitespace-nowrap">
                Subscribe
              </span>

              <img
                className="w-[18.33px] h-[11.41px]"
                alt=""
                src="/img/line-108-7.svg"
                aria-hidden="true"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
