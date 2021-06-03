import React from "react"
import SEO from "./seo"
import Header from "./Header"
import Footer from "./Footer"

const Layout = (props) => (<>
    <SEO 
        lang="pt"
        title={props.title}
        description={props.description ? props.description : "Desenvolvedor front-end com ênfase na acessibilidade e otimização dos sites."}/>
    <Header />
    {props.children}
    <Footer />
</>)

export default Layout

