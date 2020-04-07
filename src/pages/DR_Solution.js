import React, { useState } from "react"
import styled from "@emotion/styled"

import ConfigNav from "../components/config-nav"

const Container = styled("div")`
  display: flex;
  width: 100%;
`

const FormContainer = styled("form")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;

  width: 60%;
  max-height: 85vh;
  padding: 0 4%;

  .section {
    width: 100%;
    border-bottom: 1px solid #222;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 180px;

    h4 {
      margin: 0;
      color: lightgray;
      text-align: left;
    }
    .activeTitle {
      color: #222;
    }

    .activeBtn {
      button {
        color: #222;
      }
    }

    div {
      display: flex;
      align-items: center;
    }

    div:first-child {
      width: 20%;
    }
    div:last-child {
      width: 60%;
      justify-content: center;
    }

    button {
      margin: 0 20px;
      background: none;
      border: 2px solid lightgray;
      border-radius: 4px;
      color: lightgray;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.8px;
      width: 180px;
      height: 50px;
      cursor: pointer;
    }
  }
  .nextBtn {
    margin: 40px auto;
    width: 80%;
    height: 50px;
    border-radius: 6px;
    background: #0a5499;
    color: #fff;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }
`

const ImgContainer = styled("div")`
  width: 100%;
  max-height: 80vh;
`

const DR_Solution = () => {
  const [image, setImage] = useState("step1")

  return (
    <div>
      <ConfigNav />
      <Container>
        <FormContainer>
          <div className="section">
            <div>
              <h4 className="activeTitle">Speciality</h4>
            </div>
            <div>
              <select name="specialty" id="">
                <option value="">Hospital</option>
                <option value="">Urgent Care</option>
                <option value="">Spine Surgeon</option>
                <option value="">Hand Surgeon</option>
                <option value="">Urology</option>
                <option value="">Chest Sreening</option>
                <option value="">Chiropractics</option>
                <option value="">Orthopedic</option>
                <option value="">Podiatry</option>
                <option value="">Pediatric</option>
                <option value="">Mammography</option>
                <option value="">Emergency Response</option>
                <option value="">Veterinary</option>
              </select>
            </div>
          </div>

          <div className="section">
            <div>
              <h4 className="activeTitle">Mobility</h4>
            </div>
            <div className="activeBtn">
              <button>Portable</button>
              <button>Fixed</button>
            </div>
          </div>

          <div className="section">
            <div>
              <h4>Scintilator</h4>
            </div>
            <div>
              <button>Cesium</button>
              <button>Gadox</button>
            </div>
          </div>

          <div className="section">
            <div>
              <h4>Workstation</h4>
            </div>
            <div>
              <button>Desktop</button>
              <button>Laptop</button>
            </div>
          </div>

          <button className="nextBtn">Next</button>
        </FormContainer>

        <ImgContainer>
          {image === "step1" ? (
            <h1>step1</h1>
          ) : image === "step2" ? (
            <h1>step2</h1>
          ) : (
            <h1>step3</h1>
          )}
        </ImgContainer>
      </Container>
    </div>
  )
}

export default DR_Solution
