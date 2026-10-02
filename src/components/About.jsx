import './About.css'
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const titleLineVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 45, damping: 14 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15, mass: 0.8 }
    }
  };

  const stats = [
    { value: "50+",  label: "Active Members" },
    { value: "12+",  label: "Projects Deployed" },
    { value: "3",    label: "National Awards" },
    { value: "2019", label: "Founded" }
  ];

  return (
    <section id="about" className="about-section">

      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Badge */}
        <motion.span className="about-badge" variants={itemVariants}>
          About NLURC
        </motion.span>

        {/* Masked Heading */}
        <div className="about-header">
          <div className="mask-wrapper">
            <motion.h2 className="about-main-title" variants={titleLineVariants}>
              Pioneering the Next Era of <span>Autonomous Intelligence</span>.
            </motion.h2>
          </div>
        </div>

        {/* Narrative */}
        <motion.div className="about-narrative" variants={itemVariants}>
          <p className="narrative-lead">
            North Lakhimpur University Robotics Club is a community of engineers, makers,
            and innovators building the future of autonomous systems from the heart of Assam.
          </p>
          <p className="narrative-body">
            Founded in 2019, NLURC has grown into a premier hub for robotics research and
            development in Northeast India. We bring together students, hobbyists, and
            professionals to design, prototype, and deploy cutting-edge solutions across
            robotics, machine learning, and embedded systems.
          </p>
          <p className="narrative-body">
            From autonomous rovers navigating rugged terrain to neural-controlled robotic
            arms and coordinated drone swarms, our work spans the full spectrum of modern
            intelligent systems. We empower visionaries to experiment rapidly, iterate
            instantly, and deploy scalable architectures with surgical precision.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div className="about-stats-grid" variants={itemVariants}>
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ==========================================
            CTA BUTTONS — GALLERY & PROJECTS
            ========================================== */}
        <motion.div className="about-actions" variants={itemVariants}>
          <a href="#gallery" className="about-btn-primary">
            Gallery <span className="btn-arrow">→</span>
          </a>
          <a href="#projects" className="about-btn-secondary">
            Projects <span className="btn-arrow">→</span>
          </a>
        </motion.div>
        {/* ========================================== */}

      </motion.div>
    </section>
  );
}
