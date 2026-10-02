import './Contact.css'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  // Submission Pipeline State Management
  const [status, setStatus] = useState({ submitted: false, loading: false, error: null });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15, mass: 0.8 }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, loading: true, error: null });

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://formspree.io/f/xnpnkqnq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ submitted: true, loading: false, error: null });
        e.target.reset(); // Empties out input fields automatically
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus({ submitted: false, loading: false, error: err.message });
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* Fluid Moving Gradient Backgrounds */}
      <div className="contact-bg-glows">
        <div className="glow-sphere glow-1"></div>
        <div className="glow-sphere glow-2"></div>
      </div>

      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Side: Contact Information & Integrated Google Maps */}
        <div className="contact-info-panel">
          <motion.h2 className="contact-title" variants={slideUpVariants}>Let’s Build Something <span>Exceptional</span> Together.</motion.h2>
          <motion.p className="contact-subtitle" variants={slideUpVariants}>Have a problem that needs an intelligent engineering solution? Drop us a line or visit our robotics laboratory workspace.</motion.p>

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

          {/* Google Maps Embed Container Restored */}
          <motion.div className="contact-map-wrapper" variants={slideUpVariants}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.6181953000446!2d94.09367759999999!3d27.231134599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3741378d251c7e7b%3A0x2de99dd392996116!2sPhytronix!5e0!3m2!1sen!2sin!4v1790939996648!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="NLURC Club Location"
            ></iframe>
          </motion.div>
        </div>

        {/* Right Side: Premium Glassmorphic Form Wrapper */}
        <motion.div className="contact-form-panel" variants={slideUpVariants}>
          {status.submitted ? (
            <motion.div 
              className="form-success-message"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h3>Transmission Received!</h3>
              <p>Thank you for reaching out to NLURC. Our team will review your project idea blueprints and get back to your inbox shortly.</p>
              <button onClick={() => setStatus({ ...status, submitted: false })} className="form-submit-btn">
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <input type="text" id="name" name="name" required placeholder=" " disabled={status.loading} />
                  <label htmlFor="name">Your Name</label>
                  <span className="input-bar"></span>
                </div>
                <div className="input-group">
                  <input type="email" id="email" name="email" required placeholder=" " disabled={status.loading} />
                  <label htmlFor="email">Email Address</label>
                  <span className="input-bar"></span>
                </div>
              </div>

              <div className="input-group full-width">
                <input type="text" id="subject" name="subject" required placeholder=" " disabled={status.loading} />
                <label htmlFor="subject">Subject Topic</label>
                <span className="input-bar"></span>
              </div>

              <div className="input-group full-width">
                <textarea id="message" name="message" required rows="5" placeholder=" " disabled={status.loading}></textarea>
                <label htmlFor="message">Tell us about your project</label>
                <span className="input-bar"></span>
              </div>

              <button type="submit" className="form-submit-btn" disabled={status.loading}>
                {status.loading ? "Transmitting..." : "Send Message"}
              </button>

              {status.error && (
                <motion.p className="form-error-feedback" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {status.error}
                </motion.p>
              )}
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
