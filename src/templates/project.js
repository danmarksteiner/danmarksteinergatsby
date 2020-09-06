import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import ProjectSpotlight from '../components/ProjectSpotlight'
import RichTextRenderer from '../components/RichTextRenderer'
import ProjectBanners from '../components/ProjectBanners'
import ProjectCarousel from '../components/ProjectCarousel'
import ContactForm from '../components/ContactForm'
import '../components/App.scss'
import '../components/Project.scss'

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

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
        <main className="App__main">
          <div className="project-page">
            <ProjectSpotlight project={project} />
            <RichTextRenderer richTextDocument={project.projectDescription} />
            {project.addBanners === true && (
              <ProjectBanners project={project} />
            )}
            {project.showProjectBodyImages === true && (
              <ProjectCarousel projectImages={project.projectBodyImages} />
            )}
            <RichTextRenderer richTextDocument={project.footerText.json} />
            <ContactForm />
            <div className="contact-me">
              <button>Contact</button>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($canonicalUrl: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProject(canonicalUrl: { eq: $canonicalUrl }) {
      projectName
      canonicalUrl
      projectMainImage {
        id
        file {
          url
          contentType
        }
        description
      }
      mobileSpotlight {
        id
        file {
          url
          contentType
        }
        description
      }
      agency
      client {
        clientName
      }
      roles
      projectDescription {
        content {
          nodeType
          content {
            nodeType
            marks {
              type
            }
            value
          }
          data {
            target {
              fields {
                file {
                  en_US {
                    url
                    contentType
                  }
                }
              }
            }
          }
        }
      }
      addBanners
      bannerBillboard
      bannerDmpu
      bannerLeaderboard
      bannerMpu
      bannerSkyscraper
      mobileBanners {
        file {
          contentType
          url
        }
      }
      showProjectBodyImages
      projectBodyImages {
        file {
          url
        }
        id
      }
      footerText {
        json
      }
    }
  }
`
