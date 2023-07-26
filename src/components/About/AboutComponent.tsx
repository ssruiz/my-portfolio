import SectionHeader from '../commons/SectionHeader';

const AboutComponent = () => {
  return (
    <section id="about" className="text-white scroll-mt-24" aria-label="About">
      <SectionHeader title="About me" />

      <div className="space-y-8">
        <p>
          Hello everyone! Welcome to my developer portfolio presentation. I am
          Samuel. As a developer, I discovered my passion for programming during
          college and my first freelance projects. Since then, I&apos;ve been on
          an exciting journey of exploration and growth, immersing myself in
          various technologies to stay ahead in the ever-changing tech
          landscape.
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
