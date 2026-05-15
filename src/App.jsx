import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollProgress } from './hooks/useScrollProgress';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
// import Achievements from './components/sections/Achievements';
// import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

function ScrollBar() {
  const progress = useScrollProgress();
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

function App() {
  return (
    <ThemeProvider>
      <ScrollBar />
      <Navbar />
      <main>
        <Hero />
        <About />         
        <Skills />         
        <Projects />       
        <Experience />     
        <Education />     
        {/* <Achievements />    */}
        {/* <Blog /> */}
        <Contact />        
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster position="bottom-right" toastOptions={{
        style: { background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--card-border)' }
      }} />
    </ThemeProvider>
  );
}

export default App;
