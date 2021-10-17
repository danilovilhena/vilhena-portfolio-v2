import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import projectImage from "../../images/v2-sf/buscador.png"
import result from "../../images/v2-results/buscador.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const Buscador = () => (
    <Layout title="Buscador de filmes" description="Danilo Vilhena, desenvolvedor front-end e UI designer com ênfase na acessibilidade e otimização dos sites. Projeto de buscador de filmes.">
        <header className="project-header" style={{background: 'linear-gradient(107.47deg, #8ECEA2 -5.57%, #48C0C3 105.74%)', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="Projeto de design de landing page"style={{minWidth: '50%'}}></img>
        </header>
        <main className="project-main">
            <h1>Buscador de filmes</h1>
            <p className="project-date"><span aria-label="Calendário" role="img">📅</span> Julho de 2020</p>

            <h2>Motivação</h2>
            <p>Esse projeto foi desenvolvido como parte de um processo seletivo para entrar no meu primeiro estágio, o objetivo era desenvolver uma SPA (Single Page Application) que consumisse uma API de filmes.</p>

            <h2>Processo</h2>
            <p>A tecnologia usada foi Angular e a aplicação funciona da seguinte maneira: ao entrar na página inicial, é feita uma requisição para a API The Movie DB para receber os dados dos filmes por gênero de filmes e organizar as seções do site; quando o usuário clicar em algum dos filmes, um modal é aberto para mostrar mais detalhes sobre o filme selecionado.</p>
            <p>Além disso, a aplicação possui mais duas funcionalidades: um campo de busca para que o usuário possa rapidamente encontrar o filme que deseja e funcionalidades de acessibilidade, como: alto contraste e mudança no tamanho da fonte. Essas funcionalidades são muito importantes, pois facilitam o acesso de usuário com alguma dificuldade ou deficiência visual, já que podem personalizar melhor a sua página.</p>
            <p>Dessa maneira, o projeto foi bem avaliado, cumpriu todos os requisitos propostos e consegui passar no processo seletivo deste estágio.</p>

            <h2>Resultado</h2>
            <img src={result} alt="Resultado do buscador de filmes" className="project-result-image"></img>

            <h2>Links de acesso</h2>
            <a href="https://vilhena-movies.netlify.app" className="project-link">
                <svg viewBox="0 0 128 128">
                <path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zM13.2 64L64 114.8c-28.1 0-50.8-22.7-50.8-50.8zm62.2 49.5l-60.9-61C19.7 30 39.9 13.2 64 13.2c16.6 0 31.3 7.9 40.5 20.2L97 40.6c-7.3-10.4-19.3-17.1-33-17.1-17.6 0-32.5 11.2-38.1 26.8C33.1 57 75.4 98.8 78.1 102c12.7-4.7 22.3-15.5 25.4-28.9H81.9v-9.4l33 .2c-.1 24.3-16.9 44.5-39.5 49.6z"></path>
                </svg>
                Aplicação
            </a>
            <a href="https://github.com/danilovilhena/angular-themoviedb-spa" className="project-link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fff" fill-rule="evenodd" clip-rule="evenodd" d="M3.61206 65.491C3.61206 32.138 30.6531 5.10303 64.0001 5.10303V5.10403C97.3501 5.10403 124.388 32.14 124.389 65.491C124.389 92.163 107.106 114.791 83.1261 122.785C80.0661 123.378 78.9781 121.495 78.9781 119.888C78.9781 119.228 78.9858 118.072 78.996 116.527C79.0168 113.413 79.0481 108.717 79.0481 103.316C79.0481 97.683 77.1181 94.007 74.9511 92.133C88.3981 90.637 102.525 85.531 102.525 62.337C102.525 55.744 100.182 50.357 96.3101 46.127C96.9371 44.607 99.0041 38.464 95.7171 30.147C95.7171 30.147 90.6531 28.524 79.1271 36.337C74.3001 34.998 69.1301 34.327 64.0001 34.304C58.8671 34.327 53.7001 35 48.8821 36.339C37.3421 28.526 32.2721 30.149 32.2721 30.149C28.9931 38.467 31.0601 44.609 31.6881 46.129C27.8251 50.359 25.4651 55.746 25.4651 62.339C25.4651 85.478 39.5661 90.657 52.9791 92.182C51.2521 93.69 49.6871 96.355 49.1451 100.258C45.6991 101.8 36.9581 104.468 31.5721 95.238C31.5721 95.238 28.3781 89.44 22.3151 89.015C22.3151 89.015 16.4221 88.937 21.9021 92.685C21.9021 92.685 25.8601 94.541 28.6071 101.521C28.6071 101.521 32.1521 112.299 48.9521 108.646C48.9662 111.389 48.9892 114.046 49.0072 116.131C49.0224 117.883 49.0341 119.232 49.0341 119.889C49.0341 121.484 47.9261 123.354 44.9091 122.794C20.9151 114.808 3.61206 92.173 3.61206 65.491ZM25.4491 91.9911C25.8791 92.196 26.3511 92.106 26.4841 91.8061L26.4831 91.8071C26.6361 91.507 26.3861 91.0941 25.9461 90.8971C25.5091 90.6901 25.0361 90.775 24.9061 91.0851C24.7641 91.386 25.0091 91.7951 25.4491 91.9911ZM27.6981 94.2551C28.0801 94.678 28.6431 94.8021 28.9301 94.5351L28.9311 94.5361C29.2331 94.2651 29.1551 93.707 28.7611 93.2811C28.3651 92.861 27.8191 92.7351 27.5211 93.0011C27.2281 93.272 27.3021 93.835 27.6981 94.2551ZM29.9621 97.4921C30.3361 98.029 30.9421 98.2701 31.3121 98.0121V98.0111C31.6901 97.7491 31.6901 97.104 31.3221 96.5591C30.9421 96.027 30.3451 95.7941 29.9721 96.0521C29.5921 96.3091 29.5921 96.954 29.9621 97.4921ZM33.0211 101.143C33.5371 101.64 34.2431 101.738 34.5731 101.373L34.5751 101.372C34.9281 101.009 34.7691 100.315 34.2421 99.8291C33.7231 99.3351 33.0141 99.233 32.6781 99.5991C32.3471 99.9631 32.4941 100.656 33.0211 101.143ZM37.5631 103.81C38.2481 104.012 38.9261 103.797 39.0731 103.324C39.2151 102.843 38.7681 102.293 38.0851 102.087C37.3961 101.872 36.7131 102.095 36.5731 102.572C36.4331 103.05 36.8801 103.603 37.5631 103.81ZM42.7361 104.605C43.4531 104.595 44.0331 104.183 44.0161 103.685L44.0171 103.684C44.0171 103.191 43.4281 102.791 42.7111 102.804C41.9891 102.818 41.4211 103.225 41.4211 103.728C41.4281 104.218 42.0131 104.622 42.7361 104.605ZM47.4881 104.02C48.2011 103.887 48.7001 103.388 48.6141 102.903V102.904C48.5241 102.411 47.8841 102.118 47.1701 102.241C46.4701 102.37 45.9621 102.869 46.0481 103.367C46.1381 103.848 46.7881 104.15 47.4881 104.02Z" />
                </svg>
                Github
            </a>
            <a href="https://www.figma.com/file/eFP78Pkpr4uMSxCjlJaDp5/SPA-The-Movie-DB" className="project-link" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 128 128">
                <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
                </svg>
                Figma
            </a>

            <Link to="/" className="return-button">Voltar</Link>
        </main>
    </Layout>
)

export default Buscador