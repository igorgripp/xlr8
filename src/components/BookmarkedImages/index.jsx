import React from 'react'
import './style.css';
import '../allImagesTab/style.css';

const BookmarkedImages = (props) => {

  const images = props.images;
  return(
    <>
      {Object.entries(images).map(([key, image]) =>{
        return (
          <div className="imageContainer flex column cursor-default">
            <div className="image flex">
              <img src={image.url} alt={image.title} />
            </div>
            <div className="titleContainer flex">
              <div className="title">
                {image.title.substring(0, 124)} 
                {image.title.length >= 124 ? "..." : ""}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BookmarkedImages;