import React from "react";

function Photo(props) {
    return (
        <div id={props.id}>
        <a href={props.href}>
            {props.children}
        </a>
        </div>
    )
}

export default Photo;