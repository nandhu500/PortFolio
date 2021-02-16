import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/Nandhu.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="SOFTWARE ENGINEER [Emsyne]"
              date="June 2017 - July 2019"
              content={[
                "Experience in Object Oriented programming, mobiledesign patterns and integration with SOAP, RestfulServices",
                "Worked with Code coverage and Monitoring.",
                "Implemented pixel perfect designs with advancedanimations.",
                "Worked with scrum environment with strong teamexperience.",
                "Experience with Code signing and Releasing apps toAppStore, PlayStore.",
              ]}
            />

            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Full Stack JS Developer [Norsia]"
              date="Current"
              content={[
                "Developed RESTful web APIs using Node.js.",
                "Developed high-quality web services using React.JS.",
                "Identify and optimize applications for performanceand scalability issues.",
                "Participated in regular project stand-ups and sprintreviews.",
                "Proficiency with revision control including: Git,Subversion.",
              ]}
            />

            {/* <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="MUTHOOT INSTITUTE OF TECHNOLOGY AND SCIENCE MAHATMA GANDHI UNIVERSITY
                "
              date="2012 - 2017"
              content={[
                "B.Technology in Computer Science andEngineering",
                "CGPA: 7.0",
              ]}
            />
            <Resumecontent
              title="LASALLE COLLEGE MONTREAL"
              date="2019 - 2020"
              content={[
                "AEC in Information Technology Programmer-Analyst",
                "CGPA: 8.0",
              ]}
            />

            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Field Verification Report (FVR) Android MobileApplication`,
                `Approval Cycle Android Mobile Application`,
                "iMuthoot Android Application",
                "Norsia Financial Dashboard",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
