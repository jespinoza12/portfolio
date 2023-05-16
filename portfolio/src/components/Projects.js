import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "PokeInc",
      description: "Social Media Platform for Pokemon TCG Fans",
      imgUrl: projImg1,
      websiteLink: "https://poke-inc.herokuapp.com",
    },
    {
      title: "ReviewIt",
      description: "Movie Review Website",
      imgUrl: projImg2,
      websiteLink: "https://review-it.herokuapp.com",

    },
    {
      title: "LangOwl",
      description: "A Language Learning Website (In Progress)",
      imgUrl: projImg4,
      websiteLink: "https://main.d215kahaxd6ror.amplifyapp.com",
    }
  ];

  const businessProjects = [{
    title: "Stats Website",
    description: "Website for a local business that keeps track of their internal automation statistics",
    imgUrl: projImg3,
  }];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Business</Nav.Link>
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
                              <ProjectCard
                                key={index}
                                {...project}
                                /> 
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          businessProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>PokeInc was created using Nodejs, ReactJs, The Offical Pokemon TCG API, bootstrap, CSS, Heroku</p>
                      <p>ReviewIt was created using NodeJS, ReactJS, TMDB, css, bootstrap, Heroku </p>
                      <p>LangOwl was created using NodeJS, ReactJS, GoogleTranslateAPI, Google Cloud, Cognito, AWS Amplify, AWS Lambda, AWS API Gateway</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
