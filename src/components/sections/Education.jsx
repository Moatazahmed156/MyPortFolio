import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Monitor } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import educationData from '../../data/education.json';

const typeIcons = {
  university: <GraduationCap size={20} />,
  training: <Briefcase size={20} />,
  online: <Monitor size={20} />,
};
const typeColors = {
  university: '#00d4ff',
  training: '#7c3aed',
  online: '#10b981',
};
export default function Education() {
  return (
    <section id="education" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading tag="my.learning" title="Education &" highlight="Training" subtitle="My academic and self-learning path" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="edu-grid">
          {educationData.map((edu, i) => {
            const color = typeColors[edu.type];
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass-card gradient-border"
                style={{ padding: '28px 32px' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${color}15`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
                    {typeIcons[edu.type]}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color, fontFamily: 'JetBrains Mono,monospace', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{edu.type}</div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{edu.degree}</h3>
                  </div>
                </div>

                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>{edu.institution}</div>

                <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono,monospace' }}>
                    {edu.startYear} – {edu.expectedGraduation}
                  </span>
                  <span style={{ fontSize: 13, padding: '2px 10px', borderRadius: 100, background: edu.status === 'Completed' ? 'rgba(16,185,129,0.1)' : 'rgba(0,212,255,0.1)', color: edu.status === 'Completed' ? '#10b981' : '#00d4ff', border: `1px solid ${edu.status === 'Completed' ? 'rgba(16,185,129,0.3)' : 'rgba(0,212,255,0.3)'}` }}>
                    {edu.status}
                  </span>
                  {edu.gpa && <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>GPA: {edu.gpa}</span>}
                </div>

                <div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10, fontFamily: 'JetBrains Mono,monospace' }}>Key Topics</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {edu.relevantCourses.slice(0, 5).map(course => (
                      <span key={course} className="badge" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border)', fontSize: 11 }}>{course}</span>
                    ))}
                    {edu.relevantCourses.length > 5 && <span className="badge" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border)', fontSize: 11 }}>+{edu.relevantCourses.length - 5} more</span>}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`@media(max-width:768px){.edu-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
