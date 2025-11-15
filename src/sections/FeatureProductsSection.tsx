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
    <section className="flex flex-col w-[1200px] items-center gap-[60px] absolute top-[7668px] left-[360px]">
      <header className="flex flex-col w-[1010px] items-start justify-center gap-5 relative flex-[0_0_auto]">
        <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Prompt',Helvetica] font-medium text-white text-5xl text-center tracking-[0] leading-[53.3px]">
          Subscribe to our newsletter
        </h2>

        <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-[#ffffffcc] text-[21px] text-center tracking-[0] leading-[31.5px]">
          Get exclusive fitness tips, workout plans, and special offers
          delivered to your inbox
        </p>
      </header>

      <div className="flex flex-col w-[771px] items-center gap-[30px] relative flex-[0_0_auto]">
        <form onSubmit={handleSubmit} className="relative w-[529px] h-14">
          <div className="flex w-[531px] h-[58px] items-center justify-between pl-6 pr-0 py-3.5 relative -top-px -left-px bg-[#1a1a1a] rounded-xl">
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
              className="relative w-fit [font-family:'Montserrat',Helvetica] font-normal text-neutral-200 text-base text-center tracking-[0] leading-[normal] bg-transparent border-0 outline-none placeholder:text-neutral-200"
              aria-label="Email address"
            />

            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center gap-[13px] px-6 py-5 relative flex-[0_0_auto] mt-[-14.00px] mb-[-12.00px] bg-variable-collection-coloryellow rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              aria-label="Start free trial"
            >
              <span className="relative w-fit mt-[-6.00px] mb-[-2.00px] [font-family:'Montserrat',Helvetica] font-medium text-[#2f2f2f] text-base tracking-[0] leading-6 whitespace-nowrap">
                Start Free Trial
              </span>

              <img
                className="relative w-[18.33px] h-[11.41px] mr-[-0.77px]"
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
