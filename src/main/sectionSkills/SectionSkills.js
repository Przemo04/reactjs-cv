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

	onClick(event){
		event.preventDefault();
		return false;
	}
	render(){

		return(
			<div className="SectionSkills">
				<HeadSection name="Umiejętności" />
				<h5>Legenda poziomu znajomości technologii i narzędzi*</h5>
					<ul className="Legend-Skills">
						<li>podstawowa</li>
						<li><div className="Low"><button onClick={this.onClick.bind(this)}>Click</button></div></li>
						<li><div className="Basic"></div></li>
						<li><div className="Medium"></div></li>
						<li><div className="High"></div></li>
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
