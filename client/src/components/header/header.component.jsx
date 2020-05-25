import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Header =()=> (
	<Navbar bg='dark' variant='dark' expand='md'>
		<Navbar.Brand>Profanity Check</Navbar.Brand>
		<Navbar.Toggle aria-controls='main-nav' />
		<Navbar.Collapse id='main-nav'>
			<Nav className="mr-auto">
				<Nav.Link as={Link} to='/'>Notes</Nav.Link>
				<Nav.Link as={Link} to='/bannedwords'>Banned Words</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header