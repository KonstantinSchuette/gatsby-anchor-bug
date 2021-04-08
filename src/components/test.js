import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { SRLWrapper } from "simple-react-lightbox"

const Test = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(quality: 90, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  return (
    <SRLWrapper
      options={{
        settings: {
          lightboxTransitionSpeed: 0.2,
          slideTransitionSpeed: 0.2,
          usingPreact: true,
        },
        buttons: { showDownloadButton: false },
        caption: {
          showCaption: false,
        },
      }}
    >
      {data.allFile.edges.map(edge => {
        return (
          <a href={edge.node.childImageSharp.gatsbyImageData.src}>
            <GatsbyImage
              image={edge.node.childImageSharp.gatsbyImageData}
              alt=""
            />
          </a>
        )
      })}
    </SRLWrapper>
  )
}

export default Test
