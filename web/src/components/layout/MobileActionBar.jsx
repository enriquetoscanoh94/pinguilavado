import { useApp } from '../../context/AppContextValue';
import { useScrolledPast } from '../../hooks/useScrollPosition';
import { Icon } from '../ui/Icon';
import { business, telHref, waHref } from '../../data/business';
import { cn } from '../../utils/cn';
import './MobileActionBar.css';

export function MobileActionBar() {
  const { t } = useApp();
  const visible = useScrolledPast(400);

  return (
    <div
      className={cn('mobileBar', visible && 'mobileBar--visible')}
      role="region"
      aria-label={t.contact.title}
    >
      <a href={telHref} className="mobileBar__btn mobileBar__btn--red">
        <Icon name="phone" size={18} strokeWidth={2.5} />
        <span>{business.phone.display}</span>
      </a>
      <a
        href={waHref(t.contact.whatsappBody)}
        target="_blank"
        rel="noopener noreferrer"
        className="mobileBar__btn mobileBar__btn--green"
      >
        <Icon name="whatsapp" size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
