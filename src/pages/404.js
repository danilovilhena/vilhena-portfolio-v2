import { Link } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import image from "../images/404.svg"
import "../styles/not-found.css"

const NotFound = () => (
  <Layout title="404" description="Page not found or still under construction!">
    <main className="mx-auto" id="not-found">
      <img src={image} alt="Page not found illustration"></img>
      <h1>Ops!</h1>
      <h2>This page was not found or is still under construction <span aria-label="Construction" role="img">🚧</span></h2>
      <Link to="/">Return</Link>
    </main>
  </Layout>
)

export default NotFound