import { useApp } from '../../context/AppContextValue';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { telHref } from '../../data/business';
import './Hero.css';

export function Hero() {
  const { t } = useApp();
  const [pre, accent, post] = t.hero.titleParts;

  return (
    <section id="home" className="hero">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={`${import.meta.env.BASE_URL}assets/img7.webp`}
        aria-hidden="true"
      >
        <source src={`${import.meta.env.BASE_URL}assets/vid.mp4`} type="video/mp4" />
      </video>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <Container className="hero__content">
        <div className="hero__left">
          <Reveal as="span" className="chip">
            <span className="chip__dot" /> {t.hero.tagline}
          </Reveal>

          <Reveal as="h1" delay={120} className="hero__title">
            <span>{pre} </span>
            <span className="hero__accent">{accent}</span>
            <span> {post}</span>
          </Reveal>

          <Reveal as="p" delay={220} className="hero__subtitle">{t.hero.subtitle}</Reveal>

          <Reveal delay={320} className="hero__ctas">
            <Button as="a" href="#services" variant="red" size="lg" iconRight={<Icon name="arrowRight" size={16} strokeWidth={3} />}>
              {t.hero.cta1}
            </Button>
            <Button as="a" href={telHref} variant="blue" size="lg" iconLeft={<Icon name="phone" size={16} strokeWidth={2.5} />}>
              {t.hero.cta2}
            </Button>
          </Reveal>

          <Reveal delay={420} className="hero__badges">
            {t.hero.badges.map((b) => (
              <span key={b} className="hero__badge">
                <Icon name="check" size={14} strokeWidth={3} />
                {b}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal delay={220} className="hero__right">
          <div className="hero__logoWrap">
            <img src={`${import.meta.env.BASE_URL}assets/logo.webp`} alt="" width="460" height="460" />
          </div>
          <span className="hero__star hero__star--tl" aria-hidden="true" />
          <span className="hero__star hero__star--br" aria-hidden="true" />
        </Reveal>
      </Container>

      <a href="#services" className="hero__scroll" aria-label="Scroll to services">
        <span />
      </a>
    </section>
  );
}
