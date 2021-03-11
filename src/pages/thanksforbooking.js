import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import backgroundimg from "../images/background-kids.jpg"
import crayonsimage from "../images/Gawler-Childcare-Crayons.webp"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Pagetitle from "../components/pagetitles"
import Booktour from "../components/booktour"




const Thanksforbooking = ({data}) => {


return(

<Layout>
    <div>
    <Pagetitle pagetitle="Thanks for booking a tour!" pagesubtitle="We are here to talk anytime you need us"/>

        <section className="section is-small has-background-link-light">
            <div className="container">
                <div className="box">
                  <div className="columns">
                    <div className="column is-half">
                    <figure className="image">
                       <Img className="py-3 px-3" fluid={data.preschoolImage.childImageSharp.fluid} align="right"/>
                   </figure>
                    </div>
                    <div className="column is-half">
                      <div className="content">
                        <h3 className="is-size-4">
                        THANKS FOR BOOKING A TOUR OF THE GAWLER CHILDCARE & PRESCHOOL!
                        </h3>
                        <p>
                          We will be in touch shortly to confirm your desired tour date and to lock in a time.
                          In the meantime, if you need anything, please feel free to
                          <p>Email us <a href="mailto:info@gawlerchildcare.com.au">info@gawlerchildcare.com.au</a>
                          </p>
                          <p>
                          Or give us a call Phone: <a href="tel:0885222079">08 8522 2079</a>
                        </p>
                        </p>
                        
                      </div>
                      
                    </div>
                    
                  </div>
               </div>
            </div>
            
        </section>

    </div>

    </Layout>


);

}

export default Thanksforbooking

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
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)