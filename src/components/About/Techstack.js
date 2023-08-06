import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    CgCPlusPlus
} from "react-icons/cg";

import {
    DiReact,
    DiPython,
    DiGit,
    DiJava,
    DiMysql,
    DiRedhat,
} from "react-icons/di";

import {
    SiNextdotjs,
    SiPostgresql,
    SiOracle, SiUbuntu, SiPowershell, SiSpringboot, SiJavascript,
} from "react-icons/si";

import {
    TbBrandGolang
} from "react-icons/tb";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <TbBrandGolang/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiUbuntu/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiRedhat/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPowershell/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiOracle/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMysql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJavascript/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot/>
            </Col>
        </Row>
    );
}

export default Techstack;
