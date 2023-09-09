import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);																																																																																																																																	
	const params = useParams();
	const [thing, setThing]= useState()
	useEffect(() => {
		
		fetch("https://www.swapi.tech/api/"+params.category+"/"+params.id)
					.then(function(response) {
						if (!response.ok) {
						throw Error(response.statusText)}
						return response.json()
					})
					 .then(function(responseAsJson) {
						setThing(responseAsJson.result);
					})
    }, [])

	if(thing!=undefined)
	return (
		<div className="container">
			<img src={`https://starwars-visualguide.com/assets/img/${params.category!="people"? params.category:"characters"}/${params.id}.jpg`}/>
			<h1 className="display-4 text-white">{thing.properties.name}</h1>
			<Link to="/">
				<span className="btn btn-primary" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
