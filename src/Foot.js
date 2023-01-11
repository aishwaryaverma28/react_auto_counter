import React from "react";
// import "./index.css";
export default function Foot(){
    const name = "Aish";
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    return(
        <>
        <div className="conatiner">
        <h2>{name}</h2>,
        <h3>{currDate}</h3>
        <h3>{currTime}</h3>
        </div>
        </>
    )
}