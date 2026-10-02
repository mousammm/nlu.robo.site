import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top Block: Brand Info + Links Grid */}
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              NLU<span>RC</span>
            </div>
            <p className="footer-desc">
              North Lakhimpur Robotics Club builiding and solving problem that make a change.
            </p>
          </div>

          {/* Links Columns */}
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Socials</h4>
              <ul>
                <li><a href="https://www.instagram.com/roboclubnlu" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Block: Divider + Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NLURC. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
