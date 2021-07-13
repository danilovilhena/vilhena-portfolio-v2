import React from "react"
import { navigate } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/pagina-de-vendas.png"
import result from "../../images/v2-results/landing_vendas.png"
import "../../styles/project.css"

const LandingVendas = () => (
    <Layout title="Landing page de vendas" description="Desenvolvedor front-end com ênfase na acessibilidade e otimização dos sites. Projeto de design de landing page de vendas.">
        <header class="project-header" style={{background: 'linear-gradient(107.56deg, #0C1B41 0%, #132D6C 100%)'}}>
            <img src={projectImage} alt="Projeto de design de landing page" data-aos="fade-down"></img>
        </header>
        <main className="project-main" data-aos="fade-up">
            <h1>Landing page de vendas</h1>
            <p className="project-date"><span alt="Calendário">📅</span> Abril de 2021</p>

            <h2>Motivação</h2>
            <p>Para esse projeto, os clientes pediram uma página de vendas para um curso que eles produziram. Dessa forma, o design deveria conter informações sobre os professores e detalhes sobre o curso.</p>
            <p>Além disso, a página deveria ter suas seções consistentes e ter botões de CTA claros e destacados para alcançar uma conversão maior.</p>

            <h2>Processo</h2>
            <p>Como essa era uma página mais simples, as seções deviam ser bem objetivas. Então, consultei o cliente para saber quais informações ele julgava necessárias para a página de vendas do seu produto.</p>
            <p>Após ele me entregar tais informações, fiz um esboço no papel de como elas deveriam ser estruturadas na página de forma que os compradores pudessem facilmente tirar suas dúvidas e prosseguir para a plataforma de vendas.</p>
            <p>Por fim, utilizei o Figma para fazer tanto um wireframing quanto uma versão mais completa para apresentar e validar com o cliente.</p>

            <h2>Resultado</h2>
            <img src={result} alt="Resultado da landing page de vendas" class="project-result-image"></img>

            <h2>Links de acesso</h2>
            <a href="https://recjus.com.br" class="project-link">
                <svg viewBox="0 0 128 128">
                <path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zM13.2 64L64 114.8c-28.1 0-50.8-22.7-50.8-50.8zm62.2 49.5l-60.9-61C19.7 30 39.9 13.2 64 13.2c16.6 0 31.3 7.9 40.5 20.2L97 40.6c-7.3-10.4-19.3-17.1-33-17.1-17.6 0-32.5 11.2-38.1 26.8C33.1 57 75.4 98.8 78.1 102c12.7-4.7 22.3-15.5 25.4-28.9H81.9v-9.4l33 .2c-.1 24.3-16.9 44.5-39.5 49.6z"></path>
                </svg>
                Aplicação
            </a>
            <a href="https://www.figma.com/file/0zZTx9yDxeMpQs4J7s16uM/execu%C3%A7%C3%A3o-trabalhista" class="project-link">
            <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
                Figma
            </a>

            <a onClick={() => navigate(-1)} class="return-button">Voltar</a>
        </main>
    </Layout>
)

export default LandingVendas