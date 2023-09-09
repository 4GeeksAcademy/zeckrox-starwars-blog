import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () =>{
const { store, actions } = useContext(Context);
let storeKeys = Object.keys(store)

return <div className="container-div">
	{storeKeys.map((element)=>{
		if(element!="films" && element!="favorites")
	return <div className="cards-container" key={element}>
		<h1>{element.toUpperCase()}</h1>
		<div className="d-flex row flex-nowrap overflow-auto">
			{store[element].map((thing)=>(
			<Card
				name={thing.name}
				key={element+thing.uid}
				id={thing.uid}
				type={element}
				onClick={()=>{actions.addFavorite(thing, element)}}
				isFavorite={store.favorites.find(elm => elm.name == thing.name)? "btn-danger" : "btn-secondary" }
			/>))}
		</div>
	</div>
	
	if(element=="films")
	return <div className="cards-container" key={element}>
		<h1>{element.toUpperCase()}</h1>
		<div className="d-flex row flex-nowrap overflow-auto">
			{store[element].map((thing)=>(
			<Card
				name={thing.properties.title}
				key={element+thing.uid}
				id={thing.uid}
				type={element}
				onClick={()=>actions.addFavorite(thing, element)}
				isFavorite={store.favorites.find(elm => elm.properties == thing.properties)? "btn-danger" : "btn-secondary" }
			/>))}
		</div>
	</div>
		})
	}
	</div>
}
