import React from "react";

const certifications = [
  {
    number: "01",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    year: "2024",
  },
  {
    number: "02",
    title: "NPTEL – Python for Data Science",
    issuer: "NPTEL",
    year: "2024",
  },
  {
    number: "03",
    title: "CCNA: Switching, Routing & Wireless Essentials",
    issuer: "Cisco",
    year: "2025",
  },
  {
    number: "04",
    title: "CCNA: Enterprise Networking, Security & Automation",
    issuer: "Cisco",
    year: "2025",
  },
  {
    number: "05",
    title: "Introduction to AI",
    issuer: "Infosys",
    year: "",
  },
  {
    number: "06",
    title: "Artificial Intelligence to All",
    issuer: "Infosys",
    year: "",
  },
  {
    number: "07",
    title: "Prompt Engineering",
    issuer: "Infosys",
    year: "",
  },
];

const achievements = [
  {
    number: "01",
    title: "National Science Day – Project Expo",
    description: "III Prize",
    year: "2023",
  },
  {
    number: "02",
    title: "ISTE Paper Presentation",
    description: "IV Prize",
    year: "2025",
  },
  {
    number: "03",
    title: "Mailam Engineering College – Project Expo",
    description: "III Prize",
    year: "2025",
  },
  {
    number: "04",
    title: "ISTE Project Expo",
    description: "II Prize",
    year: "2025",
  },
  {
    number: "05",
    title: "Knowledge Institute of Technology – Paper Presentation",
    description: "I Prize",
    year: "2026",
  },
];

function Certifications() {
  return (
    <section
      className="certifications-section"
      id="certifications"
    >
      <div className="container">

        {/* HEADER */}
        <div className="section-heading recognition-heading">

          <span>06 / RECOGNITION</span>

          <h2>
            Credentials &
            <em> achievements.</em>
          </h2>

        </div>


        {/* TWO COLUMNS */}
        <div className="recognition-grid">

          {/* ================= CERTIFICATIONS ================= */}

          <div className="recognition-column">

            <div className="recognition-title">
              <span>CERTIFICATIONS</span>
              <span>07</span>
            </div>


            <div className="certification-list">

              {certifications.map((item) => (

                <div
                  className="certification-item"
                  key={item.number}
                >

                  <span className="recognition-number">
                    {item.number}
                  </span>


                  <div className="recognition-info">

                    <h3>{item.title}</h3>

                    <p>{item.issuer}</p>

                  </div>


                  {item.year && (
                    <span className="recognition-year">
                      {item.year}
                    </span>
                  )}

                </div>

              ))}

            </div>

          </div>


          {/* ================= ACHIEVEMENTS ================= */}

          <div className="recognition-column">

            <div className="recognition-title">
              <span>ACHIEVEMENTS</span>
              <span>05</span>
            </div>


            <div className="achievement-list">

              {achievements.map((item) => (

                <div
                  className="achievement-item"
                  key={item.number}
                >

                  <div className="achievement-number">
                    {item.number}
                  </div>


                  <div className="achievement-info">

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                  </div>


                  <span className="achievement-year">
                    {item.year}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Certifications;