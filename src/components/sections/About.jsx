import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Zap, Heart } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import personal from '../../data/personal.json';

export default function About() {
  const highlights = [
    { icon: <MapPin size={18} />, label: 'Location', value: personal.location, color: '#00d4ff' },
    { icon: <GraduationCap size={18} />, label: 'Education', value: 'CS Undergraduate', color: '#7c3aed' },
    { icon: <Zap size={18} />, label: 'Focus', value: 'Software Engineering', color: '#10b981' },
    { icon: <Heart size={18} />, label: 'Passion', value: 'Problem solving', color: '#f472b6' },
  ];

  return (
    <section id="about" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading tag="about.me" title="Who I" highlight="Am" subtitle="The story behind the code" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="about-grid">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 24 }}>
              {personal.about}
            </p>
            <p style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.9 }}>
              {personal.careerGoals}
            </p>

            <div style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ fontSize: 14, padding: '12px 22px' }}>
                Let's Talk
              </a>
              <a href={personal.cvUrl} target='_blank' className="btn-secondary" download style={{ fontSize: 14, padding: '11px 22px' }}>
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card gradient-border"
                style={{ padding: '24px 20px' }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 10, background: `${item.color}15`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, marginBottom: 14 }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 4, fontFamily: 'JetBrains Mono,monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>{item.value}</div>
              </motion.div>
            ))}

            {/* ICPC badge */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card"
              style={{ padding: '20px', gridColumn: '1/-1', display: 'flex', alignItems: 'center', gap: 16, border: '1px solid rgba(251,146,60,0.3)' }}
            >
              <div style={{ fontSize: 36 }}>🏆</div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 2 }}>ECPC Finals</div>
                <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Egyptian Collegiate Programming Contest — Honorable Mention</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
