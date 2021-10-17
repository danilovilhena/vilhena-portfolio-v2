import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/do-what.png"
import result from "../../images/v2-results/do-what.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const DoWhat = () => (
    <Layout title="do what?" description="Desenvolvedor front-end e UI designer com ênfase na acessibilidade e otimização dos sites. Projeto de design do what?">
        <header className="project-header" style={{background: 'linear-gradient(107.56deg, #0C6597 0%, #084668 100%)', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="Projeto de design do what?" data-aos="fade-down" style={{minWidth: '50%'}}></img>
        </header>
        <main className="project-main" data-aos="fade-up">
            <h1>do what?</h1>
            <p className="project-date"><span aria-label="Calendário" role="img">📅</span> Abril de 2021</p>

            <h2>Motivação</h2>
            <p>Para esse projeto, o objetivo era construir a minha versão minimalista porém esteticamente agradável de um to-do list (uma das aplicações mais comuns em cursos de desenvolvimento) para praticar um pouco de UI design.</p>

            <h2>Processo</h2>
            <p>Como esse era um design minimalista, busquei colocar apenas os elementos fundamentais para construir um to-do list funcional. Para isso, era necessário ter elementos auto-explicativos e intuitivos, como o campo de texto (com um texto que desperta o usuário a agir) e o botão de ação (adicionar nova tarefa) com um destaque do restante da página.</p>
            <p>Já em relação às tarefas, era necessário que estivessem claramente divididas e que o usuário possa interagir facilmente com elas, seja excluindo ou marcando como conclúida.</p>
            <p>Além disso, a seção de tarefas concluídas precisava ser distinta das demais tarefas mas ainda estar presente na interface, para que o usuário possa perceber o seu progresso.</p>

            <h2>Resultado</h2>
            <img src={result} alt="Resultado do do what?" className="project-result-image"></img>

            <h2>Links de acesso</h2>
            <a href="https://www.figma.com/file/YhNrHPWmb3WDJF4599iMVJ/do-what" className="project-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
                Figma
            </a>

            <Link to="/" className="return-button">Voltar</Link>
        </main>
    </Layout>
)

export default DoWhat