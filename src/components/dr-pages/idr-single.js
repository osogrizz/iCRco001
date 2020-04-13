import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IDRLSingle = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "iDR-L-front-profile2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Img fluid={data.image.childImageSharp.fluid} />
}

export default IDRLSingle
