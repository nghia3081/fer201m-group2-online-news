import { Button, ButtonGroup, Col, Container, Form, NavDropdown, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import fptLogo from '../../../assets/images/fpt-logo.png';
import './index.css';
import { Link, NavLink } from 'react-router-dom';
import { House, Search } from 'react-bootstrap-icons';
const NavBar = ({ isSticky }) => {
    const user = JSON.parse(localStorage.getItem("user"))
    const logout = () => {
        localStorage.removeItem("user")
        window.location.href = "/";
    }
    return (
        <Navbar sticky={isSticky ? "top" : undefined} className='p-3 mb-3 bg-body-tertiary shadow' style={{ maxHeight: "15vh" }}>
            <Row>
                <Col md={3} sm={12} className='d-flex justify-content-start align-items-center'>
                    <Link to="/">
                        <img style={{ objectFit: "contain" }} className='logo w-25' src={fptLogo} />
                    </Link>

                </Col>
                <Col md={6} sm={12}  >
                    <Row >
                        <Col md={12}>
                            <Form.Control
                                className='d-inline-block'
                                type="search"
                                placeholder='Enter something to find a post'
                            />
                        </Col>
                        {/* <Col md={1}>
                            <Button><Search></Search></Button>
                        </Col> */}


                    </Row>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
                            <Container>
                                <Navbar.Brand as={Link} to="/">

                                    <House></House>


                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav.Link as={Link} to={`/1`}>Category 1</Nav.Link>
                                    <Nav.Link as={Link} to={`/2`}>Category 2</Nav.Link>
                                    <Nav.Link as={Link} to={`/3`}>Category 3</Nav.Link>
                                    <Nav.Link as={Link} to={`/3`}>Category 4</Nav.Link>
                                    <NavDropdown title="More category" id="collapsible-nav-dropdown">
                                        {
                                            [...Array(10).keys()].map((value, i) => {
                                                return (<NavDropdown.ItemText as={Link} to={`/${i}`}>Category {i}</NavDropdown.ItemText>)
                                            })
                                        }
                                    </NavDropdown>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Row>
                </Col>
                <Col md={3} sm={12} className='d-flex justify-content-end align-items-center' >

                    {user && <Link to="/profile"><Button className='btn-warning'>Profile</Button></Link>}
                    {user ? <Button className='btn-danger' onClick={logout}>Logout</Button>
                        : <Link to="/login"><Button className='btn-danger'>Login</Button></Link>
                    }
                </Col>
            </Row>
        </Navbar>


    )
}
export default NavBar