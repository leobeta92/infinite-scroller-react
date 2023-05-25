import React from "react";

function Photo(props) {
    return (
        <div id={props.id}>
        <a href={props.href} target="_blank" rel="noreferrer">
            <img src={props.src} alt={props.alt_description} title={props.alt_description}></img>
        </a>
        </div>
    )
}

export default Photo;