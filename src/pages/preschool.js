import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"


import backgroundimg from "../images/background-kids.jpg"
import crayonsimage from "../images/Gawler-Childcare-Crayons.webp"
import cassieimage from "../images/Gawler-Childcare-Preschool-Teacher-Cassie.webp"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Pagetitle from "../components/pagetitles"




const Preschool = ({data}) => {


return(

<Layout>
    <SEO title="Gawler Preschool" description="The Gawler Preschool is a great place for your kids to learn"/>
    
    <div>
    <Pagetitle pagetitle="Gawler Preschool" pagesubtitle="A perfect place to start your childs education"/>

        <section className="section is-small has-background-link-light">
            <div className="container">
                <div className="box">
               <div className="content">
              
                <div className="columns">
                  <div className="column">
                  <p>
Our Preschool Teacher, Cassie, is a passionate University-trained teacher and strongly believes that every child has the right to belong and to be included. Cassie acknowledges that all children learn differently and therefore are provided with a range of learning opportunities that stimulate enthusiasm in their learning. With our recently improved natural learning environment, children are free to explore areas of interest that promote opportunities for sustained shared thinking and collaborative learning.
</p>
<p>
We believe that small groups enable children to build strong reciprocal relationships that promote confidence and independence. Children are provided with opportunities to explore their natural world and gain firsthand knowledge about how to grow food and plants and then how to cook with them. This creates open-ended and creative play, curiosity and wonder that provokes and scaffolds individual learning.
</p>
<p>
Cassie's focus is to build trusting relationships with children and their families. These genuine partnerships and relationships include shared decision making with families which are important to support a child's learning, wellbeing and inclusion of the centre.
</p>
<p>
The centre will also provide CAFHS Health Checks, visits to the Gawler East Primary School and welcome children's new teachers to visit our centre.
</p>
<p>
Our Preschool Program (15 hours p/week) is at no extra charge as it is included in the child's daily childcare fee. 

</p>
<Link to="/book-a-tour/" className="button is-primary" >Book A Tour Of The Gawler Preschool</Link>
                  </div>
                  <div className="column">
                    <figure className="image">
                       <img src={cassieimage} className="py-3 px-3 inline-image"></img>
                       </figure>
                  </div>
                </div>

                    <figure className="image">
                       <Img className="py-3 px-3" fluid={data.preschoolImage.childImageSharp.fluid} align="right"/>
                      </figure>

                    




               
               </div>
            </div>
            </div>
        </section>

    </div>

    </Layout>


);

}

export default Preschool

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