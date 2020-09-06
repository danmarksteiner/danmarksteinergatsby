import './SingleImageAsset.scss';
import React from 'react';

const SingleImageAsset = ({ imageAsset }) => {
  if (imageAsset) {
    if (imageAsset.contentType === 'video/mp4') {
      return (
        <video width="980" height="551.25" autoPlay playsInline loop muted>
          <source src={imageAsset.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return (
      <img
        src={imageAsset.url}
        alt={imageAsset.description}
      />
    );
  } else {
    return (
      <span>Loading</span>
    )
  }
};
export default SingleImageAsset;
