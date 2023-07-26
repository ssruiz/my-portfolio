import { Icon, IconConf } from '../Icons';
import AnimateComponent from '../commons/InViewComponent';

interface Props {
  iConfiguracion: IconConf;
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

const StackIcons: React.FC<Props> = ({
  iConfiguracion: { icon: Icon, color },
  size,
  delay,
}) => (
  <AnimateComponent {...defaultAnimationProps} delay={delay} once={true}>
    <Icon size={size} color={color} />
  </AnimateComponent>
);

export default StackIcons;
