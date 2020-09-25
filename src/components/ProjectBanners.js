import './ProjectBanners.scss'
import React from 'react'
import useDeviceDetect from '../utils/useDeviceDetect'
import SingleImageAsset from './SingleImageAsset'
import Iframe from 'react-iframe'

const ProjectBanners = ({ project }) => {
  const canonicalUrl = project.canonicalUrl
  const { isMobile } = useDeviceDetect()

  const responsiveBanner = () => {
    if (isMobile) {
      return (
        <div className="project-page-banners">
          <SingleImageAsset imageAsset={project.mobileBanners.file} />
        </div>
      )
    }

    return (
      <div className="project-page-banners">
        {project.bannerDmpu === true && (
          <Iframe
            url={`https://danmarksteiner.com/banners/${canonicalUrl}/300x600/index.html`}
            width="300px"
            height="600px"
            className="project-banner-dmpu"
            display="initial"
            position="relative"
            scrolling="no"
          />
        )}
        {project.bannerMpu === true && (
          <Iframe
            url={`https://danmarksteiner.com/banners/${canonicalUrl}/300x250/index.html`}
            width="300px"
            height="250px"
            className="project-banner-mpu"
            display="initial"
            position="relative"
            scrolling="no"
          />
        )}
        {project.bannerSkyscraper === true && (
          <Iframe
            url={`https://danmarksteiner.com/banners/${canonicalUrl}/160x600/index.html`}
            width="160px"
            height="600px"
            className="project-banner-skyscraper"
            display="initial"
            position="relative"
            scrolling="no"
          />
        )}
        {project.bannerLeaderboard === true && (
          <Iframe
            url={`https://danmarksteiner.com/banners/${canonicalUrl}/728x90/index.html`}
            width="728px"
            height="90px"
            className="project-banner-leaderboard"
            display="initial"
            position="relative"
            scrolling="no"
          />
        )}
        {project.bannerBillboard === true && (
          <Iframe
            url={`https://danmarksteiner.com/banners/${canonicalUrl}/970x250/index.html`}
            width="970px"
            height="250px"
            className="project-banner-billboard"
            display="initial"
            position="relative"
            scrolling="no"
          />
        )}
        <p>
          Please note banners will not display correctly if you running an
          adblock plugin in your browser. Please disable on this page to view.
        </p>
      </div>
    )
  }
  return <div>{responsiveBanner()}</div>
}
export default ProjectBanners
