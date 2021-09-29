import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/flow-podcast.png"
import before from "../../images/v2-results/flow-podcast-old.jpg"
import result from "../../images/v2-results/flow-podcast.png"
import "../../styles/project.css"

const FlowPodcast = () => (
    <Layout title="Flow Podcast" description="Desenvolvedor front-end e UI designer com ênfase na acessibilidade e otimização dos sites. Projeto de redesign para o site do maior podcast do Brasil">
        <header className="project-header" style={{background: '#FFB709', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="Projeto de redesign do Flow Podcast" data-aos="fade-down" style={{width: '50%'}}></img>
        </header>
        <main className="project-main" data-aos="fade-up">
            <h1>Redesign do Flow Podcast</h1>
            <p className="project-date"><span aria-label="Calendário" role="img">📅</span> Abril de 2021</p>

            <h2>Motivação</h2>
            <p>Quando colocaram no ar esse site, logo comecei a usar, por acompanhar bastante o podcast. No entanto, desde o começo já eram perceptíveis falhas e inconsistências na interface que só foram aumentando.</p>
            <p>Muitos componentes prontos e característicos de frameworks (Material, Bootstrap, etc) estavam espalhados pelo site sem seguir nenhum padrão.</p>
            <p>Portanto, decidi fazer esse redesign para trazer essa consistência, solucionar outros problemas que identifiquei no site tanto para praticar o UI design quanto para propor essa mudança para os desenvolvedores do site.</p>

            <h2>Processo</h2>
            <p>Inicialmente, analisei as páginas para identificar as falhas de interface, como: hierarquia entre elementos, contraste, layout, design e acessibilidade em geral.</p>
            <p>Após essa análise, tirei prints de todas as telas e comecei a trabalhar no Figma. Pegando os pontos que havia elencado na análise, comecei a fazer os novos componentes e depois estruturá-los na página.</p>
            <p>Um dos erros mais comuns no site antigo era a inconsistência entre os elementos. Diversos deles que tinham a mesma função não seguiam o mesmo estilo (por vezes diferiam bastante).</p>
            <p>Outro ponto bem presente era a falta de hierarquia entre os componentes. Títulos, subtítulos e parágrafos quase não tinham distinção, dificultando o entendimento de seções do site.</p>

            <h2>Antes do redesign</h2>
            <img src={before} alt="Site antes do redesign do Flow Podcast" className="project-result-image"></img>
            <h2>Depois do redesign</h2>
            <img src={result} alt="Resultado do redesign do Flow Podcast" className="project-result-image"></img>

            <h2>Links de acesso</h2>
            <a href="https://www.figma.com/file/x8uDJ37ZdP0lgadsgLhJR1/flow-podcast?node-id=202%3A1525" className="project-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
                Figma
            </a>

            <Link to="/" className="return-button">Voltar</Link>
        </main>
    </Layout>
)

export default FlowPodcast