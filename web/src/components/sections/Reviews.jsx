import { useApp } from '../../context/AppContextValue';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';
import { GoogleLogo } from '../ui/GoogleLogo';
import { reviews, reviewsMeta } from '../../data/reviews';
import './Reviews.css';

function Stars({ value, size = 14 }) {
  return (
    <span className="stars" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="starFilled" size={size} className={i < value ? 'stars__filled' : 'stars__empty'} />
      ))}
    </span>
  );
}

export function Reviews() {
  const { t, pick } = useApp();

  return (
    <Section id="reviews" variant="soft">
      <Container>
        <Reveal>
          <header className="reviews__head">
            <span className="section__eyebrow">{t.nav.reviews}</span>
            <h2 className="section__title">{t.reviews.title}</h2>

            <div className="reviews__summary">
              <GoogleLogo size={28} />
              <div className="reviews__summaryRating">
                <strong>{reviewsMeta.rating.toFixed(1)}</strong>
                <Stars value={Math.round(reviewsMeta.rating)} size={18} />
              </div>
              <span className="reviews__summaryCount">{t.reviews.basedOn(reviewsMeta.count)}</span>
            </div>
          </header>
        </Reveal>

        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <Reveal key={r.id} delay={i * 60} as="article" className="review">
              <div className="review__head">
                <span className="review__avatar" style={{ background: r.color }}>{r.initial}</span>
                <div className="review__who">
                  <strong>{r.name}</strong>
                  <span className="review__date">{pick(r.date)} · {t.reviews.ratedOn}</span>
                </div>
                <GoogleLogo size={18} className="review__google" />
              </div>

              <Stars value={r.rating} />

              <p className="review__text">{pick(r.text)}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="reviews__cta">
          <a
            href={reviewsMeta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="reviews__ctaLink"
          >
            <GoogleLogo size={20} />
            {t.reviews.seeAll}
            <Icon name="arrowRight" size={14} strokeWidth={3} />
          </a>
        </Reveal>
      </Container>
    </Section>
  );
}
