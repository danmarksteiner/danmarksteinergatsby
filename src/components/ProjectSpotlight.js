import './ProjectSpotlight.scss'
import React from 'react'
import Img from 'gatsby-image'

const ProjectSpotlight = ({ project }) => {
  const spotlightImage = () => {
    if (project) {
      if (typeof window !== `undefined`) {
        const mobile = window.matchMedia('(max-width: 767px)')
        if (mobile.matches) {
          return (
            <Img
              fluid={{
                ...project.mobileSpotlight.fluid,
                aspectRatio: 460 / 403,
              }}
              alt={project.projectMainImage.description}
            />
          )
        }
        return (
          <Img
            fluid={{ ...project.projectMainImage.fluid, aspectRatio: 16 / 5 }}
            alt={project.projectMainImage.description}
          />
        )
      }
    } else {
      return <div></div>
    }
  }
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
  )
}

export default ProjectSpotlight
