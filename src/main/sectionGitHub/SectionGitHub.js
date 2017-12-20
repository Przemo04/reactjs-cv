import React from "react";
import "./SectionGitHub.scss";

const urlGitHub = "https://api.github.com/users/Przemo04/repos";

class SectionGitHub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: [],
      isLoading: "Loading repository.."
    };
  }

  componentDidMount() {
    fetch(urlGitHub)
      .then(response => response.json())
      .then(data =>
        this.setState({ repo: data, isLoading: "Success Load data from github" })
      )
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  }

  render() {
    const { repo } = this.state;

    return (
      <div>
        <h1>Lista repozytrium GitHub</h1>
        <h6>{this.state.isLoading}</h6>
				<div className="linkRepo">
        {repo.map(project => (
          <div key={project.id}>
            <a href={project.url}>{project.name}</a>
          </div>
        ))}
				</div>
      </div>
    );
  }
}
export default SectionGitHub;
