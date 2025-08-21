import React, { useEffect, useState } from "react";

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

import { getWorkExperiences } from "../service/workExperienceService";
import { getDevelopmentExperience } from "../service/developmentExperienceService.js";
import { sortYearDesc } from "../utils/sortYear.js";
import { getEducation } from "../service/educationService.js";
import { getSkills } from "../service/skillsService.js";

export default function experience() {
  const [workExperience, setWorkExperience] = useState(null);
  const [developmentExperience, setDevelopmentExperience] = useState(null);
  const [education, setEducation] = useState(null);
  const [skills, setSkills] = useState(null);

  // const levelProgressMap = {
  //   Advanced: 100,
  //   Intermediate: 70,
  //   Beginner: 40,
  // };

  useEffect(() => {
    const fetchWorkExperiences = async () => {
      try {
        const workData = await getWorkExperiences();
        const sortedWorkData = sortYearDesc(workData);
        setWorkExperience(sortedWorkData);
      } catch (error) {
        console.error("Error fetching work experiences:", error);
      }
    };
    fetchWorkExperiences();
  }, []);

  useEffect(() => {
    const fetchDevelopmentExperience = async () => {
      try {
        const devData = await getDevelopmentExperience();
        const sortedDevData = sortYearDesc(devData);
        setDevelopmentExperience(sortedDevData);
      } catch (error) {
        console.error("Error fetching work experiences:", error);
      }
    };
    fetchDevelopmentExperience();
  }, []);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const eduData = await getEducation();
        const sortedEduData = sortYearDesc(eduData);
        setEducation(sortedEduData);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };
    fetchEducation();
  }, []);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsData = await getSkills();
        setSkills(skillsData.data);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };
    fetchSkills();
  }, []);

  console.log(skills);

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
            <Col md={4} xs={3} className="mb-3">
              <Card.Title className="sub-title">Title</Card.Title>
            </Col>
            <Col md={4} xs={3} className="mb-3">
              <Card.Title className="sub-title">Company</Card.Title>
            </Col>
            <Col md={2} xs={3} className="mb-3">
              <Card.Title className="sub-title">Period</Card.Title>
            </Col>
          </Row>
          {workExperience ? (
            workExperience.map((item) => (
              <Row
                key={item.id}
                className="justify-content-center align-items-center mb-3"
              >
                <Col md={4} xs={3} className="mb-3">
                  <Card.Text className="card-text">{item.title}</Card.Text>
                </Col>
                <Col md={4} xs={3} className="mb-3">
                  <Card.Text className="card-text">{item.company}</Card.Text>
                </Col>
                <Col md={2} xs={3} className="mb-3">
                  <Card.Text className="card-text">{item.period}</Card.Text>
                </Col>
              </Row>
            ))
          ) : (
            <p>...</p>
          )}
          ;
        </Card.Body>
        <div className="title-underline"></div>

        {/* Education */}
        <Card.Body className="col-12 col-md-10">
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Education
          </Card.Title>
          <Row className="justify-content-center align-items-center">
            <Col md={4} xs={3} className="mb-3">
              <Card.Title className="sub-title">Degree:</Card.Title>
            </Col>
            <Col md={4} xs={3} className="mb-3">
              <Card.Title className="sub-title">Institution:</Card.Title>
            </Col>
            {/* <Col md={2} xs={3} className="mb-3">
              <Card.Title className="sub-title">City:</Card.Title>
            </Col> */}
            <Col md={2} xs={3} className="mb-3">
              <Card.Title className="sub-title">Period:</Card.Title>
            </Col>
          </Row>
          {education ? (
            education.map((education) => (
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
                  <Card.Text className="card-text-xs">
                    {education.period}
                  </Card.Text>
                </Col>
              </Row>
            ))
          ) : (
            <p>...</p>
          )}
          ;
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
            <Col md={4} xs={3} className="mb-3">
              <Card.Title className="sub-title">Company:</Card.Title>
            </Col>
            <Col md={2} xs={3} className="mb-3">
              <Card.Title className="sub-title">Period:</Card.Title>
            </Col>
          </Row>
          {developmentExperience ? (
            developmentExperience.map((development) => (
              <Row
                key={development.id}
                className="justify-content-center align-items-center mb-3 "
              >
                <Col md={4} xs={3} className="mb-3">
                  <Card.Text className="card-text-xs">
                    {development.title}
                  </Card.Text>
                </Col>
                <Col md={4} xs={3} className="mb-3">
                  <Card.Text className="card-text-xs">
                    {development.company}
                  </Card.Text>
                </Col>
                <Col md={2} xs={3} className="mb-3">
                  <Card.Text className="card-text-xs">
                    {development.period}
                  </Card.Text>
                </Col>
              </Row>
            ))
          ) : (
            <p>...</p>
          )}
          ;
        </Card.Body>
        <div className="title-underline"></div>

        {/* Technical Skills */}
        <Card.Body className="col-12 col-md-10">
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Technical skills
          </Card.Title>
          {skills ? (
            skills.map((item) => (
              <Row
                key={item.id}
                className="justify-content-center align-items-center mb-3"
              >
                <Col md={3} sm={4} xs={4} className="mb-3">
                  <Card.Text className="card-text">{item.skill_name}</Card.Text>
                </Col>
                <Col md={4} sm={5} xs={5} className="mb-3">
                  <Card.Text className="card-text">
                    {item.category_name}
                  </Card.Text>
                </Col>
                <Col md={5} sm={3} xs={2} className="mb-3">
                  {/* <ProgressBar
                    now={levelProgressMap[skills.skill_level] || 0}
                    style={{ width: "100%" }}
                    variant="info"
                  /> */}
                  <Card.Text className="card-text">
                    {item.subcategory_name}
                  </Card.Text>
                </Col>
              </Row>
            ))
          ) : (
            <p>...</p>
          )}
          ;
        </Card.Body>
      </Card>
    </main>
  );
}
