import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";

import NavigationImage from "../components/NavigationImage";

import "animate.css";
import SweCandyStoreImage from "../components/SweCandyStoreImage";

import { getProjectText } from "../service/projectService";
import { sortYearDesc } from "../utils/sortYear";

export default function Projects() {
  const [projectText, setProjectText] = useState(null);

  useEffect(() => {
      const fetchProjectText = async () => {
        try {
          const proData = await getProjectText();
          const sortedProData = sortYearDesc(proData);
          setProjectText(sortedProData);
        } catch (error) {
          console.error("Error fetching project-text:", error);
        }
      };
      fetchProjectText();
    }, []);

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
              href="https://stirring-axolotl-09232f.netlify.app/"
              className="card-link-wrapper"
            >
              <Card className="custom-card">
                <div className="overlay">
                  <div className="overlay-text">View website!</div>
                </div>
                <SweCandyStoreImage />
                <Card.Body>
                  <Card.Title>Swedish Candy store</Card.Title>
                  <Card.Text>
                    A webshop-demo built in classic HTML and styled with Sass
                    and Bootstrap. Features include an interactive shopping cart
                    with counter and delete functionality, a save-to-favorites
                    option with remove support, and the ability to print product
                    listings. All implemented using JavaScript.
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
                    This project demonstrates a responsive navigation optimized
                    for various screen sizes and devices. Styled with Sass.
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
                    This project demonstrates a responsive navigation optimized
                    for various screen sizes and devices. Styled with Sass.
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
                    This project demonstrates a responsive navigation optimized
                    for various screen sizes and devices. Styled with Sass.
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
