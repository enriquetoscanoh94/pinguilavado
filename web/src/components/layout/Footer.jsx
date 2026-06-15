import { useApp } from '../../context/AppContextValue';
import { Container } from '../ui/Container';
import { business, telHref } from '../../data/business';
import './Footer.css';

const YEAR = new Date().getFullYear();

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="footer">
      <Container className="footer__top">
        <div className="footer__brand">
          <img src="/assets/logo.webp" alt="" width="56" height="56" />
          <div>
            <strong>{business.shortName.toUpperCase()}</strong>
            <span>{t.footer.tagline}</span>
          </div>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#services">{t.nav.services}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="footer__contact">
          <a href={telHref}>{business.phone.display}</a>
          <span>{business.owner}</span>
        </div>
      </Container>

      <div className="footer__bottom">
        <Container className="footer__bottomInner">
          <span>&copy; {YEAR} {business.name}. {t.footer.rights}</span>
          <span className="footer__built">{t.footer.built}</span>
        </Container>
      </div>
    </footer>
  );
}
