import React, { useEffect } from 'react';
import './ImageContainer.css';
import Photo from './Photo';

// function scrollHandler(e) {
//     console.log("Scroll Handler:",e);
//   }

function ImageContainer(props) {


    useEffect(() => {
        console.log('In child - asking for photos');
        props.getPhotos();
      });




    return (
        <div className='image-container'>
            {props.photos.map(photo => {return <Photo href={photo.links.html} id={photo.id} src={photo.urls.full} title={photo.alt_description}></Photo>})}

        </div>
    );
}

export default ImageContainer;