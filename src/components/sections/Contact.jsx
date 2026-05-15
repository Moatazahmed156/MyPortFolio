import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, GitBranch, Link2, MessageCircle, Download } from 'lucide-react';
import toast from 'react-hot-toast';
import SectionHeading from '../ui/SectionHeading';
import personal from '../../data/personal.json';

const LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'moatazahmed696@email.com',
    href: 'mailto:moatazahmed696@email.com',
    color: '#aa2233',
    copyable: true,
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/Moatazahmed156',
    href: 'https://github.com/Moatazahmed156',
    color: '#3311cc',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    value: 'linkedin.com/in/moataz-ahmed',
    href: 'https://www.linkedin.com/in/moataz-ahmed-b02438255/',
    color: '#0A66C2',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+20 1551691666',
    href: 'https://wa.me/201551691666',
    color: '#25D366',
  }
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('moataz.ahmed@email.com');
    setCopied(true);
    toast.success('Email copied to clipboard!', {
      style: { background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--card-border)' },
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-alt" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <SectionHeading
          tag="get.in.touch"
          title="Let's"
          highlight="Connect"
          subtitle="I'm open to internships, freelance projects, and collaborations. Reach out through any of these channels."
        />

        {/* Link cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {LINKS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ x: 5 }}
                onClick={item.copyable ? copyEmail : undefined}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: '18px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    cursor: 'pointer',
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                    background: `${item.color}12`,
                    border: `1px solid ${item.color}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.color,
                  }}>
                    <Icon size={19} />
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 2, fontFamily: 'JetBrains Mono,monospace', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.value}
                    </div>
                  </div>

                  {/* Right action */}
                  {item.copyable ? (
                    <div style={{ color: copied ? '#10b981' : 'var(--text-secondary)', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                      {copied ? <Check size={17} /> : <Copy size={17} />}
                    </div>
                  ) : (
                    <div style={{ color: 'var(--text-secondary)', flexShrink: 0, fontSize: 16 }}>↗</div>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CV download */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ marginTop: 32, textAlign: 'center' }}
        >
          <a
            href={personal.cvUrl}
            download
            className="btn-primary"
            style={{ fontSize: 15, padding: '14px 36px' }}
          >
            <Download size={18} />
            Download My CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
