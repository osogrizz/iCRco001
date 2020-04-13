import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const DRSingleHero = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "AirDR_modernSingle.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Img fluid={data.logo.childImageSharp.fluid} />
}

export default DRSingleHero
