import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Dynamic Fluid Background Layers */}
      <div className="hero-bg-glows">
        <div className="glow-sphere glow-1"></div>
        <div className="glow-sphere glow-2"></div>
      </div>

      {/* Main SaaS Content Container */}
      <div className="hero-container">
        <span className="hero-badge">Introducing NLURC 2.0</span>
        
        <h1 className="hero-title">
          North Lakhimpur University<br />
          Robotics <span>Club</span>
        </h1>
        
        <p className="hero-subtitle">
          Welcome to the official NLU Robotics Club! We are a community of thinkers, creators, and problem solvers dedicated to exploring the world of automation. Whether you want to master Arduino, design custom hardware, or program autonomous systems, there is a place for you here. Let’s build the future together!
        </p>

        <div className="hero-actions">
          <a href="#" className="hero-btn-primary">Join Now</a>
          <a href="#" className="hero-btn-secondary">Explore</a>
        </div>
      </div>
    </section>
  );
}
