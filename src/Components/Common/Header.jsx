import React, { useState } from 'react';
import { Navbar, Nav, Button, FormControl, Dropdown } from 'react-bootstrap';
import { IconChevronDown } from '@tabler/icons-react'; // Import the arrow down icon from tabler-icons-react

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
                    <Nav.Link href="/about">ABOUT</Nav.Link>

                    {/* GET STARTED Dropdown */}
                    <Dropdown as={Nav.Item}>
                        <Dropdown.Toggle 
                            as={Nav.Link} 
                            id="get-started-dropdown"
                            className="d-flex align-items-center"
                            // Prevents the default link behavior, so the dropdown works
                        >
                            GET STARTED
                            <IconChevronDown 
                                style={{ 
                                    marginLeft: '9px', 
                                    fontSize: '20px', // Increased size for better visibility
                                    color: '#80AD03' // Custom color
                                }} 
                            />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/#">Knowledge & attitudes survey</Dropdown.Item>
                            <Dropdown.Item href="/#">Crohn’s disease information</Dropdown.Item>
                            <Dropdown.Item href="/#">Your personalized Crohn’s risk</Dropdown.Item>
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
                    <Button
                        variant="outline-success"
                        className="search-button"
                        onClick={toggleSearch}
                    >
                        <img
                            src={searchOpen ? "/search.svg" : "/search.svg"}
                            alt={searchOpen ? "Close" : "Search"}
                            className="search-icon"
                        />
                    </Button>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
