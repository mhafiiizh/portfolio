import '@/App.css';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Project from '@/components/Project';

function App() {
  return (
    <>
      <div className='min-h-screen bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark transition-colors'>
        <Nav />
        <Hero />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
