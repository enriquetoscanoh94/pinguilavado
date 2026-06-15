import { useState } from 'react';
import { useApp } from '../../context/AppContextValue';
import { Container } from '../ui/Container';
import { Section, SectionHeader } from '../ui/Section';
import { Dialog } from '../ui/Dialog';
import { Icon } from '../ui/Icon';
import { OptimizedImage } from '../ui/OptimizedImage';
import { Reveal } from '../ui/Reveal';
import { galleryItems } from '../../data/gallery';
import './Gallery.css';

export function Gallery() {
  const { t, pick } = useApp();
  const [active, setActive] = useState(null);

  return (
    <Section id="gallery">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={t.nav.gallery}
            title={t.gallery.title}
            subtitle={t.gallery.subtitle}
          />
        </Reveal>

        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 40}
              as="button"
              type="button"
              className="gallery__item"
              style={{ gridColumn: `span ${item.span}` }}
              onClick={() => setActive(item)}
              aria-label={t.gallery.openImage}
            >
              <OptimizedImage src={item.src} alt={pick(item.alt)} />
              <span className="gallery__overlay" aria-hidden="true">
                <Icon name="search" size={24} />
              </span>
            </Reveal>
          ))}
        </div>
      </Container>

      <Dialog
        open={!!active}
        onClose={() => setActive(null)}
        label={active ? pick(active.alt) : ''}
        closeLabel={t.gallery.closeLightbox}
      >
        {active && <OptimizedImage src={active.src} alt={pick(active.alt)} loading="eager" />}
      </Dialog>
    </Section>
  );
}
