import React from "react";

import "./SectionExperience.scss";
import HeadSection from "../../common/headSection/HeadSection.js";
import { Timeline, TimelineEvent } from "react-event-timeline";
class SectionExperience extends React.Component {
  render() {
    return (
      <div className="SectionExperience">
        <HeadSection name="Doświadczenie" />
        <Timeline>
          <TimelineEvent
            title="Future Trip Sp. z o.o."
            createdAt="07/2016 - 04/2017"
            icon={<i className="Odd" />}
          >
            Praca nad projektem, tworzącym rozwiazania dla przewoźników
            autobusowych. Wykorzystywane technologie i narzedzia: HTML, CSS,
            Bootstrap, PYTHON, DJANGO, REST API, REACT, REDUX, ES6
          </TimelineEvent>
          <TimelineEvent
            title="Logos Centrum Edukacyjne Łomża"
            createdAt="02/2017"
            icon={<i className="Odd" />}
          >
            Prowadzenie kursu dla uczniów szkoły średniej z podstaw
            programowania w Ostrołęce.
          </TimelineEvent>
          <TimelineEvent
            title="OpsTalent Sp. z o.o."
            createdAt="05/2016 - 11/2016"
            icon={<i className="Odd" />}
          >
            Praca przy budowaniu serwisów dla zagranicznych klientów m.in serwis
            papilly.com. Wykorzystywane technologie i narzedzia: CSS, Bootstrap,
            HTML, PHP, GIT, nginx, SCRUM, Wordpres
          </TimelineEvent>
          <TimelineEvent
            title="ESL Landscape Contractors Londyn"
            createdAt="06/2015 - 09/2016"
            icon={<i className="Odd" />}
          >
            Praca polegała na projektowaniu i realizacji ogrodów na obiektach
            rozmieszczonych po Londynie.
          </TimelineEvent>
          <TimelineEvent
            title="Dynamic Solutions Sp. z o.o. Białystok"
            createdAt="11/2014 - 04/2015"
            icon={<i className="Odd" />}
          >
            Praca przy budowie serwisu dla biura nieruchomości który
            zintegrowano z zewnętrznym API. Wykorzystywane technologie: PHP,
            REST API, jQuery, HTML, CSS, RWD, SVN.
          </TimelineEvent>
          <TimelineEvent
            title="Broker Media Warszawa"
            createdAt="2012r - 2014r"
            icon={<i className="Odd" />}
          >
            Realizacja projektów opartych o CMS wordpress. Wykorzystywane
            technologie: HTML, CSS, jQuery, Wordpress.
          </TimelineEvent>
          <TimelineEvent
            title="Praca jako freelancer"
            createdAt="2008r - 2012r"
            icon={<i className="Odd" />}
          >
            {" "}
            Współpraca z firmami takimi jak: Bopss Suwałki, Wenus Meble,
            It-Service. Sudnikowski P Drobne projekty, fora internetowe,
            projektowanie grafik. Wykorzystywane technologie i narzedzia: HTML,
            CSS, PHP, phpmybb, Webspell, ActionScript, Flash, Photoshop.
          </TimelineEvent>
        </Timeline>,
      </div>
    );
  }
}
export default SectionExperience;
