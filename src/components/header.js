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
  /* background: rgba(20, 20, 20, 0.5); */
  /* backdrop-filter: blur(10px); */
  z-index: 100;
`

const HeaderMain = styled("header")`
  margin: 20px auto;
  width: 100%;
  /* height: 180px; */
  /* background: linear-gradient(#5290c0, #2074b0); */
  background: transparent;
  justify-content: space-evenly;
  align-items: center;
  /* color: #fff; */
`

const HeaderContainer = styled("div")`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* max-width: 960px; */
  font-size: 1.1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`

const LogoContainer = styled("div")`
  margin: 0 20px;
  width: 120px;
  color: #fff;
  background: rgba(20, 20, 20, 0.4);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  box-shadow: 2px 2px 10px #3a3a3a55;
  outline: transparent;

  :hover {
    background: #0069aa99;
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    margin: {
      margin: theme.spacing(1),
    },
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
      color: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        // borderColor: "",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    "& > *": {
      margin: theme.spacing(1),
      backdropFilter: "blur(10px)",
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
          </LogoContainer>

          <Navbar />

          <form>
            <TextField
              className={classes.root}
              type="search"
              id="custom-css-outlined-input"
              label="Search..."
              variant="outlined"
            />
          </form>
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
