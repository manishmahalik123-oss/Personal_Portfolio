import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Design Intern</h4>
                <h5>CTTC</h5>
              </div>
              <h3>Internship</h3>
            </div>
            <p>
              Assisted in developing and optimizing responsive web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>Labmentix</h5>
              </div>
              <h3>Internship</h3>
            </div>
            <p>
              Developed and trained ML models and performed data preprocessing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PGDCA</h4>
                <h5>Aptech Learning</h5>
              </div>
              <h3>1-year Training</h3>
            </div>
            <p>
              Demonstrated 1-year certified training in C, C++, Java, SQL Server, Cloud Computing and MS Office suite.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Internshala Trainings</h5>
              </div>
              <h3>8-week Training</h3>
            </div>
            <p>
              Completed an 8-week certified training covering HTML, CSS, Bootstrap, JavaScript, React, PHP, DBMS, with hands-on projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
