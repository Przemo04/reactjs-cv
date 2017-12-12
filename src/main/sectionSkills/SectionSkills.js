import React from "react";

import "./SectionSkills.scss";
import HeadSection from "../../common/headSection/HeadSection.js";
import Skill from "./Skill/Skill.js";
import skills from "../../data/skills.json";

class SectionSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills, buttonId: 2 };
  }

  onClickChooseLevel(buttonId, event) {
    event.preventDefault();
    this.setState({
      buttonId
    });
  }

  render() {
    return (
      <div className="SectionSkills">
        <HeadSection name="Umiejętności" />
        <h5>Legenda poziomu znajomości technologii i narzędzi*</h5>
        <ul className="Legend-Skills">
          <li>podstawowa</li>
          <li>
            <div
              onClick={this.onClickChooseLevel.bind(this, 1)}
              className="Low"
            />
          </li>
          <li>
            <div
              onClick={this.onClickChooseLevel.bind(this, 2)}
              className="Basic"
            />
          </li>
          <li>
            <div
              onClick={this.onClickChooseLevel.bind(this, 3)}
              className="Medium"
            />
          </li>
          <li>
            <div
              onClick={this.onClickChooseLevel.bind(this, 4)}
              className="High"
            />
          </li>
          <li>zaawansowana</li>
        </ul>

        <div className="SkillWrapper">
          {this.state.skills
            .filter(skill => skill.level == this.state.buttonId)
            .map(skill => {
              let classLevel;
              if (skill.level == 1) {
                classLevel = "Low";
              } else if (skill.level == 2) {
                classLevel = "Basic";
              } else if (skill.level == 3) {
                classLevel = "Medium";
              } else {
                classLevel = "High";
              }
              return <Skill key={skill.id} level={classLevel} name={skill.name} />;
            })}
        </div>
        <p className="Star">* - Jest to subiektywna ocena umiejętności</p>
      </div>
    );
  }
}
export default SectionSkills;
