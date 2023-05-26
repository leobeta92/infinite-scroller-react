import React from 'react';
import './App.css';
import ImageContainer from './components/ImageContainer';

let photosArray = [];

window.addEventListener('scroll',scrollIndicator);

function scrollIndicator(e) {

  if (document.body.offsetHeight - (window.innerHeight + window.scrollY) < 1000) {
    console.log('getting close to bottom'); 
    getPhotos();
  }
}

async function getPhotos() {
    const apiKey = 'qT7mffHag2_23vYlzYV1BxiuFTPu2CLz4fd3gum7inQ';
    const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=15`;

    console.log('in parent - calling API')

    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
    }

    // Catch error 
    catch(error) {
    }
}
   

function App() {
  return (
    <div className="App">
      <h1>Infinite Scroller</h1>
      <ImageContainer photos={photosArray} getPhotos={getPhotos}>
      </ImageContainer>
    </div>
  );
}

export default App;
