import './FeaturedSkills.scss'
import React from 'react'
import SingleImageAsset from './SingleImageAsset'
import Img from 'gatsby-image'

const FeaturedSkills = ({ featuredSkills }) => {
  if (featuredSkills) {
    return (
      <section className="featured-skills">
        <h2>Skills</h2>
        <ul>
          {featuredSkills.nodes.map((featuredSkill) => (
            <li key={featuredSkill.id}>
              <Img
                fluid={{ ...featuredSkill.skillIcon.fluid, aspectRatio: 1 / 1 }}
                alt={featuredSkill.skillName}
              />
              <span>{featuredSkill.skillName}</span>
            </li>
          ))}
        </ul>
      </section>
    )
  } else {
    return <div>Loading</div>
  }
}

export default FeaturedSkills
