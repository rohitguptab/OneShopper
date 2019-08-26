import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container not-found">
      <h1>NOT FOUND</h1>
      <p>Oops, no pudimos encontrar lo que estabas buscando.</p>
    </div>
  </Layout>
)

export default NotFoundPage
