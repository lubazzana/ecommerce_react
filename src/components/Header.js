import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

import CartWidget from './CartWidget'

import { NavLink, Link } from 'react-router-dom'

import {Navbar, Nav, NavDropdown, Container, Col} from 'react-bootstrap'


const Header = () => {
    const { cantidad } = useContext(CartContext)

    return (
        <>
            <Navbar bg="light" variant="light" fixed="top" expand="lg" id="navbar">
                <Container fluid>
                    <Col>
                        <NavLink to={'/'}>
                            <Navbar.Brand id="brand">
                                <img
                                    src="/logo.png"
                                    height="80"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>
                        </NavLink>
                    </Col>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Col>
                            <Nav id="items" className="me-auto">
                                <Nav.Item id="item">
                                    <Nav.Link as={NavLink} to={'/category/recommended'}>Recomendados</Nav.Link>
                                </Nav.Item>

                                <Nav.Item id="item">
                                    <Nav.Link as={NavLink} to={'/category/new'}>Novedades</Nav.Link>
                                </Nav.Item>

                                <NavDropdown title="Temas" id="nav-dropdown item">
                                    <NavDropdown.Item  as={NavLink} to={'/category/young'}>Juvenil</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={NavLink} to={'/category/detective'}>Policial</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item  as={NavLink} to={'/category/essay'}>Ensayo</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={NavLink} to={'/category/fiction'}>Ficción</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={NavLink} to={'/category/kids'}>Infantil</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Col>

                        {cantidad === 0 ||
                            <Col>
                                <Link as={Link} to={'/cart'}>
                                    <CartWidget/>
                                </Link>
                            </Col>
                        }
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header