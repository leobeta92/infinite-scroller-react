import React, { useState } from 'react';
import './ImageContainer.css';
import Photo from './Photo';

function ImageContainer(props) {
    // console.log("Props ID:",props.photos[0].id);
    // console.log("Props src:",props.photos[0].urls.full);
    // console.log("Props href:",props.photos[0].links.html);
    // console.log("Props alt:",props.photos[0].alt_description);

 
    return (
        <div className='image-container'>
            <img width="600px" src={props.photos[0].urls.full}>
            </img>
            {props.photos.map((photo) => {
            <Photo >
                <img id={photo.id} href={photo.urls.full}/>
            </Photo>})}
        </div>
    )
}

export default ImageContainer;