import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Motivated B.Tech Computer Science Engineering student.
        </p>
        <div className="about-details" style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
          <p style={{ fontSize: "20px", lineHeight: "1.5", fontWeight: "400", color: "#d1d5db" }}>
            <strong style={{ color: "#fff" }}>Primary Skills:</strong> Strong foundations in Java, Python, Web Development, and basic AI/ML concepts.
          </p>
          <p style={{ fontSize: "20px", lineHeight: "1.5", fontWeight: "400", color: "#d1d5db" }}>
            <strong style={{ color: "#fff" }}>Experience:</strong> Skilled in developing real-world applications, data handling, and collaborative problem-solving.
          </p>
          <p style={{ fontSize: "20px", lineHeight: "1.5", fontWeight: "400", color: "#d1d5db" }}>
            <strong style={{ color: "#fff" }}>Objective:</strong> Seeking an entry-level IT/Software role to apply technical skills, contribute to innovative projects, and grow professionally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
