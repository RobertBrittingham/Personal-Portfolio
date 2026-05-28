import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/wolfLogo.png";
import icon1 from "../assets/images/icon1.png"
import icon2 from "../assets/images/icon2.png"
import icon3 from "../assets/images/icon3.png"
import icon4 from "../assets/images/icon4.png";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);

  }, []);

  return (

    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home" className={ activeLink === "home" ? "active navbar-link" : "navbar-link" }
              onClick={() => setActiveLink("home")}> Home
            </Nav.Link>

            <Nav.Link
              href="#skills" className={ activeLink === "skills" ? "active navbar-link" : "navbar-link" }
              onClick={() => setActiveLink("skills")}> Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={ activeLink === "projects"? "active navbar-link" : "navbar-link" }
              onClick={() => setActiveLink("projects")}> Projects </Nav.Link>

            {/* <Nav.Link
              href="#contact" className={ activeLink === "contact" ? "active navbar-link" : "navbar-link"}
              onClick={() => setActiveLink("contact")}> Contact
            </Nav.Link> */}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="RobertBrittingham.github.io"> <img src={icon1} alt="Icon" /> </a>
              <a href="https://www.linkedin.com/in/robert-brittingham-981170330/"> <img src={icon2} alt="Icon" /> </a>
              <a href="#"><img src={icon3} alt="Icon" /> </a>
              <a href="robertbrittingham04@gmail.com"> <img src={icon4} alt="Icon" /> </a>
            </div>
            <a href="#contact">
              <button className="vvd">
                <span>Let's Connect</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};