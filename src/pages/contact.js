import React, { useState } from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactWrapper = styled("div")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 80px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    margin: 20px 20px 0;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: transparent;
  }

  h2 {
    margin-top: 40px;
    text-align: center;
  }
`

const InputContainer = styled("div")`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 40px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 80px;

  input {
    width: 250px;
    margin: 10px 10px;
    padding: 10px;
    outline-color: orange;
  }
  textarea {
    padding: 10px;
    outline-color: orange;
  }
  button {
    width: 200px;
    margin: 40px;
    padding: 10px 20px;
    background: #0069aa;
    color: #fff;
    border: none;
    outline: orange;
    cursor: pointer;
    border-radius: 5px;
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

  return (
    <Layout>
      <SEO title="contact" />
      <ContactWrapper>
        <div>
          <div>
            <button onClick={handleForm} name="form">
              General inquiry
            </button>{" "}
            |
            <button onClick={handleQuote} name="quote">
              Request a quote
            </button>
          </div>
          <div style={{ marginTop: "40px" }}>
            <hr />
          </div>
        </div>

        {form ? (
          <div>
            <h2>General Questions</h2>
            <form>
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
                <div>
                  <button onClick={e => e.preventDefault()}>Send</button>
                </div>
              </InputContainer>
            </form>
          </div>
        ) : null}

        {quote && (
          <div>
            <h2>Quote</h2>
            <form>
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
                  {/* <input type="text" name="company" placeholder="Company" /> */}
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
                <div>
                  <button onClick={e => e.preventDefault()}>Send</button>
                </div>
              </InputContainer>
            </form>
          </div>
        )}
      </ContactWrapper>
    </Layout>
  )
}

export default Contact
