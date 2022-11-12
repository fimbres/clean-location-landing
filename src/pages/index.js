import * as React from "react";
import Layout from "../components/Layout";

import "../styles/index.css";

const IndexPage = () => {
  return (
    <Layout>
      <div className="text-3xl text-red-500">hola</div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
