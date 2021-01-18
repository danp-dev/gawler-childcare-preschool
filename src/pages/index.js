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
    
    <section className="section">
    <div className="container has-text-centered">
      <div className="title is-size-1">
        Gawler Community Childcare and Preschool
      </div>
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
  </div>
</div>
</div>
            
           <a className="button is-primary">Book A Tour</a> 
        </div>
        
    </div> 
    </div>   
    </section>


    <section className="section is-medium has-background-warning">
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

    <section className="section is-medium has-background-grey-light">
      <div className="container">
        <div className="columns is-vcentered">
        <div className="column">
          <figure className="image">
            <Img fluid={data.preschoolImage.childImageSharp.fluid}/>
          </figure>
          </div>
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
<label className="label">Username</label>
<div className="control has-icons-left has-icons-right">
<input className="input is-success" type="text" placeholder="Text input" value="bulma"/>
<span className="icon is-small is-left">
<i className="fas fa-user"></i>
</span>
<span className="icon is-small is-right">
<i className="fas fa-check"></i>
</span>
</div>
<p className="help is-success">This username is available</p>
</div>

<div className="field">
<label className="label">Email</label>
<div className="control has-icons-left has-icons-right">
<input className="input is-danger" type="email" placeholder="Email input" value="hello@"/>
<span className="icon is-small is-left">
<i className="fas fa-envelope"></i>
</span>
<span className="icon is-small is-right">
<i className="fas fa-exclamation-triangle"></i>
</span>
</div>
<p className="help is-danger">This email is invalid</p>
</div>

<div className="field">
<label className="label">Subject</label>
<div className="control">
<div className="select">
<select>
  <option>Select dropdown</option>
  <option>With options</option>
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
