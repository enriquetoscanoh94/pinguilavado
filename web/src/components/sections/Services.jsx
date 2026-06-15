import { useState } from 'react';
import { useApp } from '../../context/AppContextValue';
import { Container } from '../ui/Container';
import { Section, SectionHeader } from '../ui/Section';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { packages, vehicleTypes, TIER } from '../../data/packages';
import { waHref } from '../../data/business';
import { cn } from '../../utils/cn';
import './Services.css';

const PKG_ICON = {
  [TIER.SILVER]:   'pkgSilver',
  [TIER.GOLDEN]:   'pkgGolden',
  [TIER.PLATINUM]: 'pkgPlatinum',
  [TIER.DIAMOND]:  'pkgDiamond',
  [TIER.EXTRAS]:   'pkgPlatinum'
};

export function Services() {
  const { t, pick } = useApp();
  const [vehicle, setVehicle] = useState('sedan');

  return (
    <Section id="services" variant="soft">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={t.nav.services}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
        </Reveal>

        <Reveal delay={80} className="services__switch">
          <span className="services__switchLabel">{t.services.vehicleLabel}</span>
          <div className="services__tabs" role="tablist" aria-label={t.services.vehicleLabel}>
            {vehicleTypes.map(v => (
              <button
                key={v.id}
                role="tab"
                aria-selected={vehicle === v.id}
                onClick={() => setVehicle(v.id)}
                className={cn('services__tab', vehicle === v.id && 'is-active')}
              >
                {pick(v.name)}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={60} as="p" className="services__note">
          <Icon name="check" size={14} strokeWidth={3} />
          <span>{t.services.dirtyNote}</span>
        </Reveal>

        <div className="services__grid">
          {packages.map((p, idx) => {
            const price = p.prices ? p.prices[vehicle] : null;
            const name  = pick(p.name);
            const desc  = pick(p.description);
            const isPremium = p.id === TIER.PLATINUM || p.id === TIER.DIAMOND;
            const isExtras  = p.id === TIER.EXTRAS;
            return (
              <Reveal key={p.id} delay={80 * (idx + 1)} as="article" className={cn('pkg', `pkg--${p.id}`)}>
                {p.ribbon && (
                  <span className={cn('pkg__ribbon', `pkg__ribbon--${p.ribbon}`)}>
                    {t.services.ribbon[p.ribbon]}
                  </span>
                )}

                <div className="pkg__top">
                  <div className="pkg__icon">
                    <Icon name={PKG_ICON[p.id]} size={28} strokeWidth={2.2} />
                  </div>
                  <h3 className="pkg__name">{name}</h3>
                </div>

                <div className="pkg__price">
                  {price ? (
                    <>
                      <span className="pkg__priceFrom">{t.services.priceFrom}</span>
                      <span className="pkg__priceVal"><small>$</small>{price.price}</span>
                      <span className="pkg__priceTime">{price.time} {t.services.duration}</span>
                    </>
                  ) : (
                    <>
                      <span className="pkg__priceFrom">{t.services.priceQuote}</span>
                      <span className="pkg__priceVal pkg__priceVal--quote">{t.services.priceQuoteShort}</span>
                      <span className="pkg__priceTime">{t.services.priceQuoteNote}</span>
                    </>
                  )}
                </div>

                <ul className="pkg__list">
                  {desc.map((line, i) => (
                    <li key={i}>
                      <Icon name="check" size={14} strokeWidth={3} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  as="a"
                  href={waHref(t.services.smsTemplate(name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={isExtras ? 'blue' : isPremium ? 'blue' : 'red'}
                  className="pkg__cta"
                  iconLeft={<Icon name="whatsapp" size={16} />}
                >
                  {t.services.bookBtn}
                </Button>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
