import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import tempimage from "../images/gatsby-astronaut.png"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <section className="hero is-primary is-medium has-kids-on-hill-bg">
  <div className="hero-body">
  
    <div className="container has-text-centered">
      <h1 className="title">
        Medium title
      </h1>
      <h2 className="subtitle">
        Medium subtitle
      </h2>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  </div>
</section>

<section className="section">
        <div className="container is-primary">
            <div className ="columns is-vcentered">
                <div className="column ">
                <div className="">
                  <h4 className="subtitle is-size-5 is-dosis">Welcome to the</h4>
                   <h1 className="title is-size-1 is-dosis">Gawler Community  Childcare and Preschool</h1> 
                
                <div className="">
                    
                    <a className="button is-primary">Book A Tour</a>
                    
                    <a className="button is-secondary">Book A Tour</a>
                    
                </div>
                
                </div>
                </div>
                
                <div className="column has-text-centered">
                
                   
                   <figure className="image">
  <Img fluid={data.preschoolImage.childImageSharp.fluid}/>
</figure>

                   <h1 className="subtitle ">We aim to create a learning environment where every child is supported</h1> 
            
                </div>
                
            </div>
        </div>
    </section>
    
    <section className="section has-background-info">
        <div className="container has-text-centered  pb-6 pt-6">
            
            <h1 className="title is-size-1">
                OUR ROOMS
            </h1>
            
            <div className="columns is-centered">
  <div className="column ">
      <div className="container has-background-warning pb-3 pt-3">
      
      <span className="icon">
  <i className="fas fa-baby is-large"></i>
</span>
      
      <h1 className="title is-size-4">
          Infants
      </h1>
      </div>
  </div>
  <div className="column ">
    <div className="container has-background-warning pb-3 pt-3">
    
    <span className="icon">
<i className="fas fa-baby is-large"></i>
</span>
    
    <h1 className="title is-size-4">
        Infants
    </h1>
    </div>
</div>
<div className="column ">
  <div className="container has-background-warning pb-3 pt-3">
  
  <span className="icon">
<i className="fas fa-baby is-large"></i>
</span>
  
  <h1 className="title is-size-4">
      Infants
  </h1>
  </div>
</div>
<div className="column ">
  <div className="container has-background-warning pb-3 pt-3">
  
  <span className="icon">
<i className="fas fa-baby is-large"></i>
</span>
  
  <h1 className="title is-size-4">
      Infants
  </h1>
  </div>
</div>
</div>
            
           <a className="button is-primary">Book A Tour</a> 
        </div>
        
        
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

export const pageQuery = (graphql`
    query {
      placeholderImage: file(relativePath: { eq: "background-kids.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1344) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      preschoolImage: file(relativePath: { eq: "Gawler-Preschool.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
