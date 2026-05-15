import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Tag, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Pagination from '../ui/Pagination';
import blogData from '../../data/blog.json';

const PER_PAGE = 4;
const CATEGORIES = ['All', 'React', 'Mobile', 'Clean Code', 'APIs', 'Competitive Programming'];
const catColors = {
  React: '#61DAFB',
  Mobile: '#54C5F8',
  'Clean Code': '#10b981',
  APIs: '#fb923c',
  'Competitive Programming': '#7c3aed',
};

function BlogCard({ post, index }) {
  const color = catColors[post.category] || '#00d4ff';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="glass-card gradient-border"
      style={{ padding: '28px', cursor: 'pointer' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span className="badge" style={{ background: `${color}10`, color, border: `1px solid ${color}30`, fontSize: 12 }}>
          <Tag size={11} style={{ marginRight: 4 }} />{post.category}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--text-secondary)' }}>
          <Clock size={13} /> {post.readTime}
        </div>
      </div>

      <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10, lineHeight: 1.4 }}>{post.title}</h3>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</p>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
        {post.tags.slice(0, 3).map(tag => (
          <span key={tag} className="badge" style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', border: '1px solid var(--border)', fontSize: 11 }}>#{tag}</span>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono,monospace' }}>
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </span>
        <motion.span
          whileHover={{ x: 4 }}
          style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color, fontWeight: 600, cursor: 'pointer' }}
        >
          Read More <ArrowRight size={14} />
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return blogData.filter(p => {
      const matchCat = category === 'All' || p.category === category;
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section id="blog" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading tag="writings" title="Blog &" highlight="Articles" subtitle="Thoughts, guides, and deep dives into topics I care about" />

        {/* Controls */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
          <div style={{ position: 'relative', flex: 1, minWidth: 220 }}>
            <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} placeholder="Search articles..." style={{ width: '100%', padding: '11px 14px 11px 40px', borderRadius: 10, border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text-primary)', fontSize: 14, fontFamily: 'Outfit,sans-serif', outline: 'none' }} />
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <motion.button key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => { setCategory(cat); setPage(1); }}
                style={{ padding: '10px 16px', borderRadius: 8, border: `1px solid ${category === cat ? '#00d4ff' : 'var(--border)'}`, background: category === cat ? 'rgba(0,212,255,0.1)' : 'var(--bg-card)', color: category === cat ? '#00d4ff' : 'var(--text-secondary)', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'Outfit,sans-serif', transition: 'all 0.2s' }}
              >{cat}</motion.button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="blog-grid">
          {paged.map((post, i) => <BlogCard key={post.id} post={post} index={i} />)}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>No articles found.</div>
        )}

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
      <style>{`@media(max-width:768px){.blog-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
