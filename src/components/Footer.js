import { Container, Col, Row, ListGroup } from "react-bootstrap"
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
    return (
        <div id="footer">
            <Container fluid>
                <Row>
                    <Col md>
                        <img
                            src="/logo.png"
                            height="70"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            id="footerLogo"
                        />
                    </Col>

                    <Col md>
                        <h5 id="sectionTitle">Medios de pago</h5>
                        <ListGroup horizontal>
                            <ListGroup.Item id="list"><FaCcVisa/></ListGroup.Item>
                            <ListGroup.Item id="list"><FaCcMastercard/></ListGroup.Item>
                            <ListGroup.Item id="list"><FaCcAmex/></ListGroup.Item>
                            <ListGroup.Item id="list"><FaCcPaypal/></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md>
                        <h5 id="sectionTitle">Nuestras redes</h5>
                        <ListGroup horizontal>
                            <ListGroup.Item id="list"><AiFillFacebook/></ListGroup.Item>
                            <ListGroup.Item id="list"><AiFillInstagram/></ListGroup.Item>
                            <ListGroup.Item id="list"><AiFillTwitterSquare/></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer