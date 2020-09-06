import './ProjectSpotlight.scss';
import React from 'react';
import SingleImageAsset from './SingleImageAsset';

const ProjectSpotlight = ({ project }) => {

    const spotlightImage = () => {
      if (typeof window !== `undefined`) {
      const mobile = window.matchMedia('(max-width: 767px)');
      if (mobile.matches) {
        return (
          <SingleImageAsset
            imageAsset={project.mobileSpotlight.file}
          />
        );
      }
      return (
        <SingleImageAsset
          imageAsset={project.projectMainImage.file}
        />
      );
      }
    };
  return (
    <div className="spotlight">
      {spotlightImage()}
      <div className="spotlight-overlay"></div>
      <div className="spotlight-text">
        <h1>{project.projectName}</h1>
        <h2>Agency - {project.agency}</h2>
        <h2>Client - {project.client.clientName}</h2>
        <h3>Roles - {project.roles}</h3>
      </div>
    </div>
  );
};

export default ProjectSpotlight;
