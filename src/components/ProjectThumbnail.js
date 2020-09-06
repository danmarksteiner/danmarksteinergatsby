import React from 'react';
import SingleImageAsset from './SingleImageAsset';

const ProjectThumbnail = ({project}) => {
  return (
    <a href={`/projects/${project.canonicalUrl}`}>
        <SingleImageAsset
            imageAsset={project.thumbnailImage.file}
        />
      <div className="projects-list-overlay">
        <div>
          <h4>{project.projectName}</h4>
          <span>{project.thumbnailDescription}</span>
        </div>
      </div>
    </a>
  );
};
export default ProjectThumbnail;
