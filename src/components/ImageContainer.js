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
            {props.photos.map(photo => {return <Photo href={photo.links.html} id={photo.id} src={photo.urls.full} title={photo.alt_description}></Photo>})}
        </div>
    );
}

export default ImageContainer;