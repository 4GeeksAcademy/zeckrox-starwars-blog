import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3" style={{background:"#050505", color:"white"}}>
			<Link to="/" style={{textDecoration:"none"}}>
				<span className="navbar-brand mb-0 h1" style={{color:"white", textDecoration:"none"}}>React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn" style={{background:"#898800", border:"#898800", color:"white"}}>Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
