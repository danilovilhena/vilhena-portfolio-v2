import { globalHistory } from "@reach/router"
import React from "react"
import PropTypes from "prop-types"

import Header from "./header/"
import Footer from "./footer/"
import "./layout.css"

const Layout = ({ children }) => {
  const { location } = globalHistory
  return (
    <>
      <Header />
      {children}
      {location.pathname.includes('contato') ? <></> : <Footer /> }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
