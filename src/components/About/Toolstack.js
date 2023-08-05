import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiUbuntu,
    SiJetbrains,
    SiDiscord,
    SiVmware,
    SiAnaconda,
    SiQt
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <SiVmware />
      </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiAnaconda />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <SiQt/>
      </Col>
    </Row>
  );
}

export default Toolstack;
