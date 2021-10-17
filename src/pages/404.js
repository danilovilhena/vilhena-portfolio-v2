import { Link } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import image from "../images/404.svg"
import "../styles/not-found.css"

const NotFound = () => (
  <Layout title="404" description="Página não encontrada ou ainda em construção!">
    <main className="mx-auto" id="not-found">
      <img src={image} alt="Ilustração de página não encontrada"></img>
      <h1>Ops!</h1>
      <h2>Essa página não foi encontrada ou ainda está em construção <span aria-label="Construção" role="img">🚧</span></h2>
      <Link to="/">Voltar para o início</Link>
    </main>
  </Layout>
)

export default NotFound