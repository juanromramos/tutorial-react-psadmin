"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;
var Nav = require('react-bootstrap').Nav;
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;
var IndexLinkContainer = require('react-router-bootstrap').IndexLinkContainer;
var LinkContainer = require('react-router-bootstrap').LinkContainer;

class NewHeader extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/' className='navbar-brand'>
                            <img width='150px' src='images/pluralsight-logo.png' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer to="/">
                            <NavItem>Home</NavItem>
                        </IndexLinkContainer>
                        <LinkContainer to="/authors">
                            <NavItem>Authors</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/courses">
                            <NavItem>Courses</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <NavItem>About</NavItem>
                        </LinkContainer>
                    </Nav>
                    {/* <Nav pullRight>
                    <NavItem eventKey={1} href="#">Sign In</NavItem>
                    <NavItem eventKey={2} href="#">Sign Up</NavItem>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        );
    };
}

module.exports = NewHeader;
