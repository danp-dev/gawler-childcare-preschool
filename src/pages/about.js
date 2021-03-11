import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"


import outsideimg from "../images/Gawler-Community-Childcare-Centre-3.webp"



import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Pagetitle from "../components/pagetitles"


const About = () => {


return(

<Layout>
    <SEO title="About Gawler Childcare and Preschool" />
    <div>
    <Pagetitle pagetitle="About Gawler Childcare and Preschool" subtitle="Did you know our centre scored a 7 out of 7 stars"/> 

        <section className="section is-small has-background-link-light">
            <div className="container">
                <div className="box py-6">
                    <div className="columns">
                        <div className="column is-half">  
                        
                            <div className="content">     
                                    <h3 className="is-size-4">
                                    Gawler Community Childcare and Preschool is Exceeding in all 7 National Quality Standards
                                    </h3>
                                    <p>
It is widely recognized by early childhood professionals that children learn through play.
<br></br>During the early years children engage in exciting and powerful experiences that are crucial in building the foundation for development.</p>
<p>By immersing themselves in play, children express their ideas, use their imagination and engage in exploration and experimentation and manipulation.
The staff at our Centres treat all children with respect and are sensitive to the differing cultural and family values.</p>
<p>We believe that the child care setting should be an extension of the family unit and thus family practices and routines are followed whenever possible and the overall development of a child is enhanced if a strong partnership is formed between staff and family.
The health and safety of our children is paramount and continuous staff and parent communication enables the continued wellbeing of all our children.
Our children are provided with opportunities and guidance to develop self discipline and the confidence to make appropriate choices, accept responsibilities and achieve independence. We encourage our children to acknowledge and respect the needs and feelings of others and to care for their environment in a sustainable way.
Our aim is to provide quality care in a learning environment that is responsive to the needs of each child and their family, incorporating a child’s social, emotional and physical development.
                                    </p>
                                    
                            </div>
                        </div>
                        <div className="column is-half">
                            <figure className="image py-3">
                                <img src={outsideimg} alt="Outside Play area at Galwer Community Childcare">

                                </img>

                            </figure>
                        </div>
                    </div>
                    </div>
                
            </div>
            
        </section>

    </div>

    </Layout>


);

}

export default About 