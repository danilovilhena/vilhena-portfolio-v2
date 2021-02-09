import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

import Header from "./header/"
import Footer from './footer/'
import "./layout.css"

const Layout = ({ children }) => {
  const { sitePage } = useStaticQuery(graphql`
    query {
      sitePage {
        path
      }
    }
  `)
  return (
    <>
      <Header />
      {children}
      {sitePage.path.includes('contato') ? <></> : <Footer /> }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
