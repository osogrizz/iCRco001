import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>&larr; Carousel &rarr;</div>
    <Link to="/about/">Go to About page 2</Link>
  </Layout>
)

export default IndexPage