import React, { useState } from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactWrapper = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 40px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  /* button {
    margin: 20px 20px 0;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: transparent;
  } */

  h2 {
    margin-top: 20px;
    text-align: center;
  }
  button {
    width: 200px;
    margin: 40px 40px 0;
    padding: 10px 20px;
    background: #0069aa;
    color: #fff;
    border: none;
    outline: orange;
    cursor: pointer;
    border-radius: 5px;
  }

  form {
    background: #f4f5f5;
    padding: 20px 60px;
    border-radius: 8px;
  }
`

const InputContainer = styled("div")`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  input {
    width: 250px;
    margin: 10px 10px;
    padding: 10px;
    outline-color: orange;
    border: 1px solid #888;
  }
  textarea {
    padding: 10px;
    outline-color: orange;
    max-width: 100%;
    margin: 15px 10px 0;
  }

  select {
    width: 250px;
    height: 45px;
    margin: 10px 10px;
    padding: 10px;
    outline-color: orange;
    border: 1px solid #888;
  }

  .btn-container {
    display: flex;
    justify-content: center;

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

  p {
    font-size: 0.95rem;
    font-style: italic;
  }
`

const Contact = () => {
  const [form, setForm] = useState(false)
  const [quote, setQuote] = useState(false)

  const handleForm = e => {
    setQuote(false)
    setForm(!form)
    console.log("form", form)
  }
  const handleQuote = e => {
    setForm(false)
    setQuote(!quote)
    console.log("quote", quote)
  }

  const handleSubmit = e => {
    // e.preventDefault()
  }

  return (
    <Layout>
      <SEO title="contact" />
      <ContactWrapper>
        <div>
          <div>
            <button onClick={handleForm} name="form">
              General Inquiry
            </button>
            <button onClick={handleQuote} name="quote">
              Request a Quote
            </button>
          </div>
          <div style={{ marginTop: "25px" }}>
            <hr />
          </div>
        </div>

        {form ? (
          <div>
            <form>
              <h2>General Questions</h2>
              <InputContainer>
                <div>
                  <input
                    type="text"
                    name="fName"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    name="lName"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input type="tel" name="phone" placeholder="Phone" required />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="questions"
                    id=""
                    cols="54"
                    rows="10"
                    placeholder="Questions"
                    required
                  ></textarea>
                </div>
                <div className="btn-container">
                  <button onClick={handleSubmit}>Send</button>
                </div>
                <p>
                  *We take your privacy seriously and will not sell your
                  information to anyone.
                </p>
              </InputContainer>
            </form>
          </div>
        ) : null}

        {quote && (
          <div>
            <form>
              <h2>Request a Quote</h2>
              <InputContainer>
                <div>
                  <input type="text" name="fName" placeholder="First Name" />
                  <input type="text" name="lName" placeholder="Last Name" />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Email" />
                  <input type="tel" name="phone" placeholder="Phone" />
                </div>
                <div>
                  <input type="text" name="company" placeholder="Company" />

                  <select name="" id="">
                    <option value="">Choose your product</option>
                    <option value="">AirDR</option>
                    <option value="">AirDR c</option>
                    <option value="">AirDR LE</option>
                    <option value="">AirDR LE c</option>
                    <option value="">{`AirDR-P (Cesium)`}</option>
                    <option value="">{`AirDR-P c (Cesium)`}</option>
                    <option value="">{`AirDR-P (Gadox)`}</option>
                    <option value="">{`AirDR-P c (Gadox)`}</option>
                    <option value="">AirDR-M</option>
                    <option value="">iCR 3600LF</option>
                    <option value="">iCR Chrome</option>
                    <option value="">iCR Chrome M</option>
                    <option value="">Claris XT</option>
                    <option value="">Claris V</option>
                    <option value="">Crystal Imager</option>
                    <option value="">Crystal-M Imager</option>
                    <option value="">Clarity PACS</option>
                    <option value="">XC</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="questions"
                    id=""
                    cols="54"
                    rows="10"
                    placeholder="Questions"
                  ></textarea>
                </div>
                <div className="btn-container">
                  <button onClick={handleSubmit}>Send</button>
                </div>
                <p>
                  *We take your privacy seriously and will not sell your
                  information to anyone.
                </p>
              </InputContainer>
            </form>
          </div>
        )}
      </ContactWrapper>
    </Layout>
  )
}

export default Contact
