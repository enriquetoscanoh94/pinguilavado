import { cn } from '../../utils/cn';
import './Button.css';

export function Button({
  as: Comp = 'button',
  variant = 'red',
  size = 'md',
  iconLeft,
  iconRight,
  className,
  children,
  ...rest
}) {
  return (
    <Comp
      className={cn('btn', `btn--${variant}`, `btn--${size}`, className)}
      {...rest}
    >
      {iconLeft && <span className="btn__icon btn__icon--left">{iconLeft}</span>}
      <span className="btn__label">{children}</span>
      {iconRight && <span className="btn__icon btn__icon--right">{iconRight}</span>}
    </Comp>
  );
}
