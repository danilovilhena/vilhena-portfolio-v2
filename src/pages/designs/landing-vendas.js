import React from "react"

import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/pagina-de-vendas.png"
import "../../styles/project.css"

const LandingVendas = () => (
    <Layout title="Landing page de vendas" description="Desenvolvedor front-end com ênfase na acessibilidade e otimização dos sites. Projeto de design de landing page de vendas.">
        <header class="project-header">
            <img src={projectImage} alt="Projeto de design de landing page"></img>
        </header>
        <main className="project-main">
            <h1>Landing page de vendas</h1>
            <p className="project-date"><span alt="Calendário">📅</span> Abril de 2021</p>

            <h2>Motivação</h2>
            <p>Para esse projeto, os clientes pediram uma página de vendas para um curso que eles produziram. Dessa forma, o design deveria conter informações sobre os professores e detalhes sobre o curso.</p>
            <p>Além disso, a página deveria ter suas seções consistentes e ter botões de CTA claros e destacados para alcançar uma conversão maior.</p>

            <h2>Processo</h2>
            <p>asokdaoskdaoskd</p>

            <h2>Resultado</h2>

            <h2>Links de acesso</h2>
            <a href="https://recjus.com.br">Aplicação</a>
            <a href="https://www.figma.com/file/0zZTx9yDxeMpQs4J7s16uM/execu%C3%A7%C3%A3o-trabalhista">Figma</a>
        </main>
    </Layout>
)

export default LandingVendas