import AboutComponent from '@/components/About/AboutComponent';
import SiteHeader from '@/components/SiteHeader';
import ExperienceComponent from '@/components/experience/ExperienceComponent';
import FooterComponent from '@/components/footer/FooterComponent';
import StackComponent from '@/components/stack/StackComponent';

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between w-full gap-24 relative">
      <SiteHeader />

      {/* <div className=" bg-center bg-cover w-full aspect-960/300 "></div> */}

      <main className="lg:w-9/12 lg:pt-24 space-y-28">
        <AboutComponent />
        <ExperienceComponent />
        <StackComponent />
        <FooterComponent />
      </main>
    </div>
  );
}
