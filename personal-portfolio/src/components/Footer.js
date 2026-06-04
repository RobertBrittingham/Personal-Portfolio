import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/wolfLogo.png";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon4 from "../assets/images/icon4.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/RobertBrittingham"> <img src={icon1} alt="Icon" target="_blank"/> </a>
              <a href="https://www.linkedin.com/in/robert-brittingham-981170330/"> <img src={icon2} alt="Icon" target="_blank" /> </a>
              <a href="mailto:robertbrittingham04@gmail.com"> <img src={icon4} alt="Icon" /> </a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}