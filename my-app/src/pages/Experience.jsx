import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";

import "animate.css";

import ProgressBar from "react-bootstrap/ProgressBar";
import Header from "../components/Header";

import PatagoniaImage from "../components/PatagoniaImage";
import GenesisImage from "../components/GenesisImage";
import NavigationImage from "../components/NavigationImage";

import workExperience from "../data/workExperience.json";
import developmentExperience from "../data/developmentExperience.json";
import technicalSkills from "../data/technicalSkills.json";
import education from "../data/education.json";

export default function experience() {
  
  const levelProgressMap = {
    Advanced: 100,
    Intermediate: 70,
    Beginner: 40,
  };

  return (
    <main className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Header title="Experience" />

      <Card className="container-fluid container-size card-style d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
        <Card.Body className="col-12 col-md-10">
          {/* Work experience */}
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Work experience
          </Card.Title>
          <Row className="justify-content-center align-items-center mb-1">
            <Col md={4} sm={4} xs={4} className="mb-3">
              <Card.Title className="sub-title">Title</Card.Title>
            </Col>
            <Col md={4} sm={5} xs={5} className="mb-3">
              <Card.Title className="sub-title">Company</Card.Title>
            </Col>
            <Col md={3} sm={3} xs={3} className="mb-3">
              <Card.Title className="sub-title">Period</Card.Title>
            </Col>
          </Row>
          {workExperience.map((job) => (
            <Row
              key={job.id}
              className="justify-content-center align-items-center mb-3"
            >
              <Col md={4} sm={4} xs={4} className="mb-3">
                <Card.Text className="card-text">{job.title}</Card.Text>
              </Col>
              <Col md={4} sm={5} xs={5} className="mb-3">
                <Card.Text className="card-text">{job.company}</Card.Text>
              </Col>
              <Col md={3} sm={3} xs={3} className="mb-3">
                <Card.Text className="card-text">{job.period}</Card.Text>
              </Col>
            </Row>
          ))}
        </Card.Body>
        <div className="title-underline"></div>

        {/* Development experience */}
        <Card.Body className="col-12 col-md-10">
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Development experience
          </Card.Title>
          <Row className="justify-content-center align-items-center ">
            <Col md={4} xs={3} className="mb-3">
              <Card.Title className="sub-title">Title:</Card.Title>
            </Col>
            <Col md={4} xs={5} className="mb-3">
              <Card.Title className="sub-title">Company:</Card.Title>
            </Col>
            <Col md={3} xs={4} className="mb-3">
              <Card.Title className="sub-title">Period:</Card.Title>
            </Col>
          </Row>

          {developmentExperience.map((development) => (
            <Row
              key={development.id}
              className="justify-content-center align-items-center mb-3 "
            >
              <Col md={4} xs={3} className="mb-3">
                <Card.Text className="card-text-xs">
                  {development.title}
                </Card.Text>
              </Col>
              <Col md={4} xs={5} className="mb-3">
                <Card.Text className="card-text-xs">
                  {development.company}
                </Card.Text>
              </Col>
              <Col md={3} xs={4} className="mb-3">
                <Card.Text className="card-text-xs">
                  {development.period}
                </Card.Text>
              </Col>
            </Row>
          ))}
        </Card.Body>
        <div className="title-underline"></div>

        {/* Technical Skills */}
        <Card.Body className="col-12 col-md-10">
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Technical skills
          </Card.Title>
          {technicalSkills.map((skills) => (
            <Row
              key={skills.id}
              className="justify-content-center align-items-center mb-3"
            >
              <Col md={3} sm={4} xs={4} className="mb-3">
                <Card.Text className="card-text">{skills.name}</Card.Text>
              </Col>
              <Col md={4} sm={5} xs={5} className="mb-3">
                <Card.Text className="card-text">{skills.category}</Card.Text>
              </Col>
              <Col md={5} sm={3} xs={2} className="mb-3">
                <ProgressBar
                  now={levelProgressMap[skills.skill_level] || 0}
                  style={{ width: "100%" }}
                  variant="info"
                />
              </Col>
            </Row>
          ))}
        </Card.Body>

        <div className="title-underline"></div>

        {/* Education */}
        <Card.Body className="col-12 col-md-10">
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Education
          </Card.Title>
          <Row className="justify-content-center align-items-center ">
            <Col md={4} xs={3} className="mb-3">
              <Card.Title className="sub-title">Degree:</Card.Title>
            </Col>
            <Col md={4} xs={3} className="mb-3">
              <Card.Title className="sub-title">Institution:</Card.Title>
            </Col>
            <Col md={2} xs={3} className="mb-3">
              <Card.Title className="sub-title">City:</Card.Title>
            </Col>
            <Col md={2} xs={3} className="mb-3">
              <Card.Title className="sub-title">Period:</Card.Title>
            </Col>
          </Row>

          {education.map((education) => (
            <Row className="justify-content-center align-items-center mb-3 ">
              <Col md={4} xs={3} className="mb-3">
                <Card.Text className="card-text-xs">
                  {education.degree}
                </Card.Text>
              </Col>
              <Col md={4} xs={3} className="mb-3">
                <Card.Text className="card-text-xs">
                  {education.institution}
                </Card.Text>
              </Col>
              <Col md={2} xs={3} className="mb-3">
                <Card.Text className="card-text-xs">{education.city}</Card.Text>
              </Col>
              <Col md={2} xs={3} className="mb-3">
                <Card.Text className="card-text-xs">
                  {education.period}
                </Card.Text>
              </Col>
            </Row>
          ))}
        </Card.Body>
        <div className="title-underline"></div>
        {/* Projects */}
        <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
          Projects
        </Card.Title>
        <CardGroup className="mb-5">
          {/* Project 1 */}
          <Card>
            <NavigationImage />
            <Card.Body>
              <Card.Title>Responsive navigation</Card.Title>
              <Card.Text>
                This project demonstrates a responsive navigation optimized for
                various screen sizes and devices. Styled with Sass.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link
                className="icon-link icon-link-hover mt-2"
                href="https://jazzy-figolla-b35532.netlify.app/"
              >
                View website!
                <i className="bi bi-arrow-right"></i>
              </Card.Link>
            </Card.Footer>
          </Card>
          {/* Project 2 */}
          <Card>
            <GenesisImage />
            <Card.Body>
              <Card.Title>Cross-browser compability</Card.Title>
              <Card.Text>
                This is a cross-browser compability project providing a seamless
                experience to users accessing websites from various browsers,
                including Chrome, Firefox, Safari, and Edge. Styled with Sass.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link
                className="icon-link icon-link-hover mt-2"
                href="https://genesis-tfw.netlify.app/"
              >
                View website!
                <i className="bi bi-arrow-right"></i>
              </Card.Link>
            </Card.Footer>
          </Card>
          {/* Project 3 */}
          <Card>
            <PatagoniaImage />
            <Card.Body>
              <Card.Title>Responsive design</Card.Title>
              <Card.Text>
                This project demonstrates a responsive design optimized for
                various screen sizes and devices. Styled with Sass.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link
                className="icon-link icon-link-hover mt-2"
                href="https://idyllic-manatee-74b27d.netlify.app/"
              >
                View website!
                <i className="bi bi-arrow-right"></i>
              </Card.Link>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Card>
    </main>
  );
}
