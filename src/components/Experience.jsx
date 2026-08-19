import React from "react";

const experiences = [
  {
    number: "01",
    role: "Full Stack Development (Python)",
    company: "ReTech Solutions Pvt Ltd",
    period: "February 2025",
    location: "On-site",

    description:
      "Completed a 10-day internship and developed a Django-based Pet Care Shop web application. Implemented e-commerce and service booking features with authentication and responsive design. Applied Django with structured database management to support scalability and security.",

    technologies: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "Database",
    ],
  },

  {
    number: "02",
    role: "AWS Fundamentals",
    company: "Aventro Technologies Pvt Ltd",
    period: "September 2025",
    location: "On-site",

    description:
      "Finished a one-month internship focused on AWS Fundamentals. Gained practical knowledge of cloud computing concepts and deployment models. Worked with EC2, S3, IAM, RDS, CloudWatch, and Lambda while learning cloud deployment, monitoring, security, hosting, storage, and resource management practices.",

    technologies: [
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "RDS",
      "CloudWatch",
      "Lambda",
    ],
  },

  {
    number: "03",
    role: "AI YouTube Income System",
    company: "Aventro Technologies Pvt Ltd",
    period: "October 2025",
    location: "On-site",

    description:
      "Successfully completed a short-term internship focused on AI-driven YouTube Income Systems. Gained hands-on exposure to cloud computing concepts and their application in AI-based workflows. Improved practical understanding of industry practices, automation tools, scalable digital systems, and real-world project environments.",

    technologies: [
      "Artificial Intelligence",
      "AI Workflows",
      "Automation",
      "Cloud Computing",
      "Scalable Systems",
    ],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="section-heading experience-heading">

          <span>04 / EXPERIENCE</span>

          <h2>
            Where I gained
            <em> experience.</em>
          </h2>

        </div>


        {/* EXPERIENCE LIST */}
        <div className="experience-list">

          {experiences.map((experience) => (

            <article
              className="experience-item"
              key={experience.number}
            >

              {/* NUMBER */}
              <div className="experience-number">
                {experience.number}
              </div>


              {/* PERIOD */}
              <div className="experience-period">
                {experience.period}
              </div>


              {/* MAIN CONTENT */}
              <div className="experience-content">

                <div className="experience-top">

                  <div>

                    <h3>
                      {experience.role}
                    </h3>

                    <p className="experience-company">
                      {experience.company}
                    </p>

                  </div>


                  <span className="experience-location">
                    {experience.location}
                  </span>

                </div>


                {/* DESCRIPTION */}
                <p className="experience-description">
                  {experience.description}
                </p>


                {/* TECHNOLOGIES */}
                <div className="experience-technologies">

                  {experience.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;
