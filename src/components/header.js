import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./HeroImages/image"
import Navbar from "./navbar"
import TextField from "@material-ui/core/TextField"

import { makeStyles } from "@material-ui/core/styles"
import styled from "@emotion/styled"

const HeaderWrapper = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(20, 20, 20, 0.8);
  z-index: 100;
`

const HeaderMain = styled("header")`
  /* margin: 20px auto; */
  width: 100%;
  /* height: 180px; */
  /* background: linear-gradient(#5290c0, #2074b0); */
  background: transparent;
  justify-content: space-evenly;
  align-items: center;
  /* color: #fff; */

  @media (max-width: 800px) {
    Navbar {
      display: none;
    }
  }
`

const HeaderContainer = styled("div")`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  form {
    margin: 0;

    @media (max-width: 1050px) {
      display: none;
    }
  }
`

const LogoContainer = styled("div")`
  /* margin: 0 20px; */
  width: fit-content;
  color: #fff;
  outline: transparent;
  display: flex;
  justify-content: space-between;
  /* width: fit-content; */
  align-items: center;

  img {
    :hover {
      background: #0069aa99;
      background: rgba(20, 20, 20, 0.4);
      border-radius: 50%;
      backdrop-filter: blur(10px);
      box-shadow: 2px 2px 10px #3a3a3a55;
      margin: 0;
    }
  }

  h4 {
    margin: 5px;
    font-size: 0.8rem;
    letter-spacing: 1.2px;
    font-weight: 200;
  }

  @media (max-width: 1400px) {
    h4 {
      font-size: 0.6rem;
      letter-spacing: 0;
    }
  }

  @media (max-width: 1050px) {
    width: 100%;
    justify-content: left;
    margin: 6px 0;
  }
`

const ActionContainer = styled("div")`
  margin: 0 20px;
`

const useStyles = makeStyles(theme => ({
  root: {
    margin: {
      margin: theme.spacing(1),
      color: "#fff",
    },
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
      color: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
        color: "#fff",
      },
    },
    "& > *": {
      margin: theme.spacing(1),
      color: "#fff",
    },
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <HeaderWrapper>
      <HeaderMain>
        <HeaderContainer>
          <LogoContainer>
            <Link to="/">
              <Image />
            </Link>
            <h4>| Image Capture Review</h4>
          </LogoContainer>

          <Navbar />

          <ActionContainer>
            <form>
              <TextField
                className={classes.root}
                type="search"
                id="custom-css-outlined-input"
                // label="Search..."
                // variant="outlined"
              />
            </form>
          </ActionContainer>
        </HeaderContainer>
      </HeaderMain>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
