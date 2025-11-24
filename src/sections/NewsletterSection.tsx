import React from "react";

interface StatItem {
  value: string;
  label: string;
}

export const NewsletterSection = (): JSX.Element => {
  const stats: StatItem[] = [
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "500+",
      label: "Clients Transformed",
    },
    {
      value: "99%",
      label: "Success Rate",
    },
    {
      value: "3+",
      label: "Expert Trainers",
    },
  ];

  return (
    <section
      className="grid grid-cols-2 lg:flex w-full lg:w-[1181px] items-center justify-between gap-6 md:gap-8 p-6 md:p-[30px] mx-auto my-8 md:my-12 lg:my-0 relative lg:absolute lg:top-[956px] lg:left-[calc(50.00%_-_590px)] bg-variable-collection-coloryellow rounded-[23px]"
      aria-label="Company Statistics"
    >
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center gap-4 md:gap-[30px] flex-1">
            <div className="inline-flex flex-col items-center gap-4 md:gap-[25px]">
              <div className="inline-flex items-start gap-2.5">
                <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-variable-collection-colorpriamry text-3xl md:text-4xl lg:text-[45px] tracking-[0] leading-tight whitespace-nowrap">
                  {stat.value}
                </h3>
              </div>

              <img
                className="w-[42px] h-[3px]"
                alt=""
                src="/img/line-16-3.svg"
                role="presentation"
              />
            </div>

            <p className="w-full [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorpriamry text-sm md:text-base text-center tracking-[0] leading-6">
              {stat.label}
            </p>
          </div>

          {index < stats.length - 1 && (
            <img
              className="hidden lg:block w-px h-[157px] object-cover"
              alt=""
              src="/img/line-223.svg"
              role="presentation"
            />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};
