import React from 'react'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SingleImageAsset from './SingleImageAsset'

const RichTextRenderer = ({ richTextDocument }) => {
  const website_url = 'https://danmarksteiner.com'
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [INLINES.HYPERLINK]: (node) => {
        return (
          <a
            href={node.data.uri}
            target={`${
              node.data.uri.startsWith(website_url) ? '_self' : '_blank'
            }`}
            rel={`${
              node.data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'
            }`}
          >
            {node.content[0].value}
          </a>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <SingleImageAsset imageAsset={node.data.target.fields.file.en_US} />
      ),
    },
  }
  return (
    <article>{documentToReactComponents(richTextDocument, options)}</article>
  )
}
export default RichTextRenderer
