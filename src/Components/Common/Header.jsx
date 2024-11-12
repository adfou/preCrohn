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
        <Navbar bg="white" variant="dark" expand="lg" className="header">
            <Navbar.Brand href="/">
                <img
                    src="/logo.svg"
                    alt="Logo"
                    className="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">HOME</Nav.Link>

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

                    {/* GET STARTED Dropdown */}
                    <Dropdown as={Nav.Item}>
                        <Dropdown.Toggle 
                            as={Nav.Link} 
                            id="get-started-dropdown"
                            className="d-flex align-items-center"
                        >
                            GET STARTED
                            <IconChevronDown 
                                style={{ 
                                    marginLeft: '9px', 
                                    fontSize: '20px', 
                                    color: '#80AD03' 
                                }} 
                            />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/disease-information">Crohn’s disease information</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Nav.Link href="/contact">CONTACT</Nav.Link>
                </Nav>

                {/* Search Button and Input */}
                <div className="search-container ml-auto">
                    <div className={`search-input-container ${searchOpen ? 'active' : ''}`}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            className="search-input"
                        />
                    </div>
                
                    <UserAvatar userName={"userName"} onLogout={{}} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
