import './App.css';
import "react-image-lightbox/style.css";
import { useState } from 'react'
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";

import items from './images.json';

const images = items.map((item) => {
  return {
    src: `/images/${item.File}`,
    width: item.Width,
    height: item.Height,
  }
})

function App() {
    const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <>
      <header>
        Please email <a href="mailto:rlauer4564@aol.com">rlauer4564@aol.com</a> to specify which item(s) you are interested in.
      </header>
      <div className="App">
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
          magin={5}
        />
        {!!currentImage && (
        <Lightbox
          enableZoom={false}
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />)}
      </div>
    </>
  );
}

export default App;
