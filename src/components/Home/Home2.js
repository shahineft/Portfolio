import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: "2.6em"}}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I had been in love with Mathematics and programming, knowing that it's a life-long journey,
                            I have at least learnt something, I think… 🤷‍♂️
                            <br/>
                            <br/>I am fluent in classics like
                            <i>
                                <b className="purple"> C, C++, Shell-Script, Java, and Python. </b>
                            </i>
                            <br/>
                            <br/>I have experience in working with database management systems like
                            <i>
                                <b className="purple"> Postgresql, MySQL, and Oracle Database. </b>
                            </i>
                            <br/>
                            <br/>
                            My fields of Interest are building new &nbsp;
                            <i>
                                <b className="purple">Back-end Services and Products </b> and
                                also in areas related to{" "}
                                <b className="purple">
                                    Databank and ABAP runtime environment .
                                </b>
                            </i>
                            <br/>
                            <br/>
                            Whenever possible, I also apply my passion for developing products
                            with <b className="purple">C, and C++</b> as well as
                            <i>
                                <b className="purple">
                                    {" "}
                                    Programs written with the Latest LTS Java APIs and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> Spring Framework, JPA, Hibernate, Rest, JavaFX, and Hibernate.
                                </b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/shahineft"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/shahin-bryan-8ab054279/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
