import React from "react";

import iotSprayer from "../assets/projects/iot-sprayer.png";
import aiAgents from "../assets/projects/ai-agents.png";
import airBrake from "../assets/projects/air-brake.png";
import malware from "../assets/projects/malware-analysis.png";

const projects = [
  {
    number: "01",
    title: "IoT Based Pesticides Sprayer",
    category: "IoT / Embedded Systems",

    image: iotSprayer,

    description:
      "Designed an IoT-enabled system using ESP32-CAM and GPS for real-time monitoring and pesticide spraying. The system focuses on reducing chemical wastage while improving spraying accuracy, safety, and remote control.",

    technologies: [
      "ESP32-CAM",
      "GPS",
      "IoT",
      "Embedded Systems",
      "Mobile App",
    ],

    year: "2025",
  },

  {
    number: "02",
    title: "AI Agents Discovery Platform",
    category: "Full Stack / AI",

    image: aiAgents,

    description:
      "Developed a full-stack web platform that enables users to discover and explore various AI agents in a single interface. Built with React.js, Node.js, Express.js, and MongoDB Atlas with REST API integration.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "REST API",
    ],

    year: "2025",
  },

  {
    number: "03",
    title: "Adaptive Air Brake System for Speed Control in Commercial Vehicles",
    category: "IoT / Embedded Systems",

    image: airBrake,

    description:
      "Developed an adaptive air brake system using Arduino Nano, pressure sensors, and relay modules to monitor air pressure. The system incorporates automatic speed regulation and alert mechanisms for improved driver safety.",

    technologies: [
      "Arduino Nano",
      "Pressure Sensor",
      "Relay Module",
      "IoT",
      "Automation",
    ],

    year: "2025",
  },

  {
    number: "04",
    title: "Malware Analysis Through Digital Forensics",
    category: "Cybersecurity / Digital Forensics",

    image: malware,

    description:
      "Developed an academic project focused on identifying and analysing malicious activities using digital forensic techniques. The workflow includes identification, preservation, analysis, and reporting using Kali Linux forensic tools.",

    technologies: [
      "Kali Linux",
      "Guymager",
      "Bulk Extractor",
      "Sleuth Kit",
      "Digital Forensics",
    ],

    year: "2025",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="section-heading projects-heading">

          <div className="section-label">
            03 / PROJECTS
          </div>

          <div className="projects-heading-row">

            <h2>
              Some things I’ve <span>built.</span>
            </h2>

          </div>
        </div>


        {/* PROJECT LIST */}
        <div className="projects-list">

          {projects.map((project, index) => (

            <article
              className={`project-card ${
                index % 2 !== 0 ? "project-card-reverse" : ""
              }`}
              key={project.number}
            >

              {/* PROJECT IMAGE */}
              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="project-image-overlay" />

                <span className="project-number">
                  {project.number}
                </span>

              </div>


              {/* PROJECT CONTENT */}
              <div className="project-content">

                <div className="project-meta">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <span className="project-year">
                    {project.year}
                  </span>

                </div>


                <h3>
                  {project.title}
                </h3>


                <p className="project-description">
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}
                <div className="project-tags">

                  {project.technologies.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>


                {/* PROJECT LINKS */}
                <div className="project-links">

                  <button
                    type="button"
                    className="project-link"
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                  >
                    <span>Discuss Project</span>

                    <span className="project-link-arrow">
                      ↗
                    </span>
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;