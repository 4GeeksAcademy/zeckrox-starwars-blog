import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

export const Card = (thing) =>{
  const { store, actions } = useContext(Context);
  const [favorite, setFavorite] = useState(false);
  

	return(<div className="card m-3 p-0" style={{width: "18rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/${thing.type!="people"? thing.type:"characters"}/${thing.id}.jpg`}
   className="card-img-top" 
   style={{
    background: "url(https://starwars-visualguide.com/assets/img/big-placeholder.jpg) no-repeat scroll 0 0",
    minHeight: "31vh",
    backgroundPosition: "center"}}/>
  <div className="card-body">
    <h5 className="card-title">{thing.name}</h5>
    <Link to={`/${thing.type}/${thing.id}`} className="btn btn-primary">Read more...</Link>
      <button onClick={thing.onClick} className={`btn float-end ${thing.isFavorite}`}>
        <i className="fa-solid fa-heart"></i>
      </button>
  </div>
</div>)
}