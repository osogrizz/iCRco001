import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 100px auto 80px;
  text-align: center;
  max-width: 960px;

  ul {
    li {
      list-style: none;
    }
  }
`

const ProductRegistration = () => {
  return (
    <div>
      <Layout>
        <Container>
          <h1>Product registration</h1>
          <hr />

          <div>
            <div>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </div>

            <div>image</div>
          </div>

          <div>
            <p>
              Most iCRco hardware comes with one-year limited warranty. To
              extend your coverage further, we ask that you register your
              product. iCRco manufacturers the hardware and the software
              applications which makes them integrated systems. By registering,
              you will have access to our one-stop service and support from
              iCRco experts that work in our factory.{" "}
            </p>
            <div>image</div>
            <div>
              <h5>
                iCRco registration contracts provide phone and email access to
                our Technical Services Agents plus the following services:
              </h5>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <p>
              Create an account with iCRco to manage your registered products,
              get helpful information & tips, track your orders and much more.{" "}
            </p>
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default ProductRegistration
