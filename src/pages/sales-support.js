import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"

const Container = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 100px auto 80px;
  text-align: center;
  max-width: 960px;

  h1 {
    text-align: center;
    text-transform: uppercase;
    color: #0069aa;
    letter-spacing: 0.7rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1.275rem;
    height: auto;
    letter-spacing: 4.2px;
    color: #0069aa;
    margin: 0;
  }

  .intro-text {
    font-size: 0.875rem;
    letter-spacing: 1px;
    text-align: justify;
    width: 800px;
    margin: 20px auto 80px;
  }

  p {
    font-size: 0.875rem;
    letter-spacing: 1px;
    text-align: center;
  }

  .contacts {
    display: flex;
    justify-content: space-around;

    div {
      width: 50%;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 80px auto;

    label {
      width: 120px;
      text-align: left;
    }

    input {
      padding: 10px;
      margin: 10px;
      width: 380px;
    }
    textarea {
      padding: 10px;
      margin: 10px;
    }

    button {
      width: 200px;
      margin: 40px auto;
      padding: 10px 20px;
      background: #0069aa;
      color: #fff;
      border: none;
      outline: orange;
      cursor: pointer;
      border-radius: 5px;
    }
  }
  .input-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`

const SalesSupport = () => {
  return (
    <Layout>
      <Container>
        <h1>sales support</h1>
        <p className="intro-text">
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

        <div className="contacts">
          <div>
            <h3>International Sales</h3>
            <p>Europe | Asia | Africa | Austrailia | Latin America</p>
          </div>
          <div>
            <h3>866.907.7740</h3>
            <p>Technical Support | Direct Line</p>
          </div>
        </div>

        <div className="contacts">
          <div>
            <h3>Domestic Sales</h3>
            <p>United States</p>
          </div>
          <div>
            <h3>310.921.9559</h3>
            <p>Sales Support | Direct Line</p>
          </div>
        </div>
        <form action="">
          <div className="input-container">
            <label htmlFor="name">Name*</label>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email*</label>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" placeholder="Phone" />
          </div>
          <div className="input-container">
            <label htmlFor="company">Company*</label>
            <input type="text" name="company" placeholder="Company" required />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Submit</button>
        </form>
      </Container>
    </Layout>
  )
}

export default SalesSupport
