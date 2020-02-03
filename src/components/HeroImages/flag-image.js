import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Container = styled("div")`
  width: 230px;
  height: 126px;
  display: flex;
  margin: 0 40px 80px;

  @media (max-width: 800px) {
    width: 120px;
    height: 90px;
    margin: 0 auto 20px;
  }
`

const ImageBackground = styled(BackgroundImage)`
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url("../images/flag.png");
  background-size: cover;
  color: #fff;
  text-align: center;
`

const FlagImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "flag.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container
    // style={{
    //   width: "230px",
    //   height: "126px",
    //   display: "flex",
    //   margin: "0 40px 80px",
    // }}
    >
      <ImageBackground fluid={image.sharp.fluid} />
    </Container>
  )
}

export default FlagImage
