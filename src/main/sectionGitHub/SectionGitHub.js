import React from "react";
import "./SectionGitHub.scss";

const urlGitHub = "https://api.github.com/users/Przemo04/repos";

class SectionGitHub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: []
    };
  }

  componentDidMount() {
    fetch(urlGitHub)
      .then(response => response.json())
      .then(data => this.setState({ repo: data }))
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  }

  render() {
    const { repo } = this.state;
    return (
      <div>
        <h1>Lista repozytrium GitHub</h1>
        {repo.map(project => (
          <div key={project.id}>
            <a href={project.url}>{project.name}</a>
          </div>
        ))}
      </div>
    );
  }
}
export default SectionGitHub;
