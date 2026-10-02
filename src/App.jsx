import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      
      <main>
        <About />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
