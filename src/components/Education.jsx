import React from "react";

const education = [
  {
    number: "01",
    period: "2023 — 2027",
    degree: "B.Tech — Information Technology",
    institution: "IFET College of Engineering",
    result: "CGPA 7.93",
  },

  {
    number: "02",
    period: "2023",
    degree: "Higher Secondary (12th)",
    institution: "Saraswathi Matric Hr. Sec. School",
    result: "82%",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">

        {/* HEADER */}
        <div className="section-heading education-heading">
          <span>05 / EDUCATION</span>

          <h2>
            My academic
            <em> journey.</em>
          </h2>
        </div>


        {/* EDUCATION LIST */}
        <div className="education-list">

          {education.map((item) => (
            <article
              className="education-card"
              key={item.number}
            >

              {/* NUMBER */}
              <div className="education-number">
                {item.number}
              </div>


              {/* PERIOD */}
              <div className="education-period">
                {item.period}
              </div>


              {/* DETAILS */}
              <div className="education-details">
                <h3>{item.degree}</h3>

                <p>{item.institution}</p>
              </div>


              {/* RESULT */}
              <div className="education-result">
                {item.result}
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;