import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/landing-emails.png"
import result from "../../images/v2-results/landing-emails.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const LandingEmails = () => (
    <Layout title="Página de captura de e-mails" description="Desenvolvedor front-end e UI designer com ênfase na acessibilidade e otimização dos sites. Página de captura de e-mails">
        <header className="project-header" style={{background: '#181818', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="Página de captura de e-mails"style={{minWidth: '50%'}}></img>
        </header>
        <main className="project-main">
            <h1>Página de captura de e-mails</h1>
            <p className="project-date"><span aria-label="Calendário" role="img">📅</span> Outubro de 2020</p>
            
            <h2>Motivação</h2>
            <p>Nesse projeto, os clientes pediram uma página de captura para direcionar possíveis clientes para um grupo de Telegram. Assim, os principais objetivos para esse projeto foram: atingir uma excelente performance, ser totalmente responsivo e possuir bons CTAs (calls to action) para alcançar uma conversão maior.</p>

            <h2>Processo</h2>
            <p>O projeto foi bem simples com poucas páginas a serem desenvolvidas. Dessa forma, a maior parte dos esforços nesse projeto foi voltada à performance, sempre verificando a página no Google Lighthouse e realizando as alterações necessárias para atingir a nota 100, como: comprimindo as imagens, carregando apenas os arquivos necessários e reduzindo os tamanhos de bundle.</p>
            <p>Ademais, o outro foco do projeto foi tornar a página responsiva para todos os dispositivos, principalmente para celulares, já que a maior parte do acesso vem desses aparelhos. Já para organizar esse leads, utilizei o Mailchimp para guardar os e-mails das pessoas e poder utilizar a lista de e-mails depois.</p>
            <p>Por conclusão, atingi os objetivos traçados no começo de desenvolvimento: alcançar uma boa nota no PageSpeed Insights e tornar a página totalmente responsiva.</p>

            <h2>Resultado</h2>
            <img src={result} alt="Resultado da página de captura de e-mails" className="project-result-image"></img>

            <h2>Links de acesso</h2>
            <a href="https://www.figma.com/file/7zprPZ2ofF2wDXd1CppFBB/audiência-trabalhista" className="project-link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
                </svg>
                Figma
            </a>

            <Link to="/" className="return-button">Voltar</Link>
        </main>
    </Layout>
)

export default LandingEmails