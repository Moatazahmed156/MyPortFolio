import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, style = {} }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto', ...style }}
    >
      {children}
    </motion.section>
  );
}
