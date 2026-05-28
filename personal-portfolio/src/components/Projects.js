import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import placeHolderImage from "../assets/images/placeholder.png"

export const Projects = () => {

  const projects = [
    {
      title: "TBD",
      description: "TBD",
      imgUrl: placeHolderImage,
    },
    {
      title: "TBD",
      description: "TBD",
      imgUrl: placeHolderImage,
    },
    {
      title: "TBD",
      description: "TBD",
      imgUrl: placeHolderImage,
    },
    {
      title: "TBD",
      description: "TBD",
      imgUrl: placeHolderImage,
    },
    {
      title: "TBD",
      description: "TBD",
      imgUrl: placeHolderImage,
    },
    {
      title: "TBD",
      description: "TBD",
      imgUrl: placeHolderImage,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p> With no limits to creativity, every project becomes an opportunity to strengthen my skills, explore new ideas, and continue growing through hands-on learning and development experience.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectsCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>These projects showcase my experience in web development, software engineering, and creative problem-solving. Through building responsive applications and interactive user interfaces, I continue to strengthen my skills in JavaScript, React, frontend development, and modern software design practices.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>I enjoy creating projects that combine functionality, creativity, and clean design. From coding responsive websites to exploring 3D modeling and UI/UX concepts, I am always looking for opportunities to learn new technologies and improve my development skills through hands-on experience.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

