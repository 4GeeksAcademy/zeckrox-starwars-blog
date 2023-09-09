import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);																																																																																																																																	
	const params = useParams();
	const [things, setThings]= useState()
	useEffect(() => {
		fetch("https://www.swapi.tech/api/"+params.category+"/"+params.id)
					.then(function(response) {
						if (!response.ok) {
						throw Error(response.statusText)}
						return response.json()
					})
					 .then(function(responseAsJson) {
						setThings(responseAsJson.result);
					})
    }, [])


	// IF CATEGORY IS NOT FILMS
	if(params.category!="films")
	if(things!=undefined)
	return (<>
	<div className="container">
		<div className="container d-flex">
			<div className="container-left">
				<img src={`https://starwars-visualguide.com/assets/img/${params.category!="people"? params.category:"characters"}/${params.id}.jpg`}/>
				<h1 className="display-4 text-white">{things.properties.name}</h1>
			</div>
			<div className="container-right">
				<h2>{things.description}</h2>
				<div className="specs-container">
				{Object.keys(things.properties).map((thing)=>{
				if(!thing.includes("url") && !thing.includes("created") && !thing.includes("edited")
				&& !thing.includes("homeworld") && !thing.includes("name")&& !thing.includes("people")
				&& !thing.includes("pilots") && !thing.includes("films"))
					return<div className="single-specs" key={thing}>
					<p className="thing-key">{actions.titleCase(thing.replace("_"," "))}</p><p className="thing-value">{actions.titleCase(things.properties[thing])}</p>
					</div>
					}	
				)}
				</div>
			</div>
		</div>
		<Link to="/">
			<span className="btn btn-primary float-end" href="#" role="button">
				Back home
			</span>
		</Link>
		<div className="w-100" style={{height: "10vh"}}></div>
	</div>
		</>
	);

	// IF CATEGORY IS FILMS
	if(params.category=="films")
	if(things!=undefined)
	return (<>
	<div className="container">
		<div className="container d-flex">
			<div className="container-left">
				<img src={`https://starwars-visualguide.com/assets/img/${params.category}/${params.id}.jpg`}/>
				<h1 className="display-4 text-white">{things.properties.title}</h1>
			</div>
			<div className="container-right">
				<h5>{things.properties.opening_crawl}</h5>
				<div className="specs-container">
				{Object.keys(things.properties).map((thing)=>{
				if(thing.includes("release_date") || thing.includes("director") || thing.includes("producer"))
					return<div className="single-specs" key={thing}>
					<p className="thing-key">{actions.titleCase(thing.replace("_"," "))}</p>
					<p className="thing-value">{actions.titleCase(things.properties[thing])}</p>
					</div>
					}	
				)}
				</div>
			</div>
		</div>
		<Link to="/">
			<span className="btn btn-primary float-end" href="#" role="button">
				Back home
			</span>
		</Link>
		<div className="w-100" style={{height: "10vh"}}></div>
	</div>
		</>)
};
