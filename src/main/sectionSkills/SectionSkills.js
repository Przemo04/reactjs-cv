import React from 'react';

import './SectionSkills.scss';
import HeadSection from '../../common/headSection/HeadSection.js';
import Skill from './Skill/Skill.js';
import skills from '../../data/skills.json';

import ReactDOM from 'react-dom';
class SectionSkills extends React.Component{

	constructor(props) {
		super(props);
		this.state = { skills: []}
	}

	componentDidMount(){
		this.setState({
			skills
		});
	}

	onClickLow(buttonId, event){
		event.preventDefault();
		const filteredArray = this.state.skills.filter(item => item.level == buttonId);
		this.setState({
			skills: filteredArray
		});
	}
	onClickBasic(buttonId, event){
		event.preventDefault();
		const filteredArray = this.state.skills.filter(item => item.level == buttonId);
		this.setState({
			skills: filteredArray
		});
	}
	onClickMedium(buttonId, event){
		event.preventDefault();
		const filteredArray = this.state.skills.filter(item => item.level == buttonId);
		this.setState({
			skills: filteredArray
		});
	}
	onClickHigh(buttonId, event){
		event.preventDefault();
		const filteredArray = this.state.skills.filter(item => item.level == buttonId);
		this.setState({
			skills: filteredArray
		});
	}
	render(){

		return(
			<div className="SectionSkills">
				<HeadSection name="Umiejętności" />
				<h5>Legenda poziomu znajomości technologii i narzędzi*</h5>
					<ul className="Legend-Skills">
						<li>podstawowa</li>
						<li><div onClick={this.onClickLow.bind(this, 1)} className="Low"></div></li>
						<li><div onClick={this.onClickBasic.bind(this, 2)}className="Basic"></div></li>
						<li><div onClick={this.onClickMedium.bind(this, 3)}className="Medium"></div></li>
						<li><div onClick={this.onClickHigh.bind(this, 4)}className="High"></div></li>
						<li>zaawansowana</li>
					</ul>

				<div className="SkillWrapper">

						{this.state.skills.map(item =>{
							let classLevel;
							if (item.level == 1) {
								classLevel = 'Low';
							} else if (item.level == 2){
								classLevel = 'Basic';
							} else if (item.level == 3){
								classLevel = 'Medium';
							} else {
								classLevel = 'High';
							}
								return (
									<Skill level={classLevel} name={item.name}></Skill>
								);
						})}

				</div>

				<p className="Star">* - Jest to subiektywna ocena umiejętności</p>

			</div>
		);
	}
}
export default SectionSkills;
