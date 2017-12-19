import React from "react";

import SectionGoal from "./sectionGoal/SectionGoal.js";
import SectionEducation from "./sectionEducation/SectionEducation.js";
import SectionExperience from "./sectionExperience/SectionExperience.js";
import SectionSkills from "./sectionSkills/SectionSkills.js";
import SectionAdditional from "./sectionAdditional/SectionAdditional.js";
import SectionGitHub from "./sectionGitHub/SectionGitHub.js";

import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <SectionGoal />
        <SectionEducation />
        <SectionExperience />
        <SectionSkills />
        <SectionAdditional />
        <SectionGitHub />
      </div>
    );
  }
}
export default Main;
