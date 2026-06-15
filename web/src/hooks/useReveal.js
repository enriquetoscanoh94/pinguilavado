import { useEffect, useRef } from 'react';

export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      node.dataset.reveal = 'in';
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dataset.reveal = 'in';
          io.unobserve(entry.target);
        }
      });
    }, { threshold, rootMargin });
    io.observe(node);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
