import { globalHistory } from "@reach/router"
import React from "react"
import PropTypes from "prop-types"

import HeaderEn from "./headerEn"
import FooterEn from "./footerEn"
import "./layout.css"

const LayoutEn = ({ children }) => {
  const { location } = globalHistory
  
  return (
    <>
      <HeaderEn />
      {children}
      {location.pathname.includes('contact') ? <></> : <FooterEn /> }
    </>
  )
}

LayoutEn.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutEn
