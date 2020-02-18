import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AirBlueLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      blue: file(relativePath: { eq: "AirDR_Logo.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Img fluid={data.blue.sharp.fluid} />
}

export default AirBlueLogo