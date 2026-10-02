import './About.css'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const titleLineVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 45, damping: 14 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 45, damping: 15 }
    }
  };

  const projects = [
    {
      id: "01",
      title: "Autonomous Rover Model-X",
      category: "ROBOTICS",
      desc: "A custom 4x4 rugged rover architecture featuring automated route planning and live telemetry.",
      image: "https://unsplash.com"
    },
    {
      id: "02",
      title: "Neural Arm Manipulation Node",
      category: "ML",
      desc: "Inverse kinematics tracking arm system executing precision manipulation with sub-millimetre accuracy.",
      image: "https://unsplash.com"
    },
    {
      id: "03",
      title: "Swarm Compute Hivemind",
      category: "SOFTWARE",
      desc: "A responsive system coordinating trajectories for drone clusters via synchronized mesh architectures.",
      image: "https://unsplash.com"
    }
  ];

  // Filtering filter logic rules
  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="about" className="about-section">
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Core Narrative / Text Rows */}
        <div className="about-header">
          <div className="mask-wrapper"><motion.h2 className="about-main-title" variants={titleLineVariants}>Pioneering the Next Era of <span>Autonomous Intelligence</span>.</motion.h2></div>
        </div>

        <div className="about-grid">
          <motion.div className="about-narrative" variants={cardVariants}>
            <p className="narrative-lead">At NLURC, we build engines and solve problems that trigger real-world transformations.</p>
            <p className="narrative-body">We empower visionaries to experiment rapidly, iterate instantly, and deploy scalable architectures with surgical precision.</p>
          </motion.div>
          <div className="about-cards-stack">
            <motion.div className="about-card accent-card" variants={cardVariants}>
              <h3>01 / CORE MISSION</h3>
              <p>Engineering computational platforms designed to execute configurations with zero overhead friction.</p>
            </motion.div>
          </div>
        </div>

        {/* SHOWCASE GALLERY WITH ADVANCED NAVIGATION FILTERS */}
        <div className="gallery-wrapper">
          <div className="gallery-header-row">
            <div className="mask-wrapper">
              <motion.h3 className="gallery-section-title" variants={titleLineVariants}>
                Selected <span>Showcase</span>
              </motion.h3>
            </div>
            
            {/* Filter Pills Layout */}
            <motion.div className="gallery-filters" variants={cardVariants}>
              {['ALL', 'ROBOTICS', 'ML', 'SOFTWARE'].map((filter) => (
                <button 
                  key={filter} 
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Animated Grid Container Layout */}
          <motion.div layout className="projects-gallery-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  layout /* Smoothly moves other elements into space when one disappears */
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                  key={project.id} 
                  className="project-tile"
                >
                  <div className="project-image-frame">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="project-overlay-glow"></div>
                  </div>
                  <div className="project-meta">
                    <span className="project-category">// {project.category}</span>
                    <div className="project-title-row">
                      <h4>{project.title}</h4>
                      <span className="project-num">{project.id}</span>
                    </div>
                    <p className="project-desc">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
