import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/reset-digital.png"
import before from "../../images/v2-results/reset-digital-old.png"
import result from "../../images/v2-results/reset-digital.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const ResetDigital = () => (
    <Layout title="Reset Digital" description="Danilo Vilhena, front-end developer focused on accessibility and website optimization. Projeto de redesign para um site de captura">
        <header className="project-header" style={{background: 'linear-gradient(72.44deg, #383933 50%, #191C18 100%)', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="Projeto de redesign do Reset Digital" style={{minWidth: '50%'}}></img>
        </header>
        <main className="project-main">
            <h1>Redesign do Reset Digital</h1>
            <p className="project-date"><span aria-label="Calendar" role="img">📅</span> Maio  2021</p>

            <h2>Motivation</h2>
            <p>Recebi uma propaganda desse evento pelo Instagram e decidi entrar no site para fazer minha inscrição.</p>
            <p>Assim que entrei, já percebi alguns pontos inconsistentes e alguns detalhes que esteticamente desagradáveis. Alguns exemplos são: o pouco contraste entre o texto e a imagem de fundo da segunda seção, o rodapé ocupando um espaço maior que necessário, as bordas arredondadas demais na terceira seção e o excesso de uma cor na página (branco).</p>
            <p>Portanto, decidi fazer esse redesign para trazer essa consistência e praticar minhas habilidades de UI design.</p>

            <h2>Process</h2>
            <p>Inicialmente, tirei prints de todas as telas e comecei a trabalhar no Figma. Pegando os pontos que havia elencado na análise, comecei a fazer os novos componentes e depois estruturá-los na página.</p>
            <p>Dessa forma, corrigi os pontos e realizei o design para o site nos dispositivos mobile.</p>

            <h2>Antes do redesign</h2>
            <img src={before} alt="Site antes do redesign do Reset Digital" className="project-result-image"></img>
            <h2>Depois do redesign</h2>
            <img src={result} alt="Resultado do redesign do Reset Digital" className="project-result-image"></img>

            <h2>Access links</h2>
            <a href="https://www.figma.com/file/z3sgSuLo1ExYnce9tMhIj7/o-reset-digital?node-id=101%3A2" className="project-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
                Figma
            </a>

            <Link to="/" className="return-button">Return</Link>
        </main>
    </Layout>
)

export default ResetDigital