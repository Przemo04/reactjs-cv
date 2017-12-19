import React from "react";
import "./PersonalDetails.scss";

class PersonalDetails extends React.Component {
  render() {
    return (
      <div className="PersonalDetails">
        <h2>Kontakt</h2>
        <ul>
          <li>
            <strong>D.O.B:</strong> 18.04.1992
          </li>
          <li>
            <strong>Nr. tel:</strong> 517 432 935
          </li>
          <li>
            <strong>E-mail:</strong> truchan@codedev.pl
          </li>
          <li>
            <strong>Github:</strong> github.com/Przemo04/
          </li>
          <li>
            <strong>Zamieszkanie:</strong> Białystok
          </li>
        </ul>
      </div>
    );
  }
}
export default PersonalDetails;
