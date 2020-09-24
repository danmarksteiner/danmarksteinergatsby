import React from 'react'
import Img from 'gatsby-image'

const ProjectThumbnail = ({ project }) => {
  return (
    <a href={`/projects/${project.canonicalUrl}`}>
      <Img
        fluid={{ ...project.thumbnailImage.fluid, aspectRatio: 8 / 5 }}
        alt={project.thumbnailDescription}
      />
      <div className="projects-list-overlay">
        <div>
          <h4>{project.projectName}</h4>
          <span>{project.thumbnailDescription}</span>
        </div>
      </div>
    </a>
  )
}
export default ProjectThumbnail
