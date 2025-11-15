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
      value: "95%",
      label: "Success Rate",
    },
    {
      value: "3+",
      label: "Expert Trainers",
    },
  ];

  return (
    <section
      className="flex w-[1181px] items-center justify-between p-[30px] absolute top-[956px] left-[calc(50.00%_-_590px)] bg-variable-collection-coloryellow rounded-[23px]"
      aria-label="Company Statistics"
    >
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center gap-[30px] relative flex-1 grow">
            <div className="inline-flex flex-col items-center gap-[25px] relative flex-[0_0_auto]">
              <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
                <h3 className="relative w-fit mt-[-2.00px] [font-family:'Montserrat',Helvetica] font-bold text-variable-collection-colorpriamry text-[45px] tracking-[0] leading-[31px] whitespace-nowrap">
                  {stat.value}
                </h3>
              </div>

              <img
                className="relative w-[42px] h-[3px]"
                alt=""
                src="/img/line-16-3.svg"
                role="presentation"
              />
            </div>

            <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-medium text-variable-collection-colorpriamry text-base text-center tracking-[0] leading-6">
              {stat.label}
            </p>
          </div>

          {index < stats.length - 1 && (
            <img
              className="relative w-px h-[157px] object-cover"
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
