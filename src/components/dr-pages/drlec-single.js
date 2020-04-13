import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DRLECSingleHero = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "AirDRLEc.png" }) {
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

export default DRLECSingleHero
