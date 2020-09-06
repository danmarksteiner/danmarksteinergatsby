import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import NetlifyForm from '../components/NetlifyForm'
import Header from '../components/Header'
import ProjectsList from '../components/ProjectsList'
import FeaturedSkills from '../components/FeaturedSkills'
import ContactForm from '../components/ContactForm'
import '../components/App.scss'

class RootIndex extends React.Component {
  render() {
    const projects = get(this.props, 'data.allContentfulProject')
    const featuredSkills = get(this.props, 'data.allContentfulFeaturedSkills')
    return (
      <div className="App">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Dan Marksteiner - Developer | Digital Producer"
          />
          <title>Dan Marksteiner - Developer | Digital Producer</title>
        </Helmet>
        <NetlifyForm />
        <main className="App__main">
          <Header />
          <ProjectsList projects={projects} />
          <FeaturedSkills featuredSkills={featuredSkills} />
          <ContactForm />
          <div className="contact-me">
            <button>Contact</button>
          </div>
        </main>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query ProjectsSkills {
    allContentfulProject {
      nodes {
        thumbnailImage {
          file {
            url
          }
        }
        projectName
        thumbnailDescription
        id
        canonicalUrl
      }
    }
    allContentfulFeaturedSkills {
      nodes {
        skillName
        skillIcon {
          file {
            url
          }
        }
        id
      }
    }
  }
`
