import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import backgroundimg from "../images/background-kids.jpg"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const About = () => {


return(

<Layout>
    <SEO title="About Gawler Childcare and Preschool" />
    <div>
       <section className="section has-background-purple mb-6">
            <div className="container">
                <div className="columns">
                    <div className="column is-6">
                        <h1 className="title is-1">
                            About Our Centre
                        </h1>
                    </div>
                

                <div className="column is-6">
                    <div className="box">
                    <div className="content">
                        <p>
                        
Gawler Community Child Care and Preschool is a fully accredited, approved Long Day Care Centre.
The service has been assessed against the National Quality Standards and have been awarded EXCEEDING in all seven areas.
Providing high quality education and care for children from 6 weeks to 6 years.
The Centres is a Not for Profit Centre aiming to keep the quality of care exceeding expectations and the fees low. 

                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section> 

        <section className="section is-small has-background-link-light">
            <div className="container">
                <div className="box py-6">
                <div className="columns has-text-centered is-vcentered">
                    <div className="column is-half-desktop is-offset-one-quarter-desktop">
                        <span className="icon is-large">
                            <i className="fas fa-cubes fa-3x"></i>
                        </span>
                            <h1 className="title is-1">Lets Play</h1>
                                <div className="content">
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
                </div>
                </div>
            </div>
            
        </section>

    </div>

    </Layout>


);

}

export default About 