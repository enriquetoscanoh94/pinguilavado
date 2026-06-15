import { useApp } from '../../context/AppContextValue';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { business } from '../../data/business';
import './About.css';

const FEATURE_ICONS = ['truck', 'spray', 'shield', 'star'];
const FEATURE_COLORS = ['red', 'blue', 'red', 'blue'];

export function About() {
  const { t } = useApp();

  return (
    <Section id="about" variant="soft" className="about">
      <Container className="about__grid">
        <Reveal className="about__media">
          <video autoPlay muted loop playsInline preload="metadata" poster={`${import.meta.env.BASE_URL}assets/img4.webp`} aria-hidden="true">
            <source src={`${import.meta.env.BASE_URL}assets/vid1.mp4`} type="video/mp4" />
          </video>
          <div className="about__sticker" aria-hidden="true">
            <strong>{business.yearsExperience}+</strong>
            <span>{t.about.stickerYears}<br />{t.about.stickerExp}</span>
          </div>
        </Reveal>

        <div className="about__copy">
          <Reveal as="span" className="section__eyebrow">{t.nav.about}</Reveal>
          <Reveal as="h2" delay={60} className="section__title about__title">{t.about.title}</Reveal>
          <Reveal as="p" delay={120} className="about__lead">{t.about.lead}</Reveal>
          <Reveal as="p" delay={180} className="about__p">{t.about.p1}</Reveal>
          <Reveal as="p" delay={240} className="about__p">{t.about.p2}</Reveal>

          <Reveal delay={320} className="about__features">
            {t.about.features.map((f, i) => (
              <div key={f.title} className={`about__feature about__feature--${FEATURE_COLORS[i]}`}>
                <div className="about__featureIcon">
                  <Icon name={FEATURE_ICONS[i]} size={22} />
                </div>
                <div>
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
