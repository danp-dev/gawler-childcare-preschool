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




const Contact = ({data}) => {


return(

<Layout>
    <SEO title="Gawler Preschool" description="The Gawler Preschool is a great place for your kids to learn"/>
    <div>
    <Pagetitle pagetitle="Contact Gawler Childcare & Preschool" pagesubtitle="We are here to talk anytime you need us"/>

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
                        Contact details
                        </h3>
                        <p>
                        Email: <a href="mailto:info@gawlerchildcare.com.au">info@gawlerchildcare.com.au</a>
                        </p>
                        <p>
                        Phone: <a href="tel:0885222079">08 8522 2079</a>
                        </p>
                        <p>
                        Come visit us at: 2 Finch Road Gawler East, AUS, 5118
                        </p>
                        <p>
                        EVEN BETTER... Book in a tour of the centre below!
                        </p>
                      </div>
                      
                    </div>
                    
                  </div>
               <Booktour/></div>
            </div>
            
        </section>

    </div>

    </Layout>


);

}

export default Contact

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