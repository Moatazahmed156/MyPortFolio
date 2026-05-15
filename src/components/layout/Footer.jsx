import { motion } from 'framer-motion';
import { GitBranch, Link2, Mail, Code2, Heart } from 'lucide-react';
import social from '../../data/socialLinks.json';

const iconMap = { GitBranch, Link2, Mail, Code2 };

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#00d4ff,#7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code2 size={16} color="white" />
            </div>
            <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--text-primary)' }}>
              Moataz<span style={{ color: '#00d4ff' }}>.</span>
            </span>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            {social.map(s => {
              const Icon = iconMap[s.icon] || Code2;
              return (
                <motion.a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = s.color; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
            © {year} Moataz Ahmed. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 6 }}>
            Built with <Heart size={13} fill="#ef4444" color="#ef4444" /> by me
          </p>
        </div>
      </div>
    </footer>
  );
}
