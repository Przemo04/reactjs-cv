import React from "react";

import "./SectionSkills.scss";
import HeadSection from "../../common/headSection/HeadSection.js";
import Skill from "./Skill/Skill.js";
import ButtonSkill from "./ButtonSkill/ButtonSkill.js";
import skills from "../../data/skills.json";

class SectionSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills,
      buttons: {
        1: true,
        2: true,
        3: true,
        4: true
      }
    };
  }

  onClickChooseLevel(id) {
    console.log("this.state.buttons:" + this.state.buttons);
    if (this.state.buttons[id]) {
      this.setState({
        skills: this.state.skills.filter(
          skill => parseInt(skill.level, 10) !== id
        )
      });
    }
    this.setState({
      buttons: {
        ...this.state.buttons,
        [id]: !this.state.buttons[id]
      }
      //skills: filteredArray
    });
  }

  render() {
    return (
      <div className="SectionSkills">
        <HeadSection name="Umiejętności" />
        <h5>Legenda poziomu znajomości technologii i narzędzi*</h5>
        <ButtonSkill
          name="niska"
          buttonClass="Low"
          active={this.state.buttons[1]}
          onClickChooseLevel={this.onClickChooseLevel.bind(this, 1)}
        />
        <ButtonSkill
          name="podstawa"
          buttonClass="Basic"
          active={this.state.buttons[2]}
          onClickChooseLevel={this.onClickChooseLevel.bind(this, 2)}
        />
        <ButtonSkill
          name="średnia"
          buttonClass="Medium"
          active={this.state.buttons[3]}
          onClickChooseLevel={this.onClickChooseLevel.bind(this, 3)}
        />
        <ButtonSkill
          name="zaawansowana"
          buttonClass="High"
          active={this.state.buttons[4]}
          onClickChooseLevel={this.onClickChooseLevel.bind(this, 4)}
        />

        <div className="SkillWrapper">
          {this.state.skills.map(skill => {
            let level = parseInt(skill.level, 10);
            let classLevel;
            if (level === 1) {
              classLevel = "Low";
            } else if (level === 2) {
              classLevel = "Basic";
            } else if (level === 3) {
              classLevel = "Medium";
            } else {
              classLevel = "High";
            }
            return (
              <Skill key={skill.id} level={classLevel} name={skill.name} />
            );
          })}
        </div>
        <p className="Star">* - Jest to subiektywna ocena umiejętności</p>
      </div>
    );
  }
}
export default SectionSkills;
