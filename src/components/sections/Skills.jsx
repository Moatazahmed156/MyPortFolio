import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import skillsData from '../../data/skills.json';

function SkillBar({ name, level, color, inView }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{name}</span>
        <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono,monospace' }}>{level}%</span>
      </div>
      <div style={{ height: 6, background: 'var(--border)', borderRadius: 4, overflow: 'hidden' }}>
        <div
          className="skill-bar-fill"
          style={{
            width: inView ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('frontend');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const category = skillsData.categories.find(c => c.id === active);

  return (
    <section id="skills" className="section-alt" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading tag="tech.stack" title="Skills &" highlight="Expertise" subtitle="Technologies I work with to build amazing products" />

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          {skillsData.categories.map(cat => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setActive(cat.id); setInView(false); setTimeout(() => setInView(true), 50); }}
              style={{
                padding: '10px 20px',
                borderRadius: 10,
                border: `1px solid ${active === cat.id ? cat.color : 'var(--border)'}`,
                background: active === cat.id ? `${cat.color}15` : 'var(--bg-card)',
                color: active === cat.id ? cat.color : 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 600,
                fontFamily: 'Outfit,sans-serif',
                transition: 'all 0.2s',
              }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          ref={ref}
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}
          className="skills-grid"
        >
          {category?.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card"
              style={{ padding: '20px 24px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 20 }}>{skill.icon}</span>
                <SkillBar name={skill.name} level={skill.level} color={category.color} inView={inView} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All tech cloud */}
        <div style={{ marginTop: 60, textAlign: 'center' }}>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono,monospace', marginBottom: 24 }}>// also familiar with</div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Ngrok', 'AWS', 'Vercel', 'Nginx', 'Jest', 'Cloud', "Deployment", "Server Management"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="badge"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)', fontSize: 13 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){.skills-grid{grid-template-columns:1fr !important;}}
        .skills-grid .glass-card > div { flex-direction: column; align-items: flex-start !important; }
        .skills-grid .glass-card > div > span { margin-bottom: 4px; }
        .skills-grid .glass-card > div > div { width: 100%; }
      `}</style>
    </section>
  );
}
