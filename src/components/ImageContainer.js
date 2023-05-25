import React from 'react';
import './ImageContainer.css';
import Photo from './Photo';

function ImageContainer(props) {

    return (
        <div className='image-container'>
            {props.photos.map(photo => {return <Photo href={photo.links.html} id={photo.id} src={photo.urls.full} title={photo.alt_description}></Photo>})}
        </div>
    );
}

export default ImageContainer;