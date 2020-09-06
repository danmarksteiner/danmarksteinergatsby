import './ProjectCarousel.scss';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SingleImageAsset from './SingleImageAsset';

const ProjectCarousel = ({ projectImages }) => {
  return (
    <Carousel fade={true} interval={3000}>
      {projectImages.map(image => (
        <Carousel.Item key={image.id}>
          <SingleImageAsset imageAsset={image.file} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
