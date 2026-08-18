function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Programming",
      description: "Core programming and problem-solving",
      skills: ["Python", "C", "C++"],
    },

    {
      number: "02",
      title: "Web Technologies",
      description: "Building modern web interfaces",
      skills: ["HTML", "CSS"],
    },

    {
      number: "03",
      title: "IoT & Embedded",
      description: "Hardware, sensors and connected systems",
      skills: [
        "ESP-32",
        "ESP-32 CAM",
        "Arduino",
        "Sensor Integration",
      ],
    },

    {
      number: "04",
      title: "Networking",
      description: "Network configuration and fundamentals",
      skills: [
        "RIP",
        "OSPF",
        "VLANs",
        "IP Addressing",
        "Subnetting",
        "Wireless Networks",
      ],
    },

    {
      number: "05",
      title: "Cloud Technologies",
      description: "AWS cloud services and infrastructure",
      skills: [
        "EC2",
        "S3",
        "IAM",
        "RDS",
        "CloudWatch",
        "Lambda",
      ],
    },
  ];

  return (
    <section className="skills-section" id="skills">

      <div className="section-heading">
        <span>02 / SKILLS</span>

        <h2>
          Tools I use to
          <em> build things.</em>
        </h2>
      </div>


      <div className="skills-list">

        {skillGroups.map((group) => (
          <div className="skill-card" key={group.number}>

            <div className="skill-top">

              <span className="skill-number">
                {group.number}
              </span>

              <span className="skill-arrow">
                ↗
              </span>

            </div>


            <div className="skill-content">

              <h3>
                {group.title}
              </h3>

              <p>
                {group.description}
              </p>

            </div>


            <div className="skill-tags">

              {group.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;