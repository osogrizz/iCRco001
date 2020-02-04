import React from "react"
import styled from "@emotion/styled"

const FormContainer = styled("div")`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 40px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

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
  return (
    <div>
      <form>
        <FormContainer>
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
            <button>Send</button>
          </div>
        </FormContainer>
      </form>
    </div>
  )
}

export default Contact
