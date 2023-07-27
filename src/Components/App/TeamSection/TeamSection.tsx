import { Container, Row, Col } from "react-bootstrap";
import './TeamSection.css';

export default function TeamSection() {
  return (
    <Container className='p-4' style={{ minHeight: '60vh', margin: '4em 0', alignItems: 'center', display: 'flex' }} fluid={true}>
      <Row style={{ gap: '2em' }}>
        <Col xs={12} lg={5}>
          <Row className="d-flex align-items-center text-start">
            <Col>
              <img className="teamSection_profileImg" src="https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg" alt="" />
            </Col>
            <Col>
              <Row>
                <h1>
                  Ruth Canclini
                </h1>
              </Row>
              <Row className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim assumenda magni sunt explicabo tenetur dolor facere amet voluptatem odio ullam!
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={5}>
          <Row className="d-flex align-items-center text-end">
            <Col>
              <Row>
                <h1>
                  Chris
                </h1>
              </Row>
              <Row className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim assumenda magni sunt explicabo tenetur dolor facere amet voluptatem odio ullam!
              </Row>
            </Col>
            <Col>
              <img className="teamSection_profileImg" src="https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg" alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
