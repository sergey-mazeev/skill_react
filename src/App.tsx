import React from "react";
import Layout from "./modules/Layout/Layout";
import Header from "./modules/Header/Header";
import Content from "./modules/Content/Content";
import CardsList from "./modules/CardsList/CardsList";


export default function App() {
    return (
       <Layout>
           <Header/>
           <Content>
               <CardsList/>
           </Content>
       </Layout>
    );
}