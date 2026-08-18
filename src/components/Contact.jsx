import React from "react";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* ================= HEADER ================= */}

        <div className="contact-heading">

          <span className="contact-label">
            07 / CONTACT
          </span>

          <h2>
            Let's build
            <br />
            something
            <em> great.</em>
          </h2>

          <p>
            Have a project, opportunity, or idea in mind?
            Let's connect and create something meaningful.
          </p>

        </div>


        {/* ================= CONTACT DETAILS ================= */}

        <div className="contact-details">

          {/* EMAIL */}

          <a
            href="mailto:vishwa2006kv@gmail.com"
            className="contact-link"
          >
            <div className="contact-link-left">

              <span className="contact-link-label">
                EMAIL
              </span>

              <span className="contact-link-value">
                vishwa2006kv@gmail.com
              </span>

            </div>

            <span className="contact-arrow">
              ↗
            </span>

          </a>


          {/* PHONE */}

          <a
            href="tel:+917598266142"
            className="contact-link"
          >
            <div className="contact-link-left">

              <span className="contact-link-label">
                PHONE
              </span>

              <span className="contact-link-value">
                7598266142
              </span>

            </div>

            <span className="contact-arrow">
              ↗
            </span>

          </a>


          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/vishwa-k-569693288/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-link-left">

              <span className="contact-link-label">
                LINKEDIN
              </span>

              <span className="contact-link-value">
                /vishwa-k-569693288
              </span>

            </div>

            <span className="contact-arrow">
              ↗
            </span>

          </a>


          {/* GITHUB */}

          <a
            href="https://github.com/vishwa2006kv-rgb"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-link-left">

              <span className="contact-link-label">
                GITHUB
              </span>

              <span className="contact-link-value">
                /vishwa2006kv-rgb
              </span>

            </div>

            <span className="contact-arrow">
              ↗
            </span>

          </a>

        </div>

      </div>


      {/* ================= CTA ================= */}

      <div className="contact-cta">

        <a
          href="mailto:vishwa2006kv@gmail.com"
          className="contact-button"
        >
          GET IN TOUCH

          <span>
            ↗
          </span>

        </a>

      </div>


      {/* ================= FOOTER ================= */}

      <footer className="site-footer">

        <span>
          © {new Date().getFullYear()} Vishwa K
        </span>

        <span>
          Built with passion & code.
        </span>

        <span>
          INFORMATION TECHNOLOGY
        </span>

      </footer>

    </section>
  );
}

export default Contact;