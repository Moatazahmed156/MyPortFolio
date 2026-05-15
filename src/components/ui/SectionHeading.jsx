export default function SectionHeading({ tag, title, highlight, subtitle }) {
  return (
    <div style={{ marginBottom: 60, textAlign: 'center' }}>
      {tag && <div className="section-tag" style={{ justifyContent: 'center' }}><span>{'// '}</span>{tag}</div>}
      <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
