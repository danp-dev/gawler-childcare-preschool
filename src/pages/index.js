import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import backgroundimg from "../images/background-kids.jpg"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import tempimage from "../images/gatsby-astronaut.png"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <section className="section is-hidden-touch">
    
    <div className="container has-text-centered">
      <h1 className="title is-size-1">
        Gawler Community Childcare and Preschool
      </h1>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
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
                    
                <Link className="button is-primary" to="/book-a-tour/">Book A Tour</Link>

              
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
  <Img fluid={data.preschoolImage.childImageSharp.fluid}/>
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
                OUR ROOMS
            </h1>
            
            <div className="columns is-centered">
  <div className="column ">
      <div className="container has-background-warning py-4 has-rounded-corners">
      
      <span className="icon is-large">
  <i className="fas fa-baby fa-3x"></i>
</span>
      
      <h1 className="title is-size-4">
          Nursery
      </h1>
      <h3 className="subtitle is-size-5">
        6 weeks to 2 years
      </h3>
      </div>
  </div>
  <div className="column ">
    <div className="container has-background-warning py-4 has-rounded-corners">
    
    <span className="icon is-large">
<i className="fas fa-cubes fa-3x"></i>
</span>
    
    <h1 className="title is-size-4">
        Toddlers
    </h1>
    <h3 className="subtitle is-size-5">
        2 to 4 years
      </h3>
    </div>
</div>
<div className="column ">
  <div className="container has-background-warning py-4 has-rounded-corners">
  
  <span className="icon is-large">
<i className="fas fa-book-reader fa-3x"></i>
</span>
  
  <h1 className="title is-size-4">
      Kindy
  </h1>
  <h3 className="subtitle is-size-5">
        4 to 6 years
      </h3>
  </div>
</div>
<div className="column ">
  <div className="container has-background-warning py-4 has-rounded-corners">
  
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
            
           <Link className="button is-primary" to="/rooms/">Find Out More</Link> 
        </div>
        
    </div> 
    </div>   
    </section>


    <section className="section is-medium has-background-orange">
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
                    <a className="button is-primary">Book A Tour</a>
                </div>
          </div>
          <div className="column">
          <figure className="image">
            <Img fluid={data.preschoolImage.childImageSharp.fluid}/>
          </figure>
          </div>
        </div>


      </div>

    </section>

    <section className="section is-small my-6">
      <div className="containter ">
          <div className="columns ">
            <div class="column has-text-centered ">
            <h1 className="title is-3">Want to know more?</h1>
              <h3 className="subtitle is-5"> A tour of our centre is the best way to see everything we have to offer </h3>
              <Link className="button is-warning" to="/book-a-tour/">Book A Tour</Link>
            </div>
              </div>
      </div>
    </section>

    <section className="section is-medium has-background-purple">
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
                    <a className="button is-primary">Book A Tour</a>
                </div>
          </div>
        </div>


      </div>

    </section>

    <section className="section">
      <div className="columns is-mobile">
      <div className="column is-three-fifths is-offset-one-fifth">
        <div className="container has-text-centered">
          <h1 className="title is-size-2">Get In Touch</h1>
          <h3 className="title is-size-4">Send Us A Message</h3>
        </div>
          
      <form name="contact" method="POST" data-netlify="true">

<div className="field">
<label className="label">Name</label>
<div className="control">
<input className="input" type="text" placeholder="Text input"/>
</div>
</div>

<div className="field">
<label className="label">Email</label>
<div className="control has-icons-left has-icons-right">
<input className="input is-danger" type="email" placeholder="Email input"/>
<span className="icon is-small is-left">
<i className="fas fa-envelope"></i>
</span>
<span className="icon is-small is-right">
<i className="fas fa-exclamation-triangle"></i>
</span>
</div>
</div>

<div className="field">
<label className="label">Which Room are you interested in?</label>
<div className="control">
<div className="select">
<select>
  <option>Select</option>
  <option>Nursery</option>
  <option>Toddler</option>
  <option>Kindy</option>
  <option>Preschool</option>
</select>
</div>
</div>
</div>

<div className="field">
<label className="label">Message</label>
<div className="control">
<textarea className="textarea" placeholder="Textarea"></textarea>
</div>
</div>

<div className="field">
<div className="control">
<label className="checkbox">
<input type="checkbox"/>
I agree to the <a href="#">terms and conditions</a>
</label>
</div>
</div>

<div className="field">
<div className="control">
<label className="radio">
<input type="radio" name="question"/>
Yes
</label>
<label className="radio">
<input type="radio" name="question"/>
No
</label>
</div>
</div>

<div className="field is-grouped">
<div className="control">
<button className="button is-link">Submit</button>
</div>
<div className="control">
<button className="button is-link is-light">Cancel</button>
</div>
</div>

</form>



      </div>
      </div>
    </section>
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
