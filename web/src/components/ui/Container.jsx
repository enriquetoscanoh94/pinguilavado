import { cn } from '../../utils/cn';

export function Container({ as: Comp = 'div', size = 'default', className, children, ...rest }) {
  return (
    <Comp className={cn('container', size !== 'default' && `container--${size}`, className)} {...rest}>
      {children}
    </Comp>
  );
}
