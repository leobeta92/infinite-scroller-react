// Image Container

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let lastPhoto = '';


  

//   document.getElementsByClassName("image");


// const lastCardObserver = new IntersectionObserver(entries => {
//     const lastCard = entries[0];
//     if (!lastCard.isIntersecting) return;
//     console.log(lastCard);
// });
  

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Script
const count = photosArray.length >= 5 ? 5 : 3;
const apiKey = 'qT7mffHag2_23vYlzYV1BxiuFTPu2CLz4fd3gum7inQ';
// const query = 'pug';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if images have loaded

function imageLoaded() {
    console.log('image loaded');
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true; 
        loader.hidden = true; 
    } 
} 


// Helper Function to set attributes

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    // const cards = document.getElementsByClassName("image");
    // console.log(cards);
}

// Create Elements for links and photos, add to DOM

function displayPhotos() {

    imagesLoaded = 0;
    totalImages = photosArray.length;
    // Run function for each object in photosArray

    photosArray.forEach((photo) => {


    // Create <a> to link to Unsplash
    const item = document.createElement('a');
    // item.setAttribute('href', photo.links.html);
    // item.setAttribute('target', '_blank');
    // console.log(photo.alt_description);
    setAttributes(item, {
        href: photo.links.html,
        target: '_blank',
    });
    // Create <img> for photo
    const img = document.createElement('img');

    setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description
    });
    // Event listener- when each finishes loading
    // // Add intersection observer
    observer.observe(img);
    img.addEventListener('load',imageLoaded);
    img.classList.add('image');


    // Put <img> inside <a>, then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);


    });
}

// Get photos from Unsplash API. photoArrays is an element that can be written over.

async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        lastPhoto = photosArray.reverse()[0].alt_description;
        displayPhotos();
    }

    // Catch error 
    catch(error) {

    }

}

// Check to see if scroll event in Javascript
// window.addEventListener('scroll', () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
//     ready = false;
//     getPhotos();
//   }
// })


// On Load

getPhotos();

// Intersection Observer

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.attributes.title.value === lastPhoto && photosArray.length > 1) {
        console.log('Viewing last photo:',lastPhoto);
        console.log(totalImages);
        // console.log("Bounding Rect",imageContainer.getBoundingClientRect());
        // console.log("Entry Info:",entry.target.attributes.title.value,"Offset Top:",entry.target.offsetTop);
        // console.log("Entry Offset Height:",document.body.offsetHeight,"Window Height:",window.innerHeight);
        // console.log(entry.target.attributes.title.value," is intersecting,",entry.isIntersecting);
        // cards.push(entry);
        // console.log(cards);
        getPhotos();
    }
    })
  });