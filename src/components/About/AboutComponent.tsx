import SectionHeader from '../commons/SectionHeader';

const AboutComponent = () => {
  return (
    <section id="about" className="text-white scroll-mt-16" aria-label="About">
      <SectionHeader title="About me" />

      <div className="space-y-8">
        <p>
          Hello everyone! Welcome to my developer portfolio presentation. I am
          Samuel. As a dedicated developer, I&apos;ve ventured into the exciting
          world of coding, and this website is a showcase of my journey.
        </p>
        <p>
          From crafting elegant websites with HTML, CSS, and JavaScript to
          building robust applications with Node, Java, and more, I&apos;ve
          honed my skills across various technologies.
        </p>
        <p>
          Today, I am excited to share my journey, stack, and expertise with
          you. So, let&apos;s dive in!
        </p>
      </div>
    </section>
  );
};

export default AboutComponent;
