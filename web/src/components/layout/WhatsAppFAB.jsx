import { useApp } from '../../context/AppContextValue';
import { Icon } from '../ui/Icon';
import { waHref } from '../../data/business';
import './WhatsAppFAB.css';

export function WhatsAppFAB() {
  const { t } = useApp();
  return (
    <a
      href={waHref(t.contact.whatsappBody)}
      target="_blank"
      rel="noopener noreferrer"
      className="waFab"
      aria-label={t.contact.floatingLabel}
      title={t.contact.floatingLabel}
    >
      <span className="waFab__pulse" aria-hidden="true" />
      <span className="waFab__icon">
        <Icon name="whatsapp" size={28} />
      </span>
    </a>
  );
}
