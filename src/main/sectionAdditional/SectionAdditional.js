import React from "react";
import "./SectionAdditional.scss";
import HeadSection from "../../common/headSection/HeadSection.js";

class SectionAdditional extends React.Component {
  render() {
    return (
      <div className="SectionAdditional">
        <HeadSection name="Dodatkowe informacje" />
        <div className="Additional-Wrapper">
          <h3>Języki obce: </h3>
          <p>j.Angielski poziom podstawowy</p>
          <h3>Hobby: </h3>
          <p>
            Udział w eventach branżowych(IT), nowoczesne technologie, piłka
            nożna, motoryzacja, podróże.
          </p>
          <h3>Ulubione strony intenretowe: </h3>
          <p>stackoverflow.com, jsdn.pl, nafrontendzie.pl, youtube.com </p>
          <h3>Ulubione ksiązki: </h3>
          <p>
            "Czysty kod", "JavaScript The Goog Parts", "Ojciec chrzestny",
            "Rodzina Borgiów"
          </p>
          <h3>Referencje i certyfikaty (kliknij, aby pobrać): </h3>
          <div className="Referencje">
            <a href="http://codedev.pl/DynamicSolutions.pdf">
              Referencja Dynamic Solutions
            </a>
            <a href="http://codedev.pl/CertyfikatGoogle.pdf">
              Certyfikat google (marketing internetowy)
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default SectionAdditional;
