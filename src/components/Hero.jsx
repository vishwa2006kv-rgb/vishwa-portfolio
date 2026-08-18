import profileImage from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT CONTENT */}
      <div className="hero-content">

        <div className="hero-badge">
          <span className="status-dot"></span>
          Open to opportunities
        </div>

        <p className="hero-small-text">
          HELLO, I'M
        </p>

        <h1>
          Vishwa <span>K.</span>
        </h1>

        <h2>
          Information Technology Student
          <br />
          <span>& Developer.</span>
        </h2>

        <p className="hero-description">
          B.Tech Information Technology student passionate about
          building practical digital solutions across web development,
          AI, IoT, networking, and cloud technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Work
            <span className="button-arrow">↗</span>
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/vishwa2006kv-rgb"
            target="_blank"
            rel="noreferrer"
          >
            GH
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            in
          </a>
        </div>

      </div>


      {/* RIGHT PROFILE */}
      <div className="hero-visual">

        <div className="hero-glow"></div>

        <div className="hero-ring hero-ring-one"></div>
        <div className="hero-ring hero-ring-two"></div>

        <div className="profile-frame">

          <div className="profile-inner">

            <img
              src={profileImage}
              alt="Vishwa K"
              className="profile-image"
            />

          </div>

        </div>

        {/* FLOATING CARD 1 */}
        <div className="floating-card card-one">
          <span className="card-number">01</span>

          <div>
            <p>Web</p>
            <p>Development</p>
          </div>
        </div>


        {/* FLOATING CARD 2 */}
        <div className="floating-card card-two">
          <span className="card-number">02</span>

          <div>
            <p>AI &</p>
            <p>IoT</p>
          </div>
        </div>


        <div className="hero-tech-label">
          <span></span>
          BUILD • CREATE • INNOVATE
        </div>

      </div>


      {/* SCROLL */}
      <a href="#about" className="scroll-indicator">
        <span className="scroll-line"></span>
        SCROLL TO EXPLORE
      </a>

    </section>
  );
}

export default Hero;