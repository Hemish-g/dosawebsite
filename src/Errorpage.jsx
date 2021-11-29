import React from "react";
import Test from "./Test"
function Errorpage()
{
    return(
        <>
        <Test/>
        <br/><br/><br/><br/><br/>
        <h1 className="display-1 text-danger">Error: 404. Page Not Foud</h1>
        </>
    );
}

export default Errorpage;