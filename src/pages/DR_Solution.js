import React, { useState } from "react"
import styled from "@emotion/styled"

import ConfigNav from "../components/config-nav"
import AirDRHero from "../components/HeroImages/airdr-hero"
import NureseHeroC from "../components/HeroImages/nurse-heroC"
import NurseHero2 from "../components/HeroImages/nurse-hero-2"

const Container = styled("div")`
  display: flex;
  width: 100%;
  height: 100vh;
`

const FormContainer = styled("form")`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 46%;
  max-height: 100vh;
  padding: 0 4%;
  margin-top: 80px;

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
  max-height: 100vh - 80px;
  overflow: hidden;
  padding: 0;
  margin-top: 80px;
`

const DR_Solution = () => {
  const [image, setImage] = useState("step1")
  const [stageOpen, setStageOpen] = useState({
    stage1: true,
    stage2: false,
    stage3: false,
    stage4: false,
  })

  const handleSelect = e => {
    e.preventDefault()
    console.log("selected", e.target.value)
    setImage(e.target.value)
  }

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
              <select
                name="specialty"
                id="step1-select"
                onChange={handleSelect}
              >
                <option value="step1">Hospital</option>
                <option value="step1">Urgent Care</option>
                <option value="step1">Spine Surgeon</option>
                <option value="step1">Hand Surgeon</option>
                <option value="step1">Urology</option>
                <option value="step2">Chest Sreening</option>
                <option value="step2">Chiropractics</option>
                <option value="step2">Orthopedic</option>
                <option value="step2">Podiatry</option>
                <option value="step2">Pediatric</option>
                <option value="step3">Mammography</option>
                <option value="step2">Emergency Response</option>
                <option value="step2">Veterinary</option>
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
            <AirDRHero />
          ) : image === "step2" ? (
            <NureseHeroC />
          ) : (
            <NurseHero2 />
          )}
        </ImgContainer>
      </Container>
    </div>
  )
}

export default DR_Solution
