import { useApp } from '../../context/AppContextValue';
import { Container } from '../ui/Container';
import { Section, SectionHeader } from '../ui/Section';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { business, telHref, waHref } from '../../data/business';
import './Contact.css';

const SOCIALS = [
  { key: 'facebook', label: 'Facebook', url: business.socials.facebook, icon: 'facebook' },
  { key: 'tiktok',   label: 'TikTok',   url: business.socials.tiktok,   icon: 'tiktok' },
  { key: 'maps',     label: 'Google Maps', url: business.socials.maps,  icon: 'pin' }
];

export function Contact() {
  const { t } = useApp();

  return (
    <Section id="contact">
      <Container className="contact__inner">
        <Reveal>
          <SectionHeader
            eyebrow={t.nav.contact}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </Reveal>

        <div className="contact__grid">
          <Reveal as="a" href={telHref} delay={80} className="contact__card contact__card--red">
            <div className="contact__icon"><Icon name="phone" size={26} /></div>
            <span className="contact__label">{t.contact.phoneLabel}</span>
            <strong>{business.phone.display}</strong>
            <span className="contact__btn">{t.contact.callBtn}</span>
          </Reveal>

          <Reveal
            as="a"
            href={waHref(t.contact.whatsappBody)}
            target="_blank"
            rel="noopener noreferrer"
            delay={160}
            className="contact__card contact__card--green"
          >
            <div className="contact__icon"><Icon name="whatsapp" size={28} /></div>
            <span className="contact__label">{t.contact.whatsappLabel}</span>
            <strong>{business.phone.display}</strong>
            <span className="contact__btn">{t.contact.whatsappBtn}</span>
          </Reveal>

          <Reveal
            as="a"
            href={business.socials.maps}
            target="_blank"
            rel="noopener noreferrer"
            delay={240}
            className="contact__card contact__card--red"
          >
            <div className="contact__icon"><Icon name="pin" size={26} /></div>
            <span className="contact__label">{t.contact.mapsLabel}</span>
            <strong>Google Maps</strong>
            <span className="contact__btn">{t.contact.mapsBtn}</span>
          </Reveal>
        </div>

        <Reveal delay={320} className="contact__social">
          <span className="contact__socialLabel">{t.contact.followUs}</span>
          <div className="contact__socialLinks">
            {SOCIALS.map(s => (
              <a
                key={s.key}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`social social--${s.key}`}
              >
                <Icon name={s.icon} size={20} />
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
