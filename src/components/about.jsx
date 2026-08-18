function About() {
  return (
    <section className="about-section" id="about">

      <div className="section-heading">
        <span>01 / ABOUT ME</span>

        <h2>
          Turning ideas into <em>digital solutions.</em>
        </h2>
      </div>

      <div className="about-grid">

        {/* LEFT */}
        <div className="about-intro">

          <p className="about-label">
            WHO I AM
          </p>

          <h3>
            Information Technology
            <span> Student & Developer.</span>
          </h3>

        </div>


        {/* RIGHT */}
        <div className="about-text">

          <p>
            I am a B.Tech Information Technology student with a strong
            foundation in programming, web development, AI/ML, IoT,
            networking, and cloud technologies.
          </p>

          <p>
            I have hands-on experience working with Python, C, C++,
            JavaScript, React.js, Node.js, REST APIs, databases,
            embedded systems, networking technologies, and AWS
            cloud services.
          </p>

          <p>
            I enjoy developing practical applications and intelligent
            solutions while continuously exploring emerging technologies.
          </p>

          <div className="about-tech">

            <div className="about-tech-item">
              <span>01</span>
              <strong>Programming</strong>
              <small>Python · C · C++</small>
            </div>

            <div className="about-tech-item">
              <span>02</span>
              <strong>Web Development</strong>
              <small>HTML · CSS · React · Node.js</small>
            </div>

            <div className="about-tech-item">
              <span>03</span>
              <strong>IoT & Embedded</strong>
              <small>ESP32 · ESP32-CAM · Arduino</small>
            </div>

            <div className="about-tech-item">
              <span>04</span>
              <strong>Cloud & Networking</strong>
              <small>AWS · Routing · VLAN · IP</small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;