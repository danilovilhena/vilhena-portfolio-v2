import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

// images & styles
import projectImage from "../../images/v2-sf/wal-empathy.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const WalEmpathy = () => (
    <Layout title="WAL Empathy Lab" description="Danilo Vilhena, desenvolvedor front-end e UI designer com ênfase na acessibilidade e otimização dos sites. Projeto WAL Empathy Lab.">
        <header className="project-header" style={{background: 'linear-gradient(90deg, #075089 0%, #2175AF 100%)', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="Projeto WAL Empathy Lab"style={{minWidth: '50%'}}></img>
        </header>
        <main className="project-main">
            <h1>WAL Empathy Lab</h1>
            <p className="project-date"><span aria-label="Calendário" role="img">📅</span> Dezembro de 2020</p>

            <h2>Descrição</h2>
            <p>O WAL Empathy Lab é uma experiência de usuário, onde você poderá interagir com a Web e vivenciar situações cotidianas de pessoas com deficiência visual: baixa visão e cega.</p>
            <p>O usuário poderá escolher um personagem (cego ou baixa visão), experimentar o modo de navegação e as barreiras encontradas na Web, e eliminá-las através do uso dos recursos da Website Accessibility Layer (WAL). Experimentando como a ferramenta pode melhorar a acessibilidade das páginas Web.</p>

            <h2>Processo</h2>
            <p>Esse projeto foi feito em Angular em 9 dias, desde design das fases até liberação para produção. A nossa equipe era composta de desenvolvedores, designers, testadores e Product Owner do jogo.</p>
            <p>Trabalhamos com um desenvolvimento de forma acelerada, no mesmo dia PRs (pull requests) eram abertos com fases prontas ou parcialmente prontas, já eram revisados pelos demais membros da equipe e "mergeados" na branch principal.</p>
            <p>Nesse momento inicial, 6 fases foram desenvolvidas (3 simulando a experiência de uma pessoa cega e 3 de uma pessoa com baixa visão), apresentando algumas dificuldades que tais pessoas sofrem diariamente ao navegar na internet.</p>
            <p>Recentemente, incrementamos esse jogo adicionando mais 6 fases (3 de cada perfil também) com o mesmo objetivo: possibilitar aos usuários uma experiência de situações cotidianas para pessoas com deficiência na web.</p>

            <h2>Links de acesso</h2>
            <a href="https://leadfortaleza.com.br/empathywal/" className="project-link">
                <svg viewBox="0 0 128 128">
                <path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zM13.2 64L64 114.8c-28.1 0-50.8-22.7-50.8-50.8zm62.2 49.5l-60.9-61C19.7 30 39.9 13.2 64 13.2c16.6 0 31.3 7.9 40.5 20.2L97 40.6c-7.3-10.4-19.3-17.1-33-17.1-17.6 0-32.5 11.2-38.1 26.8C33.1 57 75.4 98.8 78.1 102c12.7-4.7 22.3-15.5 25.4-28.9H81.9v-9.4l33 .2c-.1 24.3-16.9 44.5-39.5 49.6z"></path>
                </svg>
                Aplicação
            </a>
            <Link to="/" className="return-button">Voltar</Link>
        </main>
    </Layout>
)

export default WalEmpathy