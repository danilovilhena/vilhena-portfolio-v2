import React from "react"
import SEO from "./seo"
import Header from "./Header"
import Footer from "./Footer"

const Layout = (props) => {
    const url = typeof window !== 'undefined' ? window.location.href : ''

    return (<>
    <SEO 
        lang="pt"
        title={props.title}
        description={props.description ? props.description : "Desenvolvedor front-end e UI designer com ênfase na acessibilidade e otimização dos sites."}/>
    <Header />
    {props.children}
    {!url.includes("404") && <Footer />}
    </>)
}

export default Layout

