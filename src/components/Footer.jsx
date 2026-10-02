import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  // Cascading/staggered viewport structural variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Glides the columns into view sequentially
        delayChildren: 0.1
      }
    }
  };

  // Individual element upward slide animation rules
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 14,
        mass: 0.9
      }
    }
  };

  return (
    <footer className="footer-section">
      <motion.div 
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Triggers entry immediately upon hit detection
        viewport={{ once: true, amount: 0.2 }} // Fires once when 20% of the footer enters viewport
      >
        
        {/* Top Block: Brand Info + Links Grid */}
        <div className="footer-main">
          {/* Brand Column */}
          <motion.div className="footer-brand-col" variants={itemVariants}>
            <div className="footer-logo">
              NLU<span>RC</span>
            </div>
            <p className="footer-desc">
              North Lakhimpur Robotics Club building and solving problems that make a change.
            </p>
          </motion.div>

          {/* Links Columns */}
          <div className="footer-links-grid">
            <motion.div className="footer-col" variants={itemVariants}>
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </motion.div>

            <motion.div className="footer-col" variants={itemVariants}>
              <h4>Socials</h4>
              <ul>
                <li><a href="https://www.instagram.com/roboclubnlu" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Block: Divider + Copyright */}
        <motion.div className="footer-bottom" variants={itemVariants}>
          <p>&copy; {new Date().getFullYear()} NLURC. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
}
