import Link from 'next/link';
import AnimatedLine from './AnimatedLine';
import { Experience } from './experienceList';
import { BiLinkExternal } from 'react-icons/bi';

const ExperienceDetail: React.FC<Experience> = ({
  company,
  startYear,
  title,
  endYear,
  brief,
  project,
  link,
  stack,
}) => {
  return (
    <Link href={link || ''} target={link ? '_blank' : '_self'}>
      <div className="p-6 group hover:bg-black/20 rounded-md transition-all cursor-pointer">
        <div className="relative grid pb-1 transition-all grid-cols-8 sm:gap-8 gap-4 lg:hover:!opacity-100">
          <div className="col-span-4 lg:col-span-3 flex flex-col items-center relative">
            <p className="z-10 mb-2 mt-1 text-xs font-normal uppercase tracking-wide text-slate-500 sm:col-span-2">
              {startYear} - {endYear}
            </p>
            <AnimatedLine />
          </div>
          <div className="col-span-4 lg:col-span-5">
            <h3 className="relative">
              <div className="flex gap-1 items-center">
                {title}
                {link && (
                  <BiLinkExternal
                    className="cursor-pointer group-hover:text-teal-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110"
                    size={20}
                  />
                )}
              </div>
              <div className="text-slate-500 text-sm">{company}</div>
              <div className="text-slate-500 text-sm">{project}</div>
            </h3>
            <p className="mt-2 text-sm leading-normal">{brief}</p>

            <div className="flex gap-2 mt-4 flex-wrap">
              {stack.map((projectStack) => (
                <div
                  key={projectStack}
                  className="text-xs py-1 px-2 text-teal-500 rounded-full bg-teal-950"
                >
                  {projectStack}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceDetail;
