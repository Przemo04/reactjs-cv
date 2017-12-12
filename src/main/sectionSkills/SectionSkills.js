import React from "react";

import "./SectionSkills.scss";
import HeadSection from "../../common/headSection/HeadSection.js";
import Skill from "./Skill/Skill.js";
import skills from "../../data/skills.json";

import ReactDOM from "react-dom";
class SectionSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills, level: "Low" };
  }

  onClickChooseLevel(level, buttonId, event) {
    event.preventDefault();
    const currentLevel = this.state.level;

    this.setState({
      level
    });
  }

  render() {
    return (
      <div className="SectionSkills">
        <HeadSection name="Umiejętności" />
        <h5>Legenda poziomu znajomości technologii i narzędzi*</h5>
        <ul className="Legend-Skills">
          <li>podstawowas</li>
          <li>
            <div
              onClick={this.onClickChooseLevel.bind(this, "Low", 1)}
              className="Low"
            />
          </li>
          <li>
            <div
              onClick={this.onClickChooseLevel.bind(this, "Basic", 2)}
              className="Basic"
            />
          </li>
          <li>
            <div
              onClick={this.onClickChooseLevel.bind(this, "Medium", 3)}
              className="Medium"
            />
          </li>
          <li>
            <div
              onClick={this.onClickChooseLevel.bind(this, "High", 4)}
              className="High"
            />
          </li>
          <li>zaawansowana</li>
        </ul>

        <div className="SkillWrapper">
          {this.state.skills.map(item => {
            let classLevel;
            if (item.level == 1) {
              classLevel = "Low";
            } else if (item.level == 2) {
              classLevel = "Basic";
            } else if (item.level == 3) {
              classLevel = "Medium";
            } else {
              classLevel = "High";
            }
            if (classLevel == this.state.level) {
              return (
                <Skill key={item.id} level={classLevel} name={item.name} />
              );
            }
          })}
        </div>
        <p className="Star">* - Jest to subiektywna ocena umiejętności</p>
      </div>
    );
  }
}
export default SectionSkills;
