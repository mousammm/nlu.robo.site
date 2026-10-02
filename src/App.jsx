import Cursor from './components/Cursor';
import Gradient from './components/Gradient';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Gradient />
      
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
