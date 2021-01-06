import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero is-primary">
  <div className="hero-body">
    <div className="container has-text-centered">
      <h1 className="title">
        Gawler Community Childcare and Preschool Centre
      </h1>
      <h2 className="subtitle">
        Primary subtitle
      </h2>
    </div>
  </div>
</section>
<section>
<div className="container">
<div className="columns">
<div className="column">
  <div className="box has-text-centered">
    <h1 className="title is-5">
      Welcome to the Gawler Community Childcare and Preschool
    </h1>
  </div>
col1
</div>

<div className="column">
  col2
</div>
</div>
</div>

</section>
<section className="has-background-primary">
  <div className="container has-background-black">
    
    <div className="has-text-centered">
    <h1 className="title is-3">Our Rooms</h1>
    <span className="icon">
  <i className="fas fa-home"></i>
</span>
  </div></div>
</section>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
