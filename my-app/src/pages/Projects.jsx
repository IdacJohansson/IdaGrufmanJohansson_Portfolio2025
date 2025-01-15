import React from "react";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";

import PatagoniaImage from "../components/PatagoniaImage";
import GenesisImage from "../components/GenesisImage";
import NavigationImage from "../components/NavigationImage";

import "animate.css";

export default function Projects() {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Header title="Experience" />

      <Card className="container-fluid container-size card-style d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
        <div className="title-underline"></div>
        {/* Projects */}
        <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
          Projects
        </Card.Title>
        <Row xs={1} md={2} className="g-4">
          {/* Project 1 */}
          <Col>
              <a
                href="https://idyllic-manatee-74b27d.netlify.app/"
                className="card-link-wrapper"
              >
                <Card className="custom-card">
                  <div className="overlay">
                    <div className="overlay-text">View website!</div>
                  </div>
                  <NavigationImage />
                  <Card.Body>
                    <Card.Title>Responsive navigation</Card.Title>
                    <Card.Text>
                      This project demonstrates a responsive navigation
                      optimized for various screen sizes and devices. Styled
                      with Sass.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>

          {/* Project 2 */}
          <Col>
              <a
                href="https://idyllic-manatee-74b27d.netlify.app/"
                className="card-link-wrapper"
              >
                <Card className="custom-card">
                  <div className="overlay">
                    <div className="overlay-text">View website!</div>
                  </div>
                  <NavigationImage />
                  <Card.Body>
                    <Card.Title>Responsive navigation</Card.Title>
                    <Card.Text>
                      This project demonstrates a responsive navigation
                      optimized for various screen sizes and devices. Styled
                      with Sass.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>

          {/* Project 3 */}
          <Col>
              <a
                href="https://idyllic-manatee-74b27d.netlify.app/"
                className="card-link-wrapper"
              >
                <Card className="custom-card">
                  <div className="overlay">
                    <div className="overlay-text">View website!</div>
                  </div>
                  <NavigationImage />
                  <Card.Body>
                    <Card.Title>Responsive navigation</Card.Title>
                    <Card.Text>
                      This project demonstrates a responsive navigation
                      optimized for various screen sizes and devices. Styled
                      with Sass.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>

          {/* Project 4 */}
          <Col>
              <a
                href="https://idyllic-manatee-74b27d.netlify.app/"
                className="card-link-wrapper"
              >
                <Card className="custom-card mb-5">
                  <div className="overlay">
                    <div className="overlay-text">View website!</div>
                  </div>
                  <NavigationImage />
                  <Card.Body>
                    <Card.Title>Responsive navigation</Card.Title>
                    <Card.Text>
                      This project demonstrates a responsive navigation
                      optimized for various screen sizes and devices. Styled
                      with Sass.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
        </Row>
      </Card>
    </main>
  );
}
