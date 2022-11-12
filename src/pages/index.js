import * as React from "react";
import Layout from "../components/Layout";
import Header from '../components/Header'
import Features from '../components/Features'

import "../styles/index.css";

const IndexPage = () => {
  return (
    <>
    <Layout>
      <Header/>
      <Features/>
    </Layout>
  </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
