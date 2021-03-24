import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import backgroundimg from "../images/background-kids.jpg"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Pagetitle from "../components/pagetitles"


const Rooms = () => {


return(

<Layout>
    <SEO title="Gawler Childcare and Preschool Rooms" />
    <div>
    <Pagetitle pagetitle="Gawler Childcare and Preschool Rooms" pagesubtitle="From the nursery to our preschool, we care for children from birth to 6 years."/>

        <section className="section is-small has-background-link-light">
            <div className="container">
                <div className="box py-6">
                <div className="columns has-text-centered is-vcentered">
                    <div className="column is-6">
                        <span className="icon is-large">
                            <i className="fas fa-baby fa-3x"></i>
                        </span>
                            <h1 className="title is-4">Nursery</h1>
                                <h3 className="subtitle is-6">Birth - 2 1/2 years</h3>
                    </div>
                    <div className="column is-6">
                        <p>Children up to 2 and ½ years enjoy the security of the Nursery environment with nurturing educators whilst still being provided with stimulating curriculum.
                        The Nursery room will provide all children with a warm, nurturing, safe, inclusive and stimulating environment to ensure that all children have the best start in life, to create a better future for themselves, their community and their nation.

                        </p>
                    </div>
                </div>
                </div>
            </div>
            
        </section>

        <section className="section is-small has-background-warning-light">
            <div className="container">
            <div className="box py-6">
                <div className="columns has-text-centered is-vcentered">
                    <div className="column is-6">
                        <span className="icon is-large">
                            <i className="fas fa-cubes fa-3x"></i>
                        </span>
                            <h1 className="title is-4">Toddler's</h1>
                                <h3 className="subtitle is-6">2 to 4 Years</h3>
                    </div>
                    <div className="column is-6">
                        <p>
                        Our Toddler Room is a dynamic, fun-filled learning environment which nurtures all children's emerging self identities. It is a space where children learn at their own pace and explore new challenges. Our room is an energetic and creative room allowing for self-discovery and exploratory skills to investigate the world we live in. 
Our trusted and dedicated teach of professional Educators are nurturing and respectful and strongly believe that relationships are built by trust, respect and excellent communication skills. 
                        </p>
                    </div>
                </div>
                </div>
            </div>
            
        </section>

        <section className="section is-small has-background-link-light">
            <div className="container">
            <div className="box py-6">
                <div className="columns has-text-centered is-vcentered">
                    <div className="column is-6">
                        <span className="icon is-large">
                            <i className="fas fa-book-reader fa-3x"></i>
                        </span>
                            <h1 className="title is-4">Kindy</h1>
                                <h3 className="subtitle is-6">3 to 6 Years</h3>
                    </div>
                    <div className="column is-6">
                        <p>
                        We aspire to provide a stimulating and nurturing environment where all children can learn through play. Our educators will support and scaffold a child's emerging skills in a way which will help them to become life-long learners. Our Educators understand how to support children in their social and autonomy development. Educators do this by assisting them to develop a strong sense of wellbeing in readiness for school. The emphasis in our room is for each child to have fun, feel safe and secure and form trusting relationships within the room. 
                        </p>
                    </div>
                </div>
                </div>
            </div>
            
        </section> 

        <section className="section is-small has-background-warning-light">
            <div className="container">
            <div className="box py-6">
                <div className="columns has-text-centered is-vcentered">
                    <div className="column is-6">
                        <span className="icon is-large">
                            <i className="fas fa-chalkboard-teacher fa-3x"></i>
                        </span>
                            <h1 className="title is-4">Preschool</h1>
                                <h3 className="subtitle is-6">4 years +</h3>
                    </div>
                    <div className="column is-6">
                        <p>
                        Our Toddler Room is a dynamic, fun-filled learning environment which nurtures all children's emerging self identities. It is a space where children learn at their own pace and explore new challenges. Our room is an energetic and creative room allowing for self-discovery and exploratory skills to investigate the world we live in. 
Our trusted and dedicated teach of professional Educators are nurturing and respectful and strongly believe that relationships are built by trust, respect and excellent communication skills. 
</p>
                    </div>
                </div>
                </div>
            </div>
            
        </section>

    </div>

    </Layout>


);

}

export default Rooms 