import './Contact.css'
import { motion } from 'framer-motion';

export default function Contact() {
  // Cascading/staggered entry timeline for child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  // Upward slide variant for text layers and cards
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
        mass: 0.8
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Side: Contact Information & Headings */}
        <div className="contact-info-panel">
          <motion.span className="contact-badge" variants={slideUpVariants}>
            // GET IN TOUCH
          </motion.span>
          <motion.h2 className="contact-title" variants={slideUpVariants}>
            Let’s Build Something <span>Exceptional</span> Together.
          </motion.h2>
          <motion.p className="contact-subtitle" variants={slideUpVariants}>
            Have a problem that needs an intelligent engineering solution? Drop us a line or visit our robotics laboratory workspace.
          </motion.p>

          <div className="contact-details-grid">
            <motion.div className="detail-item" variants={slideUpVariants}>
              <h4>EMAIL US</h4>
              <a href="mailto:hello@nlurc.org">hello@nlurc.org</a>
            </motion.div>
            <motion.div className="detail-item" variants={slideUpVariants}>
              <h4>HQ LAB LOCATION</h4>
              <p>North Lakhimpur, Assam, India</p>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Premium Glassmorphic Form Wrapper */}
        <motion.div className="contact-form-panel" variants={slideUpVariants}>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <input type="text" id="name" required placeholder=" " />
                <label htmlFor="name">Your Name</label>
                <span className="input-bar"></span>
              </div>
              <div className="input-group">
                <input type="email" id="email" required placeholder=" " />
                <label htmlFor="email">Email Address</label>
                <span className="input-bar"></span>
              </div>
            </div>

            <div className="input-group full-width">
              <input type="text" id="subject" required placeholder=" " />
              <label htmlFor="subject">Subject Topic</label>
              <span className="input-bar"></span>
            </div>

            <div className="input-group full-width">
              <textarea id="message" required rows="5" placeholder=" "></textarea>
              <label htmlFor="message">Tell us about your project</label>
              <span className="input-bar"></span>
            </div>

            <button type="submit" className="form-submit-btn">
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
