import { cn } from '../../utils/cn';

export function Section({ id, variant, className, children, ...rest }) {
  return (
    <section
      id={id}
      className={cn('section', variant && `section--${variant}`, className)}
      {...rest}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center', className }) {
  return (
    <header className={cn('section__header', `section__header--${align}`, className)}>
      {eyebrow && <span className="section__eyebrow">{eyebrow}</span>}
      <h2 className="section__title">{title}</h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </header>
  );
}
