import './FeaturedSkills.scss';
import React from 'react';
import SingleImageAsset from './SingleImageAsset';
const FeaturedSkills = ({ featuredSkills }) => {
  if (featuredSkills) {
    return (
      <section className="featured-skills">
        <h2>Skills</h2>
        <ul>
          {featuredSkills.nodes.map(featuredSkill => (
            <li key={featuredSkill.id}>
        <SingleImageAsset
          imageAsset={featuredSkill.skillIcon.file}
        />
              <span>{featuredSkill.skillName}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default FeaturedSkills;
