import './Hero.css'
import { motion } from 'framer-motion';

export default function Hero() {
  // Container variant to handle cascading/staggered delays for child components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Time gap between each element's entry
        delayChildren: 0.2     // Initial delay before animations begin
      }
    }
  };

  // Individual element animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start lower and completely transparent
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 15,
        mass: 0.8
      }
    }
  };

  return (
    <section id="home" className="hero-section">

      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="hero-badge" variants={itemVariants}>
          Introducing Pryagjyuti 2.0
        </motion.span>
        
        <motion.h1 className="hero-title" variants={itemVariants}>
          North Lakhimpur University<br />
          Robotics <span>Club</span>
        </motion.h1>
        
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Welcome to the official NLU Robotics Club! We are a community of thinkers, creators, and problem solvers dedicated to exploring the world of automation. Whether you want to master Arduino, design custom hardware, or program autonomous systems, there is a place for you here. Let’s build the future together!
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <a href="#" className="hero-btn-primary">Join Now</a>
          <a href="#" className="hero-btn-secondary">Explore</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
