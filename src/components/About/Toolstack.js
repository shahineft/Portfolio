import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiUbuntu,
    SiJetbrains,
    SiDiscord,
    SiVmware,
    SiAnaconda,
    SiQt,
    SiVisualstudio,
    SiWindows11,
    SiSuse,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <SiWindows11/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiAnaconda />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <SiQt/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <SiSuse/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudio/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <SiVmware />
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
    </Row>
  );
}
export default Toolstack;
