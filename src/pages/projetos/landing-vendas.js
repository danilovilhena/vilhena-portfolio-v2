import React from "react"
import { navigate } from "gatsby"
import Layout from "../../components/Layout"

// images & styles
import projectImage from "../../images/v2-sf/pagina-de-vendas.png"
import result from "../../images/v2-results/landing_vendas.png"
import "../../styles/project.css"

const LandingVendas = () => (
    <Layout title="Landing page de vendas" description="Desenvolvedor front-end e UI designer com ênfase na acessibilidade e otimização dos sites. Projeto de landing page de vendas.">
        <header className="project-header" style={{background: 'linear-gradient(107.56deg, #0C1B41 0%, #132D6C 100%)'}}>
            <img src={projectImage} alt="Projeto de design de landing page" data-aos="fade-down" style={{width: 'auto'}}></img>
        </header>
        <main className="project-main" data-aos="fade-up">
            <h1>Landing page de vendas</h1>
            <p className="project-date"><span alt="Calendário">📅</span> Abril de 2021</p>

            <h2>Motivação</h2>
            <p>Nesse projeto, os clientes pediram uma página de vendas para um curso que eles produziram. Assim, os principais objetivos para esse projeto foram: atingir uma excelente performance, ser totalmente responsivo e possuir bons CTAs (calls to action) para alcançar uma conversão maior.</p>

            <h2>Processo</h2>
            <p>Como o foco desse projeto era performance, decidi utilizar o framework Gatsby para poder programar em React e gerar páginas estáticas em produção. Com isso, consegui atingir uma página mais leve e otimizada.</p>
            <p>Além disso, o Gatsby possui alguns plugins de otimização, como: minificar arquivos JS e CSS, remover regras CSS não usadas, fazer o preload de fontes e outros links, gerar as rotas do site de forma automática (de acordo com a estrutura de pastas) e montar o sitemap de acordo com tais rotas.</p>
            <p>Quanto ao desenvolvimento em si, o projeto foi bem simples com poucas páginas a serem desenvolvidas. Dessa forma, a maior parte dos esforços nesse projeto foi voltada à performance, sempre verificando a página no Google Lighthouse e realizando as alterações necessárias para atingir a nota 100, como: comprimindo as imagens, carregando apenas os arquivos necessários e reduzindo os tamanhos de bundle.</p>
            <p></p>
            <p>Ademais, o outro foco do projeto foi tornar a página responsiva para todos os dispositivos, principalmente para celulares, já que a maior parte do acesso vem desses aparelhos. Utilizei o Tailwind como framework de CSS e para os breakpoints peguei o Bootstrap como referência, mas não usei o conceito mobile first, o qual poderia facilitar esse processo de estilização.</p>

            <p>Por conclusão, atingi os objetivos traçados no começo de desenvolvimento: alcançar uma boa nota no PageSpeed Insights e tornar a página totalmente responsiva.</p>

            <h2>Resultado</h2>
            <img src={result} alt="Resultado da landing page de vendas" className="project-result-image"></img>

            <h2>Links de acesso</h2>
            <a href="https://recjus.com.br" className="project-link">
                <svg viewBox="0 0 128 128">
                <path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zM13.2 64L64 114.8c-28.1 0-50.8-22.7-50.8-50.8zm62.2 49.5l-60.9-61C19.7 30 39.9 13.2 64 13.2c16.6 0 31.3 7.9 40.5 20.2L97 40.6c-7.3-10.4-19.3-17.1-33-17.1-17.6 0-32.5 11.2-38.1 26.8C33.1 57 75.4 98.8 78.1 102c12.7-4.7 22.3-15.5 25.4-28.9H81.9v-9.4l33 .2c-.1 24.3-16.9 44.5-39.5 49.6z"></path>
                </svg>
                Aplicação
            </a>
            <a onClick={() => navigate(-1)} className="return-button">Voltar</a>
        </main>
    </Layout>
)

export default LandingVendas