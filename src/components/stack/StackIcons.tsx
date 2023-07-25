import { Icon } from '../Icons';
import AnimateComponent, {
  AnimateComponentProps,
} from '../commons/InViewComponent';

interface Props {
  icon: Icon;
  size: number;
  delay: number;
}

const defaultAnimationProps = {
  delay: 2,
  duration: 0.5,
  variants: {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  inViewState: 'visible',
  noInViewState: 'hidden',
};

const StackIcons: React.FC<Props> = ({ icon: Icon, size, delay }) => {
  return (
    <AnimateComponent {...defaultAnimationProps} delay={delay} once={true}>
      <Icon size={size} className={'hover:text-teal-500 transition-colors'} />
    </AnimateComponent>
  );
};

export default StackIcons;
