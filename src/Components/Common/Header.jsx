import React, { useState } from 'react';
import { Navbar, Nav, Button, FormControl } from 'react-bootstrap';
//import '../../assets/scss/Common.scss'; 
//import '../../assets/scss/styles.scss'; 

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
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
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
