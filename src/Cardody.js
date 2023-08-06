import React from "react";

function Cardody(props) {
   
    return (<>


        <div className="card" style={{ width: "25rem", margin: " 2rem 1rem 0 1rem" }}>
            <img src={props.titaleimg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.cardtitle}</h5>
                <p className="card-text">{props.carddis}</p>
                <a href={props.cardbutton} className="btn btn-primary">Read More</a>
            </div>
        </div></>)
} export default Cardody;