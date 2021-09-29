import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/tuttory.png"
import result from "../../images/v2/tuttory.png"
import "../../styles/project.css"

const Tuttory = () => (
    <Layout title="Tuttory" description="Desenvolvedor front-end e UI designer 
com ênfase na acessibilidade e otimização dos sites. Projeto de design Tuttory">
        <header className="project-header" style={{background: 'linear-gradient(107.57deg, #55D96B -4.12%, #25AA3B 104.25%)'}}>
            <img src={projectImage} alt="Projeto de design Tuttory" data-aos="fade-down"></img>
        </header>
        <main className="project-main" data-aos="fade-up">
            <h1>Tuttory</h1>
            <p className="project-date"><span aria-label="Calendário" role="img">📅</span> Maio de 2021</p>

            <h2>Motivação</h2>
            <p>Esse projeto foi motivado por uma disciplina no meu curso de Ciência da Computação. O objetivo era entregar um produto usando em uma sprint de 4 semanas.</p>
            <p>Dessa forma, decidimos construir uma aplicação para facilitar a conexão entre professores particulares e alunos e fiquei responsável pela parte de design da equipe.</p>

            <h2>Processo</h2>
            <p>Como só tinhamos uma sprint, o aplicativo Tuttory seria composto de um processo de onboarding, login/cadastro e uma visão das funcionalidades (decididas anteriormente) tanto como professor quanto como aluno, tendo em vista que o aplicativo seria usado por ambos.</p>
            <p>Inicialmente, fiz um wireframe das telas do projeto, para ter uma visão geral dos elementos e poder estruturá-los nas telas.</p>
            <p>Após esse momento, decidimos as cores do produto e comecei a escrever os textos da interface. Então, apliquei ambos nos wireframes e apresentei o projeto para a equipe para validação.</p>

            <h2>Resultado</h2>
            <p>Como esse projeto é mobile, coloquei apenas três telas de demonstração nessa página. Para conferir as demais telas, acesse o link do Figma após a imagem abaixo.</p>
            <img src={result} alt="Resultado do Tuttory" className="project-result-image"></img>

            <h2>Links de acesso</h2>
            <a href="https://www.figma.com/file/vEbTiEOYDMnq6WrsWz9UgL/Tuttory" className="project-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
                Figma
            </a>

            <Link to="/" className="return-button">Voltar</Link>
        </main>
    </Layout>
)

export default Tuttory