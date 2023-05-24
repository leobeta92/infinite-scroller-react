import './App.css';
import ImageContainer from './components/ImageContainer';

const apiKey = 'qT7mffHag2_23vYlzYV1BxiuFTPu2CLz4fd3gum7inQ';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=5`;

let photosArray = [];

    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
    }

    // Catch error 
    catch(error) {

    }

function App() {
  return (
    <div className="App">
      <h1>Infinite Scroller</h1>
      <ImageContainer photos={photosArray}>
      </ImageContainer>
    </div>
  );
}

export default App;
