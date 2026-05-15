import { motion } from 'framer-motion';
import { Trophy, Award, Code2, Zap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import achievementsData from '../../data/achievements.json';

const iconMap = { Trophy, Award, Code2, Zap };
const categoryConfig = {
  competition: { color: '#fb923c', bg: 'rgba(251,146,60,0.1)' },
  certification: { color: '#00d4ff', bg: 'rgba(0,212,255,0.1)' },
  achievement: { color: '#7c3aed', bg: 'rgba(124,58,237,0.1)' },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-alt" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading tag="milestones" title="Certifications &" highlight="Achievements" subtitle="Recognition, courses, and milestones along my journey" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="ach-grid">
          {achievementsData.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            const conf = categoryConfig[item.category] || categoryConfig.certification;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card gradient-border"
                style={{ padding: '24px 20px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: conf.bg, border: `1px solid ${conf.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: conf.color }}>
                    <Icon size={20} />
                  </div>
                  <span className="badge" style={{ background: conf.bg, color: conf.color, border: `1px solid ${conf.color}30`, textTransform: 'capitalize', fontSize: 11 }}>{item.category}</span>
                </div>

                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, lineHeight: 1.4 }}>{item.title}</h3>
                <div style={{ fontSize: 13, color: conf.color, fontWeight: 600, marginBottom: 8 }}>{item.issuer}</div>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 12 }}>{item.description}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono,monospace' }}>{item.date}</span>
                  {item.credentialUrl && (
                    <a href={item.credentialUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: conf.color, textDecoration: 'none', fontWeight: 600 }}>
                      View ↗
                    </a>
                  )}
                </div>

                {item.stats && (
                  <div style={{ display: 'flex', gap: 16, marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--border)' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: conf.color }}>{item.stats.leetcode}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>LeetCode</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: conf.color }}>{item.stats.codeforces}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Codeforces</div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.ach-grid{grid-template-columns:repeat(2,1fr) !important;}}
        @media(max-width:640px){.ach-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
}
