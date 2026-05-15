import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Code2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  // { label: 'Achievements', href: '#achievements' },
  // { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const MOBILE_BP = 768;

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BP);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    const onResize = () => {
      const mobile = window.innerWidth < MOBILE_BP;
      setIsMobile(mobile);
      if (!mobile) setMobileOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? 'var(--glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition: 'padding 0.3s, background 0.3s, border 0.3s',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', flexShrink: 0 }}
            onClick={() => handleNav('#hero')}
          >
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#00d4ff,#7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code2 size={20} color="white" />
            </div>
            <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--text-primary)' }}>
              Moataz<span style={{ color: '#00d4ff' }}>.</span>
            </span>
          </motion.div>

          {/* Desktop Nav — only shown when not mobile */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              {NAV_ITEMS.map(item => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className={`nav-link ${active === item.href.replace('#', '') ? 'active' : ''}`}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 14,
                    fontWeight: 500,
                    color: active === item.href.replace('#', '') ? '#00d4ff' : 'var(--text-secondary)',
                    fontFamily: 'Outfit,sans-serif',
                    transition: 'color 0.2s',
                    padding: '4px 0',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            {/* Theme toggle — always visible */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggle}
              style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid var(--border)', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)' }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Hamburger — only on mobile */}
            {isMobile && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(o => !o)}
                style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid var(--border)', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-primary)' }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown — only rendered when mobile + open */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 70,
              left: 16,
              right: 16,
              zIndex: 999,
              borderRadius: 16,
              padding: '12px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
            className="glass-card"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => handleNav(item.href)}
                style={{
                  background: active === item.href.replace('#', '') ? 'rgba(0,212,255,0.08)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '13px 20px',
                  borderRadius: 10,
                  textAlign: 'left',
                  fontSize: 16,
                  fontWeight: 500,
                  color: active === item.href.replace('#', '') ? '#00d4ff' : 'var(--text-primary)',
                  fontFamily: 'Outfit,sans-serif',
                  transition: 'all 0.15s',
                  width: '100%',
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
