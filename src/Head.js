import React from "react";
 export default function Head (){
    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = "";
    const cssStyle = { };
    if(curDate >= 1 && curDate < 12)
    {
        greeting = "Good Morning";
        cssStyle.color = 'green';
    }
    else if (curDate >= 12 && curDate < 19)
    {
        greeting = "Good Afternoon";
        cssStyle.color = '#ffba08';
    }
    else
    {
        greeting = "Good Night";
        cssStyle.color = 'black';
    }

    return(
        <>
        <h1 className="head_title">Hello Sir,<span style={cssStyle}> {greeting} </span></h1>,
        </>
    )
 }