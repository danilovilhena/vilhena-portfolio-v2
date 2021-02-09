import { navigate } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFoundImage from '../images/404.png'
import './styles/404.css'

const NotFoundPage = () => (
  <Layout>
    <SEO 
      lang="pt"
      title="404" 
      description="Página não encontrada, por favor retorne para o site!"/>
    
    <main className="mx-auto" id="NotFoundMain">
      <img src={NotFoundImage} alt="Ilustração de página não encontrada" className="NotFoundImage"></img>
      <h2 className="NotFoundH2">Página em construção ou não encontrada!</h2>
      <button className="NotFoundButton" onClick={() => navigate(-1)}>Voltar</button>
    </main>
  </Layout>
)

export default NotFoundPage