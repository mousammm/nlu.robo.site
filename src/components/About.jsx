import './About.css'
import { motion } from 'framer-motion';

export default function About() {
  // Global viewport configurations to trigger sub-elements smoothly
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1
      }
    }
  };

  // Modern typography mask effect (revealing out from an invisible wall)
  const titleLineVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 45, damping: 14, mass: 0.8 }
    }
  };

  // Card slide-up with subtle rotation entry
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 50, damping: 16 }
    }
  };

  return (
    <section id="about" className="about-section">
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* HEADER BLOCK: Massive Awwwards-style Masked Typography */}
        <div className="about-header">
          <div className="mask-wrapper">
            <motion.h2 className="about-main-title" variants={titleLineVariants}>
              Pioneering the Next Era of <span>Autonomous Intelligence</span>.
            </motion.h2>
          </div>
        </div>

        {/* CONTENT GRID BLOCK: Asymmetric Layout Structures */}
        <div className="about-grid">
          
          {/* Left Narrative Text Block */}
          <motion.div className="about-narrative" variants={cardVariants}>
            <p className="narrative-lead">
              At NLURC, we build engines and solve problems that trigger real-world transformations. We fuse physical mechanics with digital workflows.
            </p>
            <p className="narrative-body">
              Our multidisciplinary approach breaks down standard engineering barriers. We empower developers, tinkerers, and visionaries to experiment rapidly, iterate instantly, and deploy scalable systems with surgical precision.
            </p>
          </motion.div>

          {/* Right Metrics / Dashboard Feature Cards */}
          <div className="about-cards-stack">
            <motion.div className="about-card accent-card" variants={cardVariants}>
              <h3>01 / CORE MISSION</h3>
              <p>Engineering computational platforms and mechanical hardware architectures designed to execute calculations with zero modern friction overhead.</p>
            </motion.div>

            <motion.div className="about-card" variants={cardVariants}>
              <h3>02 / INTERACTION</h3>
              <p>Breaking conventional systems down to craft high-frequency responsive nodes that communicate natively across modern web applications.</p>
            </motion.div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
