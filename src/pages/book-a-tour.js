import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookTour from "../components/booktour"


const Bookatour = () => (
  <Layout>
    <SEO title="Book A Tour at Gawler Community Childcare Centre and Preschool" />
    <section className="section has-background-blue mb-6">
            <div className="container">
                <div className="columns">
                    <div className="column is-6">
                        <h1 className="title is-1">
                            Book A Tour<br></br> Of Our Centre
                        </h1>
                    </div>
                

                <div className="column is-6">
                    <div className="box">
                    <div className="content">
                        <p>
                        One of the best ways to see everything we have to offer at the 
                        Gawler Community Childcare and Preschool is to come in and have one of
                        our directors give you a full tour. We welcome any questions 
                        you might have about the centre during the tour. 
                        </p>
                        <p>
                          Simply fill out the booking request form below and we will confirm your
                          desired date and time via Email or Phone shortly.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section> 
    
    <BookTour />

  </Layout>
)

export default Bookatour
