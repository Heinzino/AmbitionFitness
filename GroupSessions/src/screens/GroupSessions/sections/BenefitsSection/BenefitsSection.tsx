import React from "react";

interface ScheduleItem {
  id: string;
  className: string;
  schedule: string;
  hasBorder: boolean;
}

export const BenefitsSection = (): JSX.Element => {
  const scheduleData: ScheduleItem[] = [
    {
      id: "1",
      className: "Senior Fitness",
      schedule: "Mon & Wed, 10:00 AM",
      hasBorder: true,
    },
    {
      id: "2",
      className: "Boot Camp",
      schedule: "Tue & Thu, 6:00 PM",
      hasBorder: true,
    },
    {
      id: "3",
      className: "Boot Camp",
      schedule: "Sat, 9:00 AM",
      hasBorder: false,
    },
  ];

  return (
    <section className="flex flex-col w-[770px] items-start gap-14 absolute top-[2603px] left-[calc(50.00%_-_385px)]">
      <header className="flex flex-col items-center justify-center gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[45px] text-center tracking-[0] leading-[60px]">
            Class Schedule
          </h2>
        </div>

        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6">
            Small class sizes ensure personalized attention from our instructors
          </p>
        </div>
      </header>

      <div className="flex flex-col items-center gap-8 pt-[57px] pb-[49px] px-[49px] relative self-stretch w-full flex-[0_0_auto] rounded-xl bg-[linear-gradient(0deg,rgba(25,25,25,1)_0%,rgba(25,25,25,1)_100%)]">
        <ul className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          {scheduleData.map((item) => (
            <li
              key={item.id}
              className={`flex items-center justify-between pt-0 ${
                item.hasBorder ? "pb-[17px]" : "pb-4"
              } px-0 relative self-stretch w-full flex-[0_0_auto] ${
                item.hasBorder
                  ? "border-b [border-bottom-style:solid] border-[#363d49]"
                  : ""
              }`}
            >
              <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  {item.className}
                </span>
              </div>

              <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  {item.schedule}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <button
          className="inline-flex items-center justify-center gap-2.5 px-[35px] py-[15px] relative flex-[0_0_auto] bg-variable-collection-coloryellow rounded-[1000px] cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-variable-collection-coloryellow focus:ring-offset-2 focus:ring-offset-[#191919]"
          type="button"
          aria-label="Book a tour of our facility"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorpriamry text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
            Book a Tour
          </span>

          <svg
            className="relative w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 0H0V0H0Z"
              stroke="currentColor"
              strokeWidth="1"
              className="text-variable-collection-colorpriamry"
            />
            <path
              d="M0 0H0V0H0Z"
              stroke="currentColor"
              strokeWidth="1"
              className="text-variable-collection-colorpriamry"
            />
            <path
              d="M1.33333 2L12 12L1.33333 12L1.33333 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-variable-collection-colorpriamry"
            />
            <path
              d="M1.33333 6H13.3333"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="text-variable-collection-colorpriamry"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
