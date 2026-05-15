import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Link2, Mail, Code2, Trophy, Download, Eye, MessageCircle } from 'lucide-react';
import { useTyping } from '../../hooks/useTyping';
import personal from '../../data/personal.json';
import social from '../../data/socialLinks.json';
import me from "../../assets/me.png"
function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} id="particles-canvas" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />;
}

const iconMap = { GitBranch, Link2, Mail, Code2, Trophy };

export default function Hero() {
  const typed = useTyping(['Full Stack Developer', 'Software Engineer', 'MERN Stack Developer', 'Flutter Developer', 'Problem Solver'], 80, 1800);

  return (
    <section id="hero" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }} className="grid-bg">
      <Particles />

      {/* Gradient orbs */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 60, alignItems: 'center' }} className="hero-grid">
          <div>
            {/* Availability badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="availability-badge" style={{ marginBottom: 32, display: 'inline-flex' }}>
                <div className="availability-dot" />
                {personal.availability}
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 16 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Moataz</span>
              <br />Ahmed
            </motion.h1>

            {/* Typing */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ marginBottom: 24, height: 40 }}>
              <span style={{ fontSize: 'clamp(18px, 3vw, 26px)', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {typed}<span className="typing-cursor" />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 520, lineHeight: 1.8, marginBottom: 40 }}
            >
              {personal.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}
            >
              <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <Eye size={18} /> View Projects
              </a>
              <a href={personal.cvUrl} className="btn-secondary" target='_blank'>
                <Download size={18} /> Download CV
              </a>
              <a href="#contact" className="btn-secondary" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <MessageCircle size={18} /> Contact Me
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              style={{ display: 'flex', gap: 12, alignItems: 'center' }}
            >
              <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono,monospace' }}>// find me on</span>
              {social.map(s => {
                const Icon = iconMap[s.icon] || Code2;
                return (
                  <motion.a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    title={s.platform}
                    style={{ width: 42, height: 42, borderRadius: 10, border: '1px solid var(--border)', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.color = s.color; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Avatar / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hero-avatar"
            style={{ position: 'relative' }}
          >
            <div style={{ width: 300, height: 300, borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', background: 'var(--bg-card)', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 110, animation: 'float 6s ease-in-out infinite', position: 'relative' }}>
              <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }`}</style>
              <img src={me} alt="" />
              {/* Floating tech badges */}
              {[
                { label: 'React', top: -18, right: 16, color: '#61DAFB' },
                { label: 'Flutter', bottom: 36, right: -44, color: '#54C5F8' },
                { label: 'Node.js', top: 56, left: -52, color: '#68A063' },
                { label: 'Software', bottom: -12, left: 16, color: '#4DB33D' },
              ].map(b => (
                <motion.div
                  key={b.label}
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                  style={{ position: 'absolute', top: b.top, bottom: b.bottom, left: b.left, right: b.right, padding: '5px 11px', borderRadius: 7, background: 'var(--bg-card)', border: `1px solid var(--card-border)`, color: b.color, fontSize: 11, fontWeight: 700, fontFamily: 'JetBrains Mono,monospace', whiteSpace: 'nowrap' }}
                >
                  {b.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="glass-card stats-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: 56, overflow: 'hidden' }}
        >
          {[
            { value: personal.stats.yearsExperience + '+', label: 'Years Experience' },
            { value: personal.stats.projectsCompleted + '+', label: 'Projects Built' },
            { value: personal.stats.technologiesLearned + '+', label: 'Technologies' },
            { value: personal.stats.certificationsCount + '+', label: 'Certifications' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: '28px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid var(--card-border)' : 'none' }}>
              <div style={{ fontSize: 34, fontWeight: 800, color: 'var(--accent)' }}>{stat.value}</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4, fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media(max-width:768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-avatar { display: none; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
