import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"

const Container = styled("div")`
  margin-top: 80px;

  text-align: center;
`

const SalesSupport = () => {
  return (
    <Layout>
      <Container>
        <h1>sales support</h1>
        <p>
          iCRco. Inc. is a US-based, global medical imaging equipment
          manufacturer with business in over 90 countries. From our headquarters
          in Goleta, California, we work and coordinate with our dealers and
          distributors to provide you the best service. Our sales team is
          composed of knowledgeable and experienced veterans in the medical
          imaging industry. With territory managers positioned in the United
          States, Asia Pacific, India, Europe, and Latin America, we can assist
          you no matter where you are. All iCRco sales managers stand ready to
          answer your questions and address the needs of your business and
          practice.
        </p>
        <div>
          <div>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <h2></h2>
            <p></p>
          </div>
        </div>

        <div>
          <div>
            <h2></h2>
            <p></p>
          </div>
          <div>
            <h2></h2>
            <p></p>
          </div>
        </div>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
      </Container>
    </Layout>
  )
}

export default SalesSupport
