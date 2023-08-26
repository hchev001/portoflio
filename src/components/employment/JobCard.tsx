interface JobCardProps {
  title: string;
  icon?: React.ReactNode | string;
  company: string;
  tenure: string;
  technologies: string[];
  text: string[];
}

export const JobCard = ({
  title,
  icon,
  company,
  tenure,
  technologies,
  text,
}: JobCardProps) => {
  return (
    <div className="w-full max-w-4xl py-16 px-8 grid grid-cols-1 lg:grid-cols-[424px_1fr] gap-4 lg:gap-0 bg-haze-200 p-8 rounded-3xl">
      <div className="flex flex-col">
        {icon && <div className="mb-1">{icon}</div>}
        <h2 className="font-inter font-semibold mb-0.5">{title}</h2>
        <div className="mb-0.5 small font-inter uppercase">{company}</div>
        <div className="mb-12 small font-inter uppercase">{tenure}</div>
        <div className="max-w-[246px] flex flex-wrap gap-x-2 gap-y-1.5">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="tag py-1 px-1.5 bg-white rounded-xl font-barlow font-light "
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-plomo-600 to-plomo-900">
                {tech}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 [&>p]:font-barlow [&>p]:text-btgray">
        {text.map((t, idx) => (
          <p key={idx}>{t}</p>
        ))}
      </div>
    </div>
  );
};
