import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, ExternalLink, X, Search, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Pagination from '../ui/Pagination';
import projectsData from '../../data/projects.json';

const CATEGORIES = ['all', 'frontend', 'fullstack', 'mobile', 'data-analysis', 'other'];
const PER_PAGE = 4;

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="glass-card gradient-border"
      style={{ overflow: 'hidden', cursor: 'pointer' }}
      onClick={() => onClick(project)}
    >
      {/* Image */}
      <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,15,0.8) 0%, transparent 60%)' }} />
        {project.featured && (
          <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 100, background: 'rgba(0,212,255,0.15)', border: '1px solid rgba(0,212,255,0.3)', color: '#00d4ff', fontSize: 11, fontWeight: 700 }}>
            <Star size={11} fill="#00d4ff" /> Featured
          </div>
        )}
        <span className="badge" style={{ position: 'absolute', bottom: 12, left: 12, background: 'rgba(10,10,15,0.8)', color: 'var(--text-secondary)', border: '1px solid var(--border)', textTransform: 'capitalize' }}>
          {project.category}
        </span>
      </div>

      <div style={{ padding: '20px 24px 24px' }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>{project.title}</h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{project.description}</p>

        {/* Tech stack */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
          {project.techStack.slice(0, 4).map(tech => (
            <span key={tech} className="badge" style={{ background: 'rgba(0,212,255,0.08)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)', fontSize: 11 }}>{tech}</span>
          ))}
          {project.techStack.length > 4 && <span className="badge" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border)', fontSize: 11 }}>+{project.techStack.length - 4}</span>}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 16 }} onClick={e => e.stopPropagation()}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <GitBranch size={14} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#10b981'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
        onClick={e => e.stopPropagation()}
        className="glass-card"
        style={{ maxWidth: 720, width: '100%', maxHeight: '90vh', overflowY: 'auto', borderRadius: 20 }}
      >
        <img src={project.image} alt={project.title} style={{ width: '100%', height: 280, objectFit: 'cover', borderRadius: '20px 20px 0 0' }} />
        <div style={{ padding: '32px 36px 36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 4 }}>{project.title}</h2>
              <span className="badge" style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)', textTransform: 'capitalize' }}>{project.category}</span>
            </div>
            <button onClick={onClose} style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-card)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}><X size={18} /></button>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>{project.longDescription}</p>

          <div style={{ marginBottom: 20 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10, fontFamily: 'JetBrains Mono,monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Features</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {project.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--text-secondary)', fontSize: 14 }}>
                  <span style={{ color: '#00d4ff', marginTop: 2 }}>▸</span> {f}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: 20 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10, fontFamily: 'JetBrains Mono,monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Challenges Solved</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{project.challenges}</p>
          </div>

          <div style={{ marginBottom: 28 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10, fontFamily: 'JetBrains Mono,monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tech Stack</h4>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {project.techStack.map(t => (
                <span key={t} className="badge" style={{ background: 'rgba(0,212,255,0.08)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)' }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16 }}>
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: 14, padding: '11px 22px' }}><GitBranch size={16} /> GitHub</a>}
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 14, padding: '12px 22px' }}><ExternalLink size={16} /> Live Demo</a>}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return projectsData.filter(p => {
      const matchCat = filter === 'all' || p.category === filter;
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.techStack.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [filter, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleFilter = (cat) => { setFilter(cat); setPage(1); };
  const handleSearch = (v) => { setSearch(v); setPage(1); };

  return (
    <section id="projects" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading tag="my.work" title="Featured" highlight="Projects" subtitle="Things I've built that I'm proud of" />

        {/* Controls */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 40 }}>
          {/* Search */}
          <div style={{ position: 'relative', flex: 1, minWidth: 240 }}>
            <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input
              value={search}
              onChange={e => handleSearch(e.target.value)}
              placeholder="Search projects or tech..."
              style={{ width: '100%', padding: '12px 14px 12px 40px', borderRadius: 10, border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text-primary)', fontSize: 14, fontFamily: 'Outfit,sans-serif', outline: 'none' }}
            />
          </div>

          {/* Filter buttons */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilter(cat)}
                style={{ padding: '10px 18px', borderRadius: 8, border: `1px solid ${filter === cat ? '#00d4ff' : 'var(--border)'}`, background: filter === cat ? 'rgba(0,212,255,0.1)' : 'var(--bg-card)', color: filter === cat ? '#00d4ff' : 'var(--text-secondary)', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'Outfit,sans-serif', textTransform: 'capitalize', transition: 'all 0.2s' }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="projects-grid">
          <AnimatePresence mode="popLayout">
            {paged.map(project => (
              <ProjectCard key={project.id} project={project} onClick={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
            No projects found for "{search}"
          </div>
        )}

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>

      <style>{`@media(max-width:768px){.projects-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
