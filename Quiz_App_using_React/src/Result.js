import React from "react"
import './App.css';

function Result({ar}){
    let x = 0;
    for (let i = 0; i < ar.length; i++)
    {
        if(ar[i] === 1)
            x++;
    }   
    return(
        <>
            <div className="bdy1">
                Your score: {x} / {ar.length}<br/>
            </div>
        </>
    )
}

export default Result;