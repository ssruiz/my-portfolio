import { Icons } from '../Icons';
import SectionHeader from '../commons/SectionHeader';
import StackIcons from './StackIcons';

const StackComponent = () => {
  return (
    <section id="stack" className="text-white scroll-mt-16" aria-label="About">
      <SectionHeader title="My stack" />

      <div className="p-6 text-center">
        <p className="mb-10 text-xl font-bold">I work with</p>
        <div className="grid grid-cols-6 space-y-5">
          <div className="col-span-6 flex gap-10 justify-center items-center">
            <StackIcons delay={0} size={50} icon={Icons.nextjs} />
            <StackIcons delay={0.5} size={50} icon={Icons.react} />
            <StackIcons delay={1.0} size={50} icon={Icons.ts} />
            <StackIcons delay={1.5} size={50} icon={Icons.tailwind} />
            <StackIcons delay={2.0} size={50} icon={Icons.nestjs} />
          </div>
          <div className="col-span-6 flex gap-10 justify-center">
            <StackIcons delay={0.5} size={40} icon={Icons.prisma} />
            <StackIcons delay={1.0} size={40} icon={Icons.java} />
            <StackIcons delay={1.5} size={40} icon={Icons.docker} />
            <StackIcons delay={2} size={40} icon={Icons.js} />
          </div>
          <div className="col-span-6 flex gap-10 justify-center">
            <StackIcons delay={1.5} size={35} icon={Icons.html} />
            <StackIcons delay={2} size={35} icon={Icons.css} />
          </div>
        </div>
      </div>
      <div className="p-6 text-center">
        <p className="mb-10 text-xl font-bold">I have fun with</p>
        <div className="grid grid-cols-6 space-y-5">
          <div className="col-span-6 flex gap-10 justify-center">
            <StackIcons delay={0.5} size={50} icon={Icons.prisma} />
            <StackIcons delay={1.0} size={50} icon={Icons.java} />
            <StackIcons delay={1.5} size={50} icon={Icons.docker} />
            <StackIcons delay={2} size={50} icon={Icons.js} />
          </div>
          <div className="col-span-6 flex gap-10 justify-center">
            <StackIcons delay={1.5} size={40} icon={Icons.html} />
            <StackIcons delay={2} size={40} icon={Icons.css} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackComponent;
