import { funStack, workingStack } from '../Icons';
import SectionHeader from '../commons/SectionHeader';
import StackIcons from './StackIcons';

const StackComponent = () => {
  return (
    <section id="stack" className="text-white scroll-mt-16" aria-label="About">
      <SectionHeader title="My stack" />

      <div className="p-6 text-center">
        <p className="mb-10 text-xl font-bold tracking-wider">I work with</p>
        <div className="grid grid-cols-6 space-y-5">
          <div className="col-span-6 flex gap-10 justify-center items-center flex-wrap">
            {workingStack.map((stack, index) => (
              <StackIcons
                key={stack.key}
                delay={0.5 * index}
                size={40}
                iConfiguracion={stack}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 text-center">
        <p className="mb-10 text-xl font-bold tracking-wider">
          I have fun with
        </p>
        <div className="grid grid-cols-6 space-y-5">
          <div className="col-span-6 flex gap-10 justify-center flex-wrap">
            {funStack.map((stack, index) => (
              <StackIcons
                key={stack.key}
                delay={0.5 * index}
                size={40}
                iConfiguracion={stack}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackComponent;
