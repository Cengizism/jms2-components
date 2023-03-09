import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar>
            <NavbarBrand href="/">JOZ-JMSv2 Components Library</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
                <NavItem>
                <NavLink href="/query-builder/">Query Builder</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );
}

export default Header;
