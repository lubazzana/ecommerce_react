import { Container, Col, Row, ListGroup } from "react-bootstrap"
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
    return (
        <div>
            <Container fluid fixed="bottom">
                <Row>
                    <Col md>
                        <img
                            src="/logo.png"
                            height="70"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Col>

                    <Col md>
                        <h5>Medios de pago</h5>
                        <ListGroup horizontal>
                            <ListGroup.Item><FaCcVisa/></ListGroup.Item>
                            <ListGroup.Item><FaCcMastercard/></ListGroup.Item>
                            <ListGroup.Item><FaCcAmex/></ListGroup.Item>
                            <ListGroup.Item><FaCcPaypal/></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md>
                        <h5>Nuestras redes</h5>
                        <ListGroup horizontal>
                            <ListGroup.Item><AiFillFacebook/></ListGroup.Item>
                            <ListGroup.Item><AiFillInstagram/></ListGroup.Item>
                            <ListGroup.Item><AiFillTwitterSquare/></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer