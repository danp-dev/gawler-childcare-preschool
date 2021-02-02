import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import backgroundimg from "../images/background-kids.jpg"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Pagetitle from "../components/pagetitles"


const Preschool = () => {


return(

<Layout>
    <SEO title="Gawler Childcare and Preschool | Gawler Preschool" />
    <div>
    <Pagetitle pagetitle="PreSchool" pagesubtitle="A perfect place to start your childs education"/>

        <section className="section is-small has-background-link-light">
            <div className="container">
                <div className="box py-6">
                <div className="columns has-text-centered is-vcentered">
                    <div className="column is-6">
                        <span className="icon is-large">
                            <i className="fas fa-baby fa-3x"></i>
                        </span>
                            <h1 className="title is-4">Nursery</h1>
                                <h3 className="subtitle is-6">6 weeks - 2 1/2 years</h3>
                    </div>
                    <div className="column is-6">
                        <p>Children up to 2 and ½ years enjoy the security of the Nursery environment with nurturing educators whilst still being provided with stimulating curriculum.</p>
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
                        <p>Children between 2 and 4 years enjoy the toddler area and enjoy challenging activities to stimulate each child’s developmental needs. Our toddler room is a dynamic, fun filled learning environment which nurtures our children’s emerging self identity and guides them to develop independence, resilience and self-help skills which promotes lifelong learning.</p>
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
                                <h3 className="subtitle is-6">4 to 6 Years</h3>
                    </div>
                    <div className="column is-6">
                        <p>Children between 3 - 6 years enjoy the Kindy room. We aspire to provide a stimulating and nurturing environment where our children can learn through play. Educators will support and scaffold the children’s emerging skills in a way which will help children become lifelong learners.</p>
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
                        <p>Available for all children in the year before full-time school.
Preschool offers Aboriginal and Torres Strait Islander children access from three years of age.
Our Preschool program is offered to children who are enrolled in our childcare centre which is delivered by a University Qualified Teacher.
If your child is turning 4 years of age (or turning 4 before the 1st of May) they are eligible to access our preschool program of  up to 15 hours per week.  
There is no additional charge on top of your childcare fees for preschool.  
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

export default Preschool