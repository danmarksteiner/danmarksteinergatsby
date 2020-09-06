const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const project = path.resolve('./src/templates/project.js')
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  projectName
                  canonicalUrl
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulProject.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/projects/${post.node.canonicalUrl}/`,
            component: project,
            context: {
              canonicalUrl: post.node.canonicalUrl
            },
          })
        })
      })
    )
  })
}
