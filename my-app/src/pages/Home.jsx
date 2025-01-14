import React from "react";

import Card from "react-bootstrap/Card";
import Header from "../components/Header";
import ImageIda from "../components/ImageIda";

function home() {
  return (
    <div>
      <main className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-start">
            <ImageIda />
          </div>
          <Header titleLarge="Hi" title="I'm Ida" />
        </div>

        {/* Card */}
        <Card className="container container-size card-style mt-5 mb-5">
          <Card.Body>
            <div className="row">
              {/* First column */}
              <div className="col-md-6 d-flex flex-column">
                <Card.Title className="title-previous-experience">
                  About me
                </Card.Title>
                <Card.Text>
                  My name is Ida Johansson, I´m 34 years old, and I live in
                  Kungsängen, Stockholm. I´m originally from a small village in
                  northern Västmanland called Skinnskatteberg, but I have been
                  living in Stockholm since 2013.
                </Card.Text>
                <Card.Text>
                  I enjoy being outdoors, exercising, and finding fun activities
                  to do, such as going to concerts and socializing with friends.
                </Card.Text>
                <Card.Text>
                  I would describe myself as a creative and solution-oriented
                  person; I enjoy thinking outside the box. I am detail-oriented
                  and good at planning.
                </Card.Text>
                <Card.Text>
                  The majority of my career has been in project management
                  within the festival and entertainment industry. Working for a
                  smaller company, I had a wide range of responsibilities, with
                  my main focus being project planning, concept development,
                  area planning, and some personnel management. I also have a
                  background in graphic design, where I’ve created layouts for a
                  variety of branding projects.
                </Card.Text>
              </div>
              {/* Second column */}
              <div className="col-md-6 d-flex flex-column">
                <Card.Title className="title-previous-experience">
                  Today
                </Card.Title>
                <Card.Text>
                  In 2022, I made the decision to pursue a new career path. With
                  a longstanding interest in both IT and design, I chose to
                  specialize in backend development. In May 2024, I completed my
                  studies at Nackademin and graduated as a Java developer.
                </Card.Text>
                <Card.Text>
                  During my studies at Nackademin, I completed an 8-month
                  internship (LIA) at Spendrups Bryggeri AB, where I worked on a
                  full-stack application as my final project. The backend was
                  built using Node.js, and the frontend was developed with React
                  Native.
                </Card.Text>
                <Card.Text>
                  I’m eager to learn new things to expand my knowledge. I enjoy
                  working with both backend and frontend, and in my work, I
                  value clear structure, organization and effective
                  communication.
                </Card.Text>
                <Card.Text>
                  Given the rapid pace of IT development, I believe it’s even
                  more crucial not to limit oneself. I consider myself
                  adaptable, and my journey in the industry is still in its
                  early stages. My background as a project manager has
                  accustomed me to working in teams, an environment I’m
                  comfortable with and enjoy.
                </Card.Text>
                <Card.Link
                  className="icon-link icon-link-hover mt-2"
                  href="/experience"
                >
                  Learn more about my experiences here
                  <i className="bi bi-arrow-right"></i>
                </Card.Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </main>
    </div>
  );
}

export default home;
