import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shahin Bryan </span>
            from <span className="purple"> Cologne, Germany.</span>
            <br /> I am a 4th Semester student pursuing a B.S
            in technical Informatics at TH Koeln.
            <br />
            Additionally, I am currently employed as a working student in the area of System- 					Integration at Jungwild GmbH in Cologne.
            <br />
            <br />
            Apart from coding, some other activities that I love to do are!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading tech-Articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Campagning Social Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build practical software-solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Shahin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
