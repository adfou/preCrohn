import React, { useState } from 'react';
import { Navbar, Nav, Button, FormControl, Dropdown } from 'react-bootstrap';
import { IconChevronDown } from '@tabler/icons-react'; // Import the arrow down icon from tabler-icons-react
import UserAvatar from './UserAvatar';

const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    return (
        <Navbar bg="white" expand="lg" className="header position-relative">
            <Navbar.Brand href="/">
                <img
                    src="/logo.svg"
                    alt="Logo"
                    className="logo wide"
                />
                <img
                    src="/logo_mobile.png"
                    alt="Logo"
                    className="logo wide mobile"
                />
            </Navbar.Brand>

            {/* Hamburger Menu Toggle */}
            <Navbar.Toggle aria-controls="navbar-content" />

            <Navbar.Collapse id="navbar-content">
                <Nav className="ml-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/profile">GET STARTED</Nav.Link>
                   
                    {/* ABOUT Dropdown */}
                    <Dropdown as={Nav.Item}>
                        <Dropdown.Toggle 
                            as={Nav.Link} 
                            id="about-dropdown"
                            className="d-flex align-items-center"
                        >
                            ABOUT
                            <IconChevronDown 
                                style={{ 
                                    marginLeft: '9px', 
                                    fontSize: '20px', 
                                    color: '#80AD03' 
                                }} 
                            />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/about">About the study</Dropdown.Item>
                            <Dropdown.Item href="/meet-the-team">Meet the Team</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Nav.Link href="/crohns-disease-information">CROHN'S INFO</Nav.Link>
                    <Nav.Link href="/contact">CONTACT</Nav.Link>
                </Nav>
                <div className="search-container ml-auto">
                
                <UserAvatar userName={"userName"} onLogout={{}} />
            </div>
            </Navbar.Collapse>

            {/* Search and User Avatar */}
          
        </Navbar>
    );
};

export default Header;
