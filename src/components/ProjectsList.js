import './ProjectsList.scss'
import React from 'react'
import ProjectThumbnail from './ProjectThumbnail'

const ProjectsList = ({ projects }) => {
  if (projects) {
    return (
      <section className="projects-list">
        <ul>
          {projects.nodes.map((project) => (
            <li key={project.id}>
              <ProjectThumbnail project={project} />
            </li>
          ))}
        </ul>
      </section>
    )
  } else {
    return <section className="projects-list">Loading</section>
  }
}
export default ProjectsList
