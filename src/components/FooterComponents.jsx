import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponents = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Belajar Ngoding.</h3>
            <p className="desc">
              learn to code with us, we are ready to fulfill your knowledge
              needs regarding coding, algorithms, visual design and others.
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 857 726 35118</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">person-email@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to=" ">Home</Link>
            <Link to="kelas">Courses</Link>
            <Link to="testimonial">Testimonials</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratKeten">Terms & Conditions</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">
              Follow for interesting information!
            </h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribes..." />
              <button className="btn btn-danger rounded-end rounded-0">
                Subscribes
              </button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-tiktok"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Wahyuu</span>, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponents;
