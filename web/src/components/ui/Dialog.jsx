import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { Icon } from './Icon';
import './Dialog.css';

export function Dialog({ open, onClose, children, label = 'Dialog', closeLabel = 'Close' }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const lastActive = useRef(null);

  useBodyScrollLock(open);
  useEscapeKey(onClose, open);

  useEffect(() => {
    if (!open) return;
    lastActive.current = document.activeElement;
    contentRef.current?.focus();
    return () => { lastActive.current?.focus?.(); };
  }, [open]);

  if (!open) return null;

  const onOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return createPortal(
    <div
      ref={overlayRef}
      className="dialog"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onMouseDown={onOverlayClick}
    >
      <button type="button" className="dialog__close" onClick={onClose} aria-label={closeLabel}>
        <Icon name="close" size={24} />
      </button>
      <div ref={contentRef} className="dialog__content" tabIndex={-1}>
        {children}
      </div>
    </div>,
    document.body
  );
}
