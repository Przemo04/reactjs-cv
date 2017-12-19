import React from "react";
import cn from "classnames";
import "./ButtonSkill.scss";
class ButtonSkill extends React.Component {
  render() {
    const buttonActive = this.props.active ? "Active" : "Inactive";
    return (
      <div className="ButtonSkill">
        <button
          className={cn(this.props.buttonClass, buttonActive)}
          onClick={this.props.onClickChooseLevel}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
export default ButtonSkill;
