import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AutoCounter from "./Autocounter";
import Head from "./Head";
// import Foot from "./Foot";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Head></Head>
        <h1>AutoCounter</h1>
        <AutoCounter />
        {/* <Foot></Foot> */}
    </>
);