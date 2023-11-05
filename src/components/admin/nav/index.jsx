import { Button, Col, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import fptLogo from '../../../assets/images/fpt-logo.png';
import './index.css';
import { Link } from 'react-router-dom';
import useAccountService from '../../../apis/account';
import { useEffect, useState } from 'react';
const NavBar = ({ isSticky }) => {
    const accountService = useAccountService();
    const [user, setUser] = useState({});
    useEffect(() => {
        accountService
            .getMyProfile()
            .then(res => setUser(res));
    },[])
    const logout = () => {
        accountService.logout();
    }
    return (
        <Navbar sticky={isSticky ? "top" : undefined} className='p-3 bg-body-tertiary shadow' style={{ maxHeight: "15vh" }}>
            <Row>
                <Col md={3} sm={12} className='d-flex justify-content-start align-items-center'>
                    <Link to="/">
                        <img style={{ objectFit: "contain" }} className='logo w-25' src={fptLogo} />
                    </Link>

                </Col>
                <Col md={6} sm={12}  >

                </Col>
                <Col md={3} sm={12} className='d-flex justify-content-end align-items-center' >

                    {user && <Link to="/profile"><Button className='btn-warning' style={{ marginRight: '10px' }}>Profile</Button></Link>}
                    {user ? <Button className='btn-danger' onClick={logout}>Logout</Button>
                        : <Link to="/login"><Button className='btn-danger'>Login</Button></Link>
                    }
                </Col>
            </Row>
        </Navbar>


    )
}
export default NavBar