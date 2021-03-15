import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import backgroundimg from "../images/Gawler-Childcare-Header-Image.png"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BookTour from "../components/booktour"

import tempimage from "../images/gatsby-astronaut.png"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Gawler Community Child Care and Preschool Centre"/>
    
    <section className="section  is-hidden-touch has-header-image-background">
    
      <div className="container has-text-centered">
          <h1 className="title is-hero-title">
          Gawler Community Childcare and Preschool Centre
          </h1>
  </div>
</section>

<section className="section">
        <div className="container is-primary">
            <div className ="columns is-vcentered">
                <div className="column ">
                <div className="">
                  <h4 className="subtitle is-size-5 is-dosis">Welcome to the</h4>
                   <h1 className="title is-size-1 is-dosis">Gawler Community  Childcare and Preschool</h1> 
                
                <div className="buttons">
                    
                <Link to="/book-a-tour-of-the-gawler-childcare/" className="button is-primary">Book A Tour Of The Centre</Link>
                
              
<a className="button is-outlined is-primary" href="tel:08 85222079">
  <span className="icon">
    <i className="fas fa-phone"></i>
  </span>
  <strong>Call Us</strong>
</a>
                    
                </div>
                
                </div>
                </div>
                
                <div className="column has-text-centered">
                
                   
                   <figure className="image">
  <Img fluid={data.outsideImage.childImageSharp.fluid}/>
</figure>

                   <h1 className="subtitle ">We aim to create a learning environment where every child is supported</h1> 
            
                </div>
                
            </div>
        </div>
    </section>
    
    
    <section className="section">
      <div className="container">
      <div className="box">
        <div className="container has-text-centered  py-6">
            
            <h1 className="title is-size-1">
                Gawler Childcare Rooms
            </h1>
            
            <div className="columns is-centered">
  <div className="column ">
      <div className="container has-border-orange py-4 has-rounded-corners">
      
      <span className="icon is-large">
  <i className="fas fa-baby fa-3x"></i>
</span>
      
      <h1 className="title is-size-4">
          Nursery
      </h1>
      <h3 className="subtitle is-size-5">
        Birth to 2 years
      </h3>
      </div>
  </div>
  <div className="column ">
    <div className="container has-border-blue py-4 has-rounded-corners">
    
    <span className="icon is-large">
<i className="fas fa-cubes fa-3x"></i>
</span>
    
    <h1 className="title is-size-4">
        Toddlers
    </h1>
    <h3 className="subtitle is-size-5">
        2 to 3 years
      </h3>
    </div>
</div>
<div className="column ">
  <div className="container has-border-purple py-4 has-rounded-corners">
  
  <span className="icon is-large">
<i className="fas fa-book-reader fa-3x"></i>
</span>
  
  <h1 className="title is-size-4">
      Kindy
  </h1>
  <h3 className="subtitle is-size-5">
        3 to 4 years
      </h3>
  </div>
</div>
<div className="column ">
  <div className="container has-border-red py-4 has-rounded-corners">
  
  <span className="icon is-large">
<i className="fas fa-chalkboard-teacher fa-3x"></i>
</span>
  
  <h1 className="title is-size-4">
      Preschool
  </h1>
  <h3 className="subtitle is-size-5">
        4 years +
      </h3>
  </div>
</div>
</div>
            
           <Link className="button is-primary is-long-button" to="/gawler-childcare-preschool-centre-rooms/">Find Out More About The Gawler Childcare Rooms</Link> 
        </div>
        
    </div> 
    </div>   
    </section>


    <section className="section is-small has-background-orange">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-one-thirds">
            <h1 className="title is-size-2">
              Our Main Values
            </h1>
              <h2 className="subtitle is-size-4">
                Our Philosophy and Mission
              </h2>
                <div className="content">  
                  <p>
                  At our centre the rights and best interests of the child are paramount. All children and their diverse families are valued, welcomed and supported by our trained and respectful educators. Children and families from all cultures are welcomed and the centre recognises Aboriginal and Torres Strait Islanders as the traditional owner of country throughout Australia.
                  </p>
                    <Link to="/about-gawler-childcare-and-preschool/" className="button is-primary">More About The Centre</Link>
                </div>
          </div>
          <div className="column">
          <figure className="image">
            <Img fluid={data.outsideImage2.childImageSharp.fluid}/>
          </figure>
          </div>
        </div>


      </div>

    </section>

    <section className="section is-small has-background-red">
      <div className="container">
        <div className="columns is-vcentered">
        <div className="column">
          <figure className="image">
            <Img fluid={data.preschoolImage.childImageSharp.fluid}/>
          </figure>
          </div>
          <div className="column is-one-thirds">
            <h1 className="title is-size-2">
              Learning Experiences
            </h1>
              <h2 className="subtitle is-size-4">
                It's all about the children
              </h2>
                <div className="content">  
                  <p>
                  Our educators work and respect each child’s unique qualities and abilities and provide all children experiences in learning that is dynamic, complex and holistic.
                  </p>
                  <Link to="/frequently-asked-questions-about-gawler-childcare/" className="button is-primary is-long-button">Frequently Asked Questions About The Gawler Childcare</Link>
                </div>
          </div>
        </div>


      </div>

    </section>

    <section className="section is-small has-background-pattern">
      <div className="container ">
          <div className="columns is-vcentered">
            <div class="column is-two-thirds-desktop ">
              
                <h1 className="title is-3 has-text-white">Want to know more?</h1>
                <h3 className="subtitle is-5 has-text-white"> A tour of the Gawler Childcare and Preschool is the best way to see everything we have to offer </h3>
                
            
              </div>
              <div class="column is-one-third-desktop has-text-centered">
              
              <Link to="/book-a-tour-of-the-gawler-childcare/" className="button is-light is-outlined">Book A Tour</Link>
            
              </div>
              </div>
      </div>
    </section>

    <div className="container has-text-centered pt-6">
          <h1 className="title is-size-2">Book A Tour</h1>
          <h3 className="title is-size-4">We just need a little information to get you booked in.</h3>
        </div>

  <BookTour />  


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

      outsideImage: file(relativePath: { eq: "Gawler-Community-Childcare-Centre-10.webp" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      outsideImage2: file(relativePath: { eq: "Gawler-Community-Childcare-Centre-2.webp" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
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
