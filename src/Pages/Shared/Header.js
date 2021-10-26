import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { googleSignOut, user } = useAuth()
    return (
        <Navbar bg="dark" sticky='top' variant="dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='text-white fw-5' to="/home">Genius Car Mechanics</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end manu-bar">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#exparts">Exparts</Nav.Link>
                    <NavLink to='/addservice'>Add Service</NavLink>
                    <NavLink to='/menageservice'>Menage Service</NavLink>
                    {user.email && <Navbar.Text>
                        Signed in as : <a href="#login">{user.displayName}</a>
                    </Navbar.Text>}
                    {!user.email ? <Nav.Link as={Link} to="/login">Log-In</Nav.Link>
                        : <Link to='/login'>
                            <button className='btn btn-danger ms-3' onClick={googleSignOut}>Sign out</button>
                        </Link>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;