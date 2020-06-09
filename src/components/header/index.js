import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="header">
			<Link to={"/home"}>Home</Link>
			<Link to={"/about"}>About</Link>
			<Link to={"/dashboard"}>dashboard</Link>
			<Link to={"/login"}>Login</Link>
		</div>
	);
}

export default Header;