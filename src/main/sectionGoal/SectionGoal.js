import React from "react";
import logoReact from "../../images/logo.svg";
import "./SectionGoal.scss";
import HeadSection from "../../common/headSection/HeadSection.js";

class SectionGoal extends React.Component {
  render() {
    return (
      <div className="SectionGoal">
        <p>
          <i>
            Jestem absolwentem informatyki o specjalizacji technologie
            internetowe i mobilne. Posiadam wieloletnie doświadczenie wykonując
            projekty głównie jako freelancer. Różnorodność technologii, które
            udało mi się poznać pozwoliły na dokonanie wyboru języka i narzędzi
            w których chciałbym się rozwijać. Niewątpliwie jest to język
            JavaScript oraz wszelkie technologie związane z tym językiem, w
            szczególności zafascynowała mnie biblioteka React.
          </i>
        </p>

        <img src={logoReact} alt="Logo react" className="App-logo" />
      </div>
    );
  }
}
export default SectionGoal;
