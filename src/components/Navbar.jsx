import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-pill">
        {/* Logo / Brand */}
        <div className="navbar-logo">
          NLU<span>Robotics</span>
        </div>

        {/* Links */}
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right side CTA Button */}
        <div className="navbar-actions">
          <a href="#contact" className="cta-btn">Get Started</a>
        </div>
      </div>
    </nav>
  );
}
