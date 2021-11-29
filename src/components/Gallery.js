import React, { useState } from "react";
import NextButton from "../assets/icons/NextButton";
import PreviousButton from "../assets/icons/PreviousButton";
import CloseIcon from "../assets/icons/CloseIcon";

export default function Gallery(props) {
  const images = props.images;
  const [detailImg, setDetailImg] = useState(images[0]);
  const thumbnails = images.map((image) => (
    <img
      src={image.thumbnail}
      alt={image.id}
      id={image.id}
      key={image.id}
      data-index={images.indexOf(image)}
      role="button"
      aria-pressed={image.id === detailImg.id}
      onClick={(e) => setDetailImg(images[e.target.dataset.index])}
      className="product-thumbnail"
    />
  ));
  const isLightbox = props.closable;

  return (
    <div className={isLightbox ? "gallery lightbox" : "gallery"}>
      {isLightbox? <CloseIcon onClick={props.closeLightBox}/> : ''}
      <div>
        <img
          className="big-image"
          src={detailImg.image}
          alt="A pair of Sneakers"
          onClick={!isLightbox ? () => props.openLightBox() : void(0)}
        />
        <div className='gallery-controls'>
          <div
            role="button"
            onClick={() =>
              setDetailImg((image) =>
                images.indexOf(image) === 0
                  ? images[images.length - 1]
                  : images[images.indexOf(image) - 1]
              )
            }
          >
            <PreviousButton stroke="hsl(220, 13%, 13%)" />
          </div>
          <div
            role="button"
            onClick={() =>
              setDetailImg((image) =>
                images.indexOf(image) === images.length - 1
                  ? images[0]
                  : images[images.indexOf(image) + 1]
              )
            }
          >
            <NextButton stroke="hsl(220, 13%, 13%)" />
          </div>
        </div>
      </div>
      {thumbnails}
    </div>
  );
}
