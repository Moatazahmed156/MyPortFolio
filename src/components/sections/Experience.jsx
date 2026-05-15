import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Users, HeartHandshake, Trophy, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import experienceData from '../../data/experience.json';

const typeConfig = {
  freelance: {
    icon: <Briefcase size={16} />,
    color: '#00d4ff',
    label: 'Freelance',
  },

  "part-time": {
    icon: <Briefcase size={16} />,
    color: '#38bdf8',
    label: 'Part Time',
  },

  leadership: {
    icon: <Users size={16} />,
    color: '#8b5cf6',
    label: 'Leadership',
  },

  internship: {
    icon: <GraduationCap size={16} />,
    color: '#10b981',
    label: 'Internship',
  },

  community: {
    icon: <HeartHandshake size={16} />,
    color: '#f472b6',
    label: 'Community',
  },

  competition: {
    icon: <Trophy size={16} />,
    color: '#fb923c',
    label: 'Competition',
  },
};

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(false);
  const config = typeConfig[exp.type] || typeConfig.freelance;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{ display: 'flex', gap: 24 }}
    >
      {/* Timeline dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: `${config.color}15`, border: `2px solid ${config.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: config.color, zIndex: 1, position: 'relative' }}>
          {config.icon}
        </div>
        {index < experienceData.length - 1 && (
          <div style={{ width: 2, flex: 1, background: 'var(--border)', marginTop: 8 }} />
        )}
      </div>

      {/* Card */}
      <div style={{ flex: 1, paddingBottom: 32 }}>
        <motion.div
          className="glass-card gradient-border"
          whileHover={{ y: -2 }}
          style={{ padding: '24px 28px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{exp.role}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: config.color }}>{exp.company}</span>
                <span className="badge" style={{ background: `${config.color}10`, color: config.color, border: `1px solid ${config.color}30`, fontSize: 11 }}>{config.label}</span>
              </div>
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono,monospace', whiteSpace: 'nowrap' }}>{exp.duration}</span>
          </div>

          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>{exp.description}</p>

          {/* Tech stack */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
            {exp.techStack.map(t => (
              <span key={t} className="badge" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border)', fontSize: 11 }}>{t}</span>
            ))}
          </div>

          {/* Expand button */}
          <button
            onClick={() => setExpanded(e => !e)}
            style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', color: config.color, fontSize: 13, fontWeight: 600, padding: 0 }}
          >
            {expanded ? <><ChevronUp size={15} /> Hide Details</> : <><ChevronDown size={15} /> Show Details</>}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ paddingTop: 20 }}>
                  <div style={{ marginBottom: 16 }}>
                    <h5 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'JetBrains Mono,monospace' }}>Responsibilities</h5>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          <span style={{ color: config.color, flexShrink: 0 }}>▸</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'JetBrains Mono,monospace' }}>Achievements</h5>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {exp.achievements.map((a, i) => (
                        <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#10b981', lineHeight: 1.6 }}>
                          <span style={{ flexShrink: 0 }}>✓</span>{a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-alt" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <SectionHeading tag="my.journey" title="Work" highlight="Experience" subtitle="Where I've built things and made impact" />

        <div>
          {experienceData.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
