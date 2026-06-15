import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../utils/cn';
import './Reveal.css';

export function Reveal({ as: Comp = 'div', delay = 0, y = 16, className, children, ...rest }) {
  const ref = useReveal();
  const style = { '--reveal-delay': `${delay}ms`, '--reveal-y': `${y}px` };
  return (
    <Comp ref={ref} data-reveal="out" className={cn('reveal', className)} style={style} {...rest}>
      {children}
    </Comp>
  );
}
