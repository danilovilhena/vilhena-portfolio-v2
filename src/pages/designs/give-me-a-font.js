import React from "react"
import { navigate } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/give-me-a-font.png"
import result from "../../images/v2-results/give-me-a-font.png"
import "../../styles/project.css"

const GiveMeAFont = () => (
    <Layout title="Give me a font!" description="Desenvolvedor front-end e UI designer com ênfase na acessibilidade e otimização dos sites. Projeto de design Give me a font!">
        <header className="project-header" style={{background: 'linear-gradient(107.56deg, #4C2772 0%, #7F42BD 100%)', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="Projeto de design Give me a font!" data-aos="fade-down" style={{width: '50%'}}></img>
        </header>
        <main className="project-main" data-aos="fade-up">
            <h1>Give me a font!</h1>
            <p className="project-date"><span alt="Calendário">📅</span> Fevereiro de 2021</p>

            <h2>Motivação</h2>
            <p>Após começar nessa área de UI design, percebi que diversas vezes eu repetia a tipografia entre os projetos e ficava "preso" em apenas duas fontes (as famosas Inter e Poppins). Por isso, decidi criar essa ferramenta para gerar uma fonte aleatória e poder testá-la em novos projetos.</p>

            <h2>Processo</h2>
            <p>O design desse projeto foi bem simples e objetivo. No início da página, temos uma breve explicação da funcionalidade do Give me a font! e já partimos para os cinco botões que refletem cada tipo de fonte com uma ilustração após isso para deixar a interface mais amigável.</p>
            <p>Após esse início, temos uma seção de tira-dúvidas para esclarecer o projeto e outras dúvidas relacionadas às fontes. Além disso, existe uma segunda tela que é a da fonte gerada, para acessá-la você pode tanto ir pelo Figma quanto pela aplicação em si (ambos os links no fim dessa página).</p>

            <h2>Resultado</h2>
            <img src={result} alt="Resultado do Give me a font!" className="project-result-image"></img>

            <h2>Links de acesso</h2>
            <a href="https://danilovilhena.github.io/give-me-a-font/" className="project-link" target="_blank">
                <svg viewBox="0 0 128 128">
                <path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zM13.2 64L64 114.8c-28.1 0-50.8-22.7-50.8-50.8zm62.2 49.5l-60.9-61C19.7 30 39.9 13.2 64 13.2c16.6 0 31.3 7.9 40.5 20.2L97 40.6c-7.3-10.4-19.3-17.1-33-17.1-17.6 0-32.5 11.2-38.1 26.8C33.1 57 75.4 98.8 78.1 102c12.7-4.7 22.3-15.5 25.4-28.9H81.9v-9.4l33 .2c-.1 24.3-16.9 44.5-39.5 49.6z"></path>
                </svg>
                Aplicação
            </a>
            <a href="https://www.figma.com/file/JSJRnOF7eTC79cpf9ctTMO/give-me-a-font" className="project-link" target="_blank">
            <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
                Figma
            </a>

            <a onClick={() => navigate(-1)} className="return-button">Voltar</a>
        </main>
    </Layout>
)

export default GiveMeAFont