import { useState } from 'react';
import { useApp } from '../../context/AppContextValue';
import { useScrolledPast } from '../../hooks/useScrollPosition';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';
import './Navbar.css';

export function Navbar() {
  const { t, lang, toggleLang, theme, toggleTheme } = useApp();
  const scrolled = useScrolledPast(20);
  const [open, setOpen] = useState(false);

  useBodyScrollLock(open);
  useEscapeKey(() => setOpen(false), open);

  const close = () => setOpen(false);
  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#gallery',  label: t.nav.gallery },
    { href: '#about',    label: t.nav.about },
    { href: '#contact',  label: t.nav.contact }
  ];

  return (
    <header className={cn('nav', scrolled && 'nav--scrolled')}>
      <Container className="nav__inner">
        <a href="#home" className="nav__brand" onClick={close} aria-label="The Penguin Auto Detailing">
          <img src={`${import.meta.env.BASE_URL}assets/logo.webp`} alt="" width="46" height="46" />
          <span className="nav__brandText">
            <strong>THE PENGUIN</strong>
            <em>Auto Mobile Detailing</em>
          </span>
        </a>

        <nav className={cn('nav__links', open && 'is-open')} aria-label="Primary">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <Button as="a" href="#contact" variant="red" size="sm" className="nav__cta" onClick={close}>
            {t.nav.bookNow}
          </Button>
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn icon-btn--pill nav__langBtn"
            onClick={toggleLang}
            aria-label={t.nav.toggleLang}
            title={t.nav.toggleLang}
          >
            <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
            <span aria-hidden="true" className="nav__langSep">·</span>
            <span className={lang === 'es' ? 'is-active' : ''}>ES</span>
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={t.nav.toggleTheme}
            title={t.nav.toggleTheme}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <button
            type="button"
            className="icon-btn nav__hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="primary-nav"
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </Container>
    </header>
  );
}
