import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

// images & styles
import projectImage from "../../images/v2-sf/wal.png"
import "../../styles/project.css"
import "../../styles/project.responsivity.css"

const WalPlugin = () => (
    <Layout title="WAL Plugin" description="Desenvolvedor front-end e UI designer com ênfase na acessibilidade e otimização dos sites. Projeto WAL Plugin.">
        <header className="project-header" style={{background: 'linear-gradient(90deg, #075089 0%, #2175AF 100%)', padding: '2rem 0 0 0'}}>
            <img src={projectImage} alt="Projeto WAL Plugin" style={{width: '60%'}}></img>
        </header>
        <main className="project-main">
            <h1>WAL Plugin</h1>
            <p className="project-date"><span aria-label="Calendário" role="img">📅</span> Fevereiro de 2021</p>

            <h2>Descrição</h2>
            <p>A WAL (Website Accessibility Layer) é uma extensão adicionada ao navegador que injeta recursos de acessibilidade em sistemas da Web automaticamente e em tempo de execução. A WAL lê o código do site e permite que o usuário modifique a sua interface de forma a ter uma melhor experiência ao utilizá-lo.</p>
            <p>Essa extensão consiste de uma barra flutuante e retrátil contendo recursos de acessibilidade personalizáveis, de forma transparente para o usuário. Assim, a WAL Plugin possibilita que os usuários ultrapassem barreiras ao navegar em sites e não fiquem excluídos do acesso.</p>

            <h2>Processo</h2>
            <p>Este foi o primeiro projeto que participei quando entrei no LEAD. A extensão estava com uma versão recém lançada e que havia sido enviada para testes com usuários de diferentes perfis de deficiência.</p>
            <p>Assim, as atividades iniciais foram voltadas para correção de bugs que retornaram dos testes, visando deixar a extensão o mais abrangente para o maior número de sites possível</p>
            <p>Após esse momento, o Product Owner elaborou novas funcionalidades para a ferramenta, validou as ideias com usuários e encaminhou para o nosso time de desenvolvimento. Então, passamos a desenvolver esses novos recursos para auxiliar ainda mais os usuários a navegar na internet</p>
            <p>Concluindo, a extensão já está com uma versão estável concluída, porém ainda não foi disponibilizada para os usuário finais por depender de outra empresa parceira para distribuir.</p>

            <Link to="/" className="return-button">Voltar</Link>
        </main>
    </Layout>
)

export default WalPlugin