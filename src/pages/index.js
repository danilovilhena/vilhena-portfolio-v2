import { navigate } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AvatarImage from '../images/pfp.png'
import RocketIllustration from '../images/rocket.svg'
import ComputerIllustration from '../images/computer.svg'
import Curriculum from '../CV-DaniloVilhena.pdf' 
import '../styles/home.css'

const IndexPage = () => (
  <Layout>
    <SEO 
      lang="pt"
      title="Desenvolvedor Web" 
      description="Desenvolvedor web com ênfase na acessibilidade e otimização dos sites."/>
    
    <main className="mx-auto">
      <section id="top-section" className="mx-auto">
          <img src={AvatarImage} alt="Avatar do Danilo Vilhena" id="top-section-img"></img>
          <h2 id="top-section-h2">Olá, eu sou o Danilo!</h2>
          <p id="top-section-p">Sou um <span>desenvolvedor web</span> em Fortaleza. <br></br>Dou enfâse à acessibilidade, usabilidade e a garantir uma boa experiência para os usuários.</p>
      </section>
      <section className="bottom-section mx-auto">
          <section className="section">
              <img src={RocketIllustration} alt="Ilustração de um foguete"></img>
              <h3>Projetos</h3>
              <p>Descubra mais detalhes sobre as aplicações que já desenvolvi.</p>
              <button onClick={() => navigate('/projetos')}>Ver mais</button>
          </section>
          <section className="section">
              <img src={ComputerIllustration} alt="Ilustração de um computador"></img>
              <h3>Tecnologias</h3>
              <p>Conheça as tecnologias que tenho conhecimento e experiência</p>
              <button onClick={() => navigate('/tecnologias')}>Ver mais</button>
          </section>
      </section>
      <section className="bottom-section mx-auto">
        <a id="download" href={Curriculum} download>Baixar meu currículo</a>
      </section>
    </main>
  </Layout>
)

export default IndexPage
