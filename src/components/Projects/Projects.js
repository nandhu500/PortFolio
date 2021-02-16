import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ExcelJson from "../../Assets/Projects/Excel-json.png";
import Netflix from "../../Assets/Projects/Netflix.png";
import Moviekart from "../../Assets/Projects/moviekart.jpg";
import Dream11 from "../../Assets/Projects/dream11.png";
import Amazon from "../../Assets/Projects/Amazon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExcelJson}
              isBlog={false}
              title="Excel to json Converter using React And Node"
              description="It is used to convert Excel file uploaded from the client to convert as json using backend server and resultant json is sent back to client"
              link="https://github.com/nandhu500/ExcelToJson-React-Node"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix clone With custom torrent search api"
              description="This is a sample Neflix clone project made using Reactjs and custom torrent api hosted in heroku to provide the download option and deployed in firebase"
              link="https://github.com/nandhu500/Netflix_clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amazon}
              isBlog={false}
              title="Amazon Clone"
              description="This is a sample ecommerce project made using modern design (Material UI) and React js with useState ,useEffect , Redux and hosted in firebase  "
              link="https://github.com/nandhu500/Amazon_Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dream11}
              isBlog={false}
              title="Dream11 Champ"
              description="Dream11 Champ is a prediction mobile app for fantasy sports . It include premium subscription using google pay and live score etc . This mobile app have a total downloads of 50k"
              link="https://apkfab.com/dream11-champ-pro-tips-and-predictions-asiacup/com.dream11.nandhu.dream11champs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Moviekart}
              isBlog={false}
              title="MovieKart"
              description="MovieKart is an android app for downloading movies using torrents"
              link="https://m.apkpure.com/moviekart/com.qdeveloper.nandhu.moviekart"
            />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
