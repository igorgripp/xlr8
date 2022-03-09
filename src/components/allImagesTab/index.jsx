import React from 'react';
import './style.css';
import unmarkedBookMark from '../../assets/png/bookmark.png';
import markedBookMark from '../../assets/png/bookmark-check.png';

const AllImagesTab = (props) =>{

  const images = props.images;
  const bookmark = props.bookmark;

  return(
    <>
      {images.map(image => {
        return (
          <div className="imageContainer flex column" onClick={props.markAndUmark} data-id={image.image_id}>
            <div className="image flex">
              <img src={image.url} alt={image.title} />
            </div>
            <div className="titleContainer flex">
              <div className="iconBookMark">
                {bookmark[image.image_id] ? <img src={markedBookMark} /> : <img src={unmarkedBookMark} />}
              </div>
              <div className={bookmark[image.image_id] ? "highlight" : "title"}>
                {image.title.substring(0, 124)} 
                {image.title.length >= 124 ? "..." : ""}
              </div>
            </div>
          </div>
        )
      })};
    </>
  );
};

export default AllImagesTab;