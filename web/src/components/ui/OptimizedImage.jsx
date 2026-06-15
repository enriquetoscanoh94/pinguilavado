export function OptimizedImage({ src, alt = '', width, height, loading = 'lazy', decoding = 'async', className }) {
  const normalized = src.startsWith('/') ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src;
  const base = normalized.replace(/\.(webp|jpeg|jpg|png)$/i, '');
  const avif = `${base}.avif`;
  const webp = `${base}.webp`;
  const fallback = `${base}.jpeg`;
  return (
    <picture className={className}>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
      />
    </picture>
  );
}
