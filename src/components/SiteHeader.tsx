import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Navbar from './commons/Navbar';

const SiteHeader = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24 bg-fondocurvamb lg:bg-fondocurva bg-cover rounded-md p-6 animate-fade-down lg:aspect-square">
      <div className="absolute -z-10 top-0 left-0 bg-black/80 h-full w-full"></div>
      <div className="space-y-2">
        <h1 className="text-5xl font-bold animate-pulse animate-infinite animate-ease-in animate-duration-[3000ms]">
          Samuel Ruiz
        </h1>
        <p className="text-xl font-medium animate-pulse animate-infinite animate-ease-in animate-delay-200 animate-duration-[3000ms]">
          Fullstack developer
        </p>
        <p className="leading-normal max-w-lg text-white animate-pulse animate-infinite animate-ease-in animate-delay-300 animate-duration-[3000ms]">
          Bringing innovation to the web, one project at a time!
        </p>
      </div>

      <div className="flex gap-2 mt-5">
        <Link href="https://github.com/ssruiz" target="_blank">
          <AiFillGithub
            className="cursor-pointer hover:opacity-70 transition-all"
            size={30}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/ssruiz6/" target="_blank">
          <AiFillLinkedin
            className="cursor-pointer hover:opacity-70 transition-all "
            size={30}
          />
        </Link>
      </div>

      <Navbar />
    </header>
  );
};

export default SiteHeader;
