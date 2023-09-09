import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let storeKeys = Object.keys(store)

return (
	<nav className="navbar navbar-light mb-3 px-5" style={{background:"none", color:"white"}}>
		<Link to="/" style={{textDecoration:"none"}}>
			<span className="navbar-brand mb-0 h1" style={{color:"white", textDecoration:"none"}}>StarWars Mini-Blog</span>
		</Link>
		<div className="ml-auto">
			
			<div className="btn-group dropstart">
				<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown"
				aria-expanded="false" style={{background:"#898800", border:"#898800", color:"white"}}>
					Dropstart
				</button>
				<ul className="dropdown-menu">
				{store.favorites.map((thing)=>(
					<li className="d-flex" key={thing.category+thing.uid} >
						<Link to={`/${thing.category}/${thing.uid}`} className="dropdown-item" href="#">
							{thing.name || thing.properties.title}
						</Link>
						<span className="d-flex align-items-center me-2"><i onClick={()=>actions.removeFavorite(thing)} className="fa-solid fa-x text-danger"></i></span>
					</li>
				))}
				</ul>
			</div>
			
		</div>
	</nav>
	);
};
