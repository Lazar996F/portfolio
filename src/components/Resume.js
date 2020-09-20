import React, { Component } from "react";
import SkillBar from "react-skillbars";

export default class Resume extends Component {
  render() {
    const skills = [
      { type: "VS Code", level:99},
      { type: "React.js", level: 95},
      { type: "Node.js", level: 60 },
      { type: "HTML", level: 95 },
      { type: "Javascript", level: 90 },
      { type: "CSS", level: 95 },
      { type: "Bootstrap", level: 99 }
    ];
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">{item.specialization}</p>
                      <p>{item.Achievements}</p>
                      <p className="info">{item.specialization2}</p>
                      <p>{item.Achievements2}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>
            <div>
              <ul>
                <li>
                  <SkillBar skills={skills} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
