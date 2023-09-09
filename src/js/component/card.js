import React from "react";
import { Link } from "react-router-dom";

export const Card = (thing) => 
	<div className="card m-3 p-0" style={{width: "18rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/${thing.type!="people"? thing.type:"characters"}/${thing.id}.jpg`}
   className="card-img-top" 
   style={{
    background: "url(https://starwars-visualguide.com/assets/img/big-placeholder.jpg) no-repeat scroll 0 0",
    minHeight: "31vh",
    backgroundPosition: "center"}}/>
  <div className="card-body">
    <h5 className="card-title">{thing.name}</h5>
    <Link to={`/${thing.type}/${thing.id}`} className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
;