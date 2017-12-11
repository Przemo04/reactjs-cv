import React from "react";
import "./Skill.scss";
class Skill extends React.Component {
  render() {
    return (
      <div className="Skill">
        <div className={this.props.level}>
          <li>{this.props.name}</li>
        </div>
      </div>
    );
  }
}
export default Skill;
